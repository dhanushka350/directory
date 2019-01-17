function setAd(row) {
    var id = $(row).closest("tr").find('td:eq(0)').text();
    localStorage.setItem("selectedAd", id);
    location.replace("/home/profileview");
}

function notActivated() {
    swal("Advertisement Not Activated Yet.");
}

var VENDOR_AD_LIST = {

    allAds: function () {
        var name = localStorage.getItem('VENDOR');
        $('#ad_list tbody tr td').remove();
        $.ajax({
            url: "/admin/get/all/advertisement",
            dataType: 'json',
            contentType: "application/text",
            type: 'POST',
            data: name,
            success: function (data, textStatus, jqXHR) {
                if (data.length <= 0) {
                    $('#ad_list').append('<tr>\n\
                               <td colspan=9><p align="center">No records found..\n\
                               </p></td>\n\
                               </tr>');
                } else {
                    for (var i = 0; i < data.length; i++) {
                        if (data[i].ad_status === "offline") {
                            $('#ad_list').append('<tr>\n\
                                    <td style="font-size: x-small;font-weight: bold;text-align: left">' + data[i].id + '</td>\n\
                                    <td style="font-size: x-small;font-weight: bold;text-align: left">' + data[i].type + '</td>\n\
                                    <td style="font-size: x-small;font-weight: bold;text-align: left">' + data[i].created_date + '</td>\n\
                                    <td style="font-size: x-small;font-weight: bold;text-align: left">' + data[i].expire_date + '</td>\n\
                                    <td style="font-size: x-small;font-weight: bold;text-align: left">' + data[i].title + '</td>\n\
                                    <td style="font-size: x-small;font-weight: bold;text-align: left">' + data[i].payment_status + '</td>\n\
                                    <td style="font-size: x-small;font-weight: bold;text-align: left">' + data[i].ad_status + '</td>\n\
                                    <td style="font-size: x-small;font-weight: bold;text-align: left" class=" last"><a href="#" onclick="notActivated();">View</a></td>\n\
                                    </tr>');
                        } else {
                            $('#ad_list').append('<tr>\n\
                                    <td style="font-size: x-small;font-weight: bold;text-align: left">' + data[i].id + '</td>\n\
                                    <td style="font-size: x-small;font-weight: bold;text-align: left">' + data[i].type + '</td>\n\
                                    <td style="font-size: x-small;font-weight: bold;text-align: left">' + data[i].created_date + '</td>\n\
                                    <td style="font-size: x-small;font-weight: bold;text-align: left">' + data[i].expire_date + '</td>\n\
                                    <td style="font-size: x-small;font-weight: bold;text-align: left">' + data[i].title + '</td>\n\
                                    <td style="font-size: x-small;font-weight: bold;text-align: left">' + data[i].payment_status + '</td>\n\
                                    <td style="font-size: x-small;font-weight: bold;text-align: left">' + data[i].ad_status + '</td>\n\
                                    <td style="font-size: x-small;font-weight: bold;text-align: left" class=" last"><a href="#" onclick="setAd(this);">View</a></td>\n\
                                    </tr>');
                        }
                    }
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {

            },
            beforeSend: function (xhr) {

            }
        });
    },
}