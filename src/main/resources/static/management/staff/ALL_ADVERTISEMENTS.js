var page = 0;


function notWorkingAlert() {
    swal("Service not available");
}

function viewAdvertisement(row) {
    var item = $(row).closest("tr").find(".id").text();
    localStorage.setItem("selectedAd", item);
    window.open("/system/admin/service/manage/advertisement", "_self");
    // window.open("/home/profileview", "_blank");
}


function setPage(page) {
    swal("Service not available");
    // if (page.trim() === "Next") {
    //     this.page++;
    //     CATEGORY.CateList();
    // } else {
    //     this.page--;
    //     CATEGORY.CateList();
    // }
}

var ADVERTISMENTS = {
    AllList: function () {
        $('#tbl_ads tbody tr td').remove();
        $.ajax({
            url: "/staff/get/all/ads?page=" + page + "&size=6",
            dataType: 'json',
            contentType: "application/json",
            type: 'GET',
            success: function (data, textStatus, jqXHR) {
                if (data.length <= 0) {
                    $('#tbl_ads').append('<tr>\n\
                               <td colspan=9><p align="center" style="color: teal">No records found in your database\n\
                               </p></td>\n\
                               </tr>');
                } else {
                    for (var i = 0; i < data.length; i++) {

                        var status;
                        if (data[i].status == 0) {
                            status = "INACTIVE";
                        } else if (data[i].status == 1) {
                            status = "ACTIVE";
                        } else {
                            status = "BLOCKED";
                        }

                        $('#tbl_ads').append('<tr style="cursor: pointer">\n\
                                    <td class="id">' + data[i].id + '</td>\n\
                                    <td>' + data[i].title + '</td>\n\
                                    <td>' + data[i].vendor + '</td>\n\
                                    <td>' + data[i].category + '</td>\n\
                                    <td>' + data[i].city + '</td>\n\
                                    <td>' + data[i].createdDate + '</td>\n\
                                    <td>' + data[i].endDate + '</td>\n\
                                    <td>' + data[i].referral + '</td>\n\
                                    <td>' + status + '</td>\n\
                                    <td style="text-align: center"><button class="mini ui button teal" onclick="viewAdvertisement(this);">View</button></td>\n\
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