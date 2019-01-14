var page = 0;

$('#save').click(function (e) {
    e.preventDefault();
    CITY.save_city();

});

function notWorkingAlert() {
    swal("Service not available");
}

function setPage(page) {
    if (page.trim() === "Next") {
        this.page++;
        CITY.CityList();
    } else {
        this.page--;
        CITY.CityList();
    }
}

function runSaveScript(e) {
    if (e.keyCode == 13) {
        CITY.save_city();
    }
}

var CITY = {
    save_city: function () {
        if ($('#city').val().length < 3) {
            swal("please enter valid city name.");
        } else {
            var e = {};
            e["id"] = "";
            e["city"] = $('#city').val();
            e["ads"] = "";
            var d = JSON.stringify(e);

            $.ajax({
                url: '/staff/save/new/area',
                dataType: 'text',
                contentType: "application/json",
                type: 'POST',
                data: d,
                success: function (data, textStatus, jqXHR) {
                    swal(data);
                    $('#city').val("");
                    this.page = 0;
                    CITY.CityList();
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    swal(textStatus);

                },
                beforeSend: function (xhr) {

                }
            });
        }
    },
    CityList: function () {
        $('#tbl_city tbody tr td').remove();
        $.ajax({
            url: "/staff/get/city/list?page=" + page + "&size=6",
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
                                    <td>' + data.content[i].city + '</td>\n\
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