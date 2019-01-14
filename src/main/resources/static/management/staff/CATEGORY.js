var page = 0;


function setPage(page) {
    if (page.trim() === "Next") {
        this.page++;
        CATEGORY.CateList();
    } else {
        this.page--;
        CATEGORY.CateList();
    }
}


$('#save').click(function (e) {
    e.preventDefault();
    CATEGORY.save_category();

});

function runSaveScript(e) {
    if (e.keyCode == 13) {
        CATEGORY.save_category();
    }
}

function notWorkingAlert() {
    swal("Service not available");
}

var CATEGORY = {
    save_category: function () {
        if ($('#category').val().length < 2) {
            swal("please enter valid category name.");
        } else {
            var e = {};
            e["id"] = "";
            e["category"] = $('#category').val();
            e["adCount"] = "";
            var d = JSON.stringify(e);

            $.ajax({
                url: '/staff/save/new/category',
                dataType: 'text',
                contentType: "application/json",
                type: 'POST',
                data: d,
                success: function (data, textStatus, jqXHR) {
                    swal(data);
                    $('#category').val("");
                    this.page = 0;
                    CATEGORY.CateList();
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    swal(textStatus);

                },
                beforeSend: function (xhr) {

                }
            });
        }
    },
    CateList: function () {
        $('#tbl_city tbody tr td').remove();
        $.ajax({
            url: "/staff/get/category/list?page=" + page + "&size=6",
            dataType: 'json',
            contentType: "application/json",
            type: 'GET',
            success: function (data, textStatus, jqXHR) {
                if (data.content.length <= 0) {
                    $('#tbl_city').append('<tr>\n\
                               <td colspan=9><p align="center" style="color: teal">No records found in your database\n\
                               </p></td>\n\
                               </tr>');
                } else {
                    for (var i = 0; i < data.content.length; i++) {

                        $('#tbl_city').append('<tr style="cursor: pointer">\n\
                                    <td>' + data.content[i].id + '</td>\n\
                                    <td>' + data.content[i].category + '</td>\n\
                                    <td>' + data.content[i].adCount + '</td>\n\
                                    <td style="text-align: center"><button class="mini ui button teal" onclick="notWorkingAlert();">View</button></td>\n\
                                    </tr>');

                    }
                }

            },
            error: function (jqXHR, textStatus, errorThrown) {
                swal(textStatus);
            },
            beforeSend: function (xhr) {

            },

        });
    }
}