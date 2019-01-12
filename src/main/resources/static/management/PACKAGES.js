$(document).ready(function () {
    $(".img_up").click(function (event) {
        localStorage.removeItem('CURRENT_UPLOADING_PACKAGE');
        localStorage.setItem('CURRENT_UPLOADING_PACKAGE', event.target.id);
    });
    disableFedilds(true);
});

$('#save').click(function (e) {
    e.preventDefault();
    PACKAGE.save();

});

$('#cmb_ads').on('change', function () {
    PACKAGE.getSelectedPackage(this.value);
});

var PACKAGE = {
    save: function () {
        if ("all" === $('#cmb_ads').find(":selected").val()) {
            swal("Please Select An Advertisement.");
            $("html, body").animate({scrollTop: 0}, "slow");
        } else {
            var e = {}
            e["adID"] = $('#cmb_ads').find(":selected").val();
            e["packageName1"] = $('#packageName1').val();
            e["packageName2"] = $('#packageName2').val();
            e["packageName3"] = $('#packageName3').val();
            e["packageName4"] = $('#packageName4').val();
            e["packageName5"] = $('#packageName5').val();
            e["packageName6"] = $('#packageName6').val();

            e["packagePrice1"] = $('#packagePrice1').val();
            e["packagePrice2"] = $('#packagePrice2').val();
            e["packagePrice3"] = $('#packagePrice3').val();
            e["packagePrice4"] = $('#packagePrice4').val();
            e["packagePrice5"] = $('#packagePrice5').val();
            e["packagePrice6"] = $('#packagePrice6').val();

            e["packageDes1"] = $('#pdesc1').val();
            e["packageDes2"] = $('#pdesc2').val();
            e["packageDes3"] = $('#pdesc3').val();
            e["packageDes4"] = $('#pdesc4').val();
            e["packageDes5"] = $('#pdesc5').val();
            e["packageDes6"] = $('#pdesc6').val();

            e["packageImage1"] = $('#s1').attr('src');
            e["packageImage2"] = $('#s2').attr('src');
            e["packageImage3"] = $('#s3').attr('src');
            e["packageImage4"] = $('#s4').attr('src');
            e["packageImage5"] = $('#s5').attr('src');
            e["packageImage6"] = $('#s6').attr('src');

            var d = JSON.stringify(e);

            $.ajax({
                url: '/admin/save_packages/step-2',
                dataType: 'json',
                contentType: "application/json",
                type: 'POST',
                data: d,
                success: function (data, textStatus, jqXHR) {
                    if (data.status) {
                        swal("Success!", "packages added.");
                        setTimeout(function () {
                            window.location.replace("/admin/all/advertisements");
                        }, 1000);
                    } else {
                        swal("Oops!", data.message, "error");
                    }


                },
                error: function (jqXHR, textStatus, errorThrown) {
                    console.log("error" + jqXHR + " - " + errorThrown);
                    console.log(textStatus);
                    console.log("R: " + jqXHR.status);
                    console.log("R: " + jqXHR.responseText);
                    swal("Oops!", "please try again later.", "error");

                },
                beforeSend: function (xhr) {

                }
            });
        }

    },
    getAllAds: function () {
        var name = localStorage.getItem('VENDOR');
        $('#cmb_ads')
            .find('option')
            .remove()
            .end()
            .append('<option value="all">Select Advertisement</option>')
            .val('all');

        $.ajax({
            url: "/admin/get/all/advertisement",
            dataType: 'json',
            contentType: "application/json",
            type: 'POST',
            data: name,
            success: function (data, textStatus, jqXHR) {
                if (data.length <= 0) {
                    swal("No advertisement found.");
                } else {
                    for (var i = 0; i < data.length; i++) {
                        $('#cmb_ads').append($('<option>', {
                            value: data[i].id,
                            text: data[i].title
                        }));
                    }
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {

            },
            beforeSend: function (xhr) {

            }
        });

    },
    getSelectedPackage: function (id) {
        console.log(id);
        if (id === "all") {
            disableFedilds(true);
        }
        else {
            disableFedilds(false);
            $.ajax({
                url: "/admin/view_packages",
                dataType: 'json',
                contentType: "application/json",
                type: 'POST',
                data: id,
                success: function (data, textStatus, jqXHR) {
                    $('#packageName1').val(data.packageName1);
                    $('#packageName2').val(data.packageName2);
                    $('#packageName3').val(data.packageName3);
                    $('#packageName4').val(data.packageName4);
                    $('#packageName5').val(data.packageName5);
                    $('#packageName6').val(data.packageName6);

                    $('#packagePrice1').val(data.packagePrice1);
                    $('#packagePrice2').val(data.packagePrice2);
                    $('#packagePrice3').val(data.packagePrice3);
                    $('#packagePrice4').val(data.packagePrice4);
                    $('#packagePrice5').val(data.packagePrice5);
                    $('#packagePrice6').val(data.packagePrice6);

                    $('#pdesc1').val(data.packageDes1);
                    $('#pdesc2').val(data.packageDes2);
                    $('#pdesc3').val(data.packageDes3);
                    $('#pdesc4').val(data.packageDes4);
                    $('#pdesc5').val(data.packageDes5);
                    $('#pdesc6').val(data.packageDes6);

                    $('#s1').attr('src', data.packageImage1);
                    $('#s2').attr('src', data.packageImage2);
                    $('#s3').attr('src', data.packageImage3);
                    $('#s4').attr('src', data.packageImage4);
                    $('#s5').attr('src', data.packageImage5);
                    $('#s6').attr('src', data.packageImage6);
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    swal("Oops!", "Package Not Found..", "error");
                },
                beforeSend: function (xhr) {

                }
            });
        }
    }
}

function disableFedilds(param) {
    $('#packageName1').attr("disabled", param);
    $('#packageName2').attr("disabled", param);
    $('#packageName3').attr("disabled", param);
    $('#packageName4').attr("disabled", param);
    $('#packageName5').attr("disabled", param);
    $('#packageName6').attr("disabled", param);

    $('#packagePrice1').attr("disabled", param);
    $('#packagePrice2').attr("disabled", param);
    $('#packagePrice3').attr("disabled", param);
    $('#packagePrice4').attr("disabled", param);
    $('#packagePrice5').attr("disabled", param);
    $('#packagePrice6').attr("disabled", param);

    $('#pdesc1').attr("disabled", param);
    $('#pdesc2').attr("disabled", param);
    $('#pdesc3').attr("disabled", param);
    $('#pdesc4').attr("disabled", param);
    $('#pdesc5').attr("disabled", param);
    $('#pdesc6').attr("disabled", param);

    $('#s1').attr("disabled", param);
    $('#s2').attr("disabled", param);
    $('#s3').attr("disabled", param);
    $('#s4').attr("disabled", param);
    $('#s5').attr("disabled", param);
    $('#s6').attr("disabled", param);
    if (param) {
        $('#packageName1').val("");
        $('#packageName2').val("");
        $('#packageName3').val("");
        $('#packageName4').val("");
        $('#packageName5').val("");
        $('#packageName6').val("");

        $('#packagePrice1').val("");
        $('#packagePrice2').val("");
        $('#packagePrice3').val("");
        $('#packagePrice4').val("");
        $('#packagePrice5').val("");
        $('#packagePrice6').val("");

        $('#pdesc1').val("");
        $('#pdesc2').val("");
        $('#pdesc3').val("");
        $('#pdesc4').val("");
        $('#pdesc5').val("");
        $('#pdesc6').val("");

        $('#s1').attr("src", "");
        $('#s2').attr("src", "");
        $('#s3').attr("src", "");
        $('#s4').attr("src", "");
        $('#s5').attr("src", "");
        $('#s6').attr("src", "");
    }
}