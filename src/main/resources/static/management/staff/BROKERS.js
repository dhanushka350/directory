var page = 0;
var activate = true;

function setPage(page) {
    if (page.trim() === "Next") {
        this.page++;
        BROKER.List();
    } else {
        this.page--;
        BROKER.List();
    }
}

function setActive() {
    var remember = document.getElementById("br_status");
    if (remember.checked) {
        this.activate = true;
        document.getElementById("lbl_status").innerHTML = "ACTIVE";
    } else {
        this.activate = false;
        document.getElementById("lbl_status").innerHTML = "INACTIVE";
    }
}

$('#br_save').click(function (e) {
    e.preventDefault();
    BROKER.save();

});


function notWorkingAlert() {
    swal("Service not available");
}

var BROKER = {
    save: function () {
        if ($('#br_nic').val().length < !11 && $('#br_nic').val().length > !8) {
            swal("Please Check Your Nic.");
        } else {

            var active = 0;
            if (this.activate) {
                active = 1;
            } else {
                active = 0;
            }
            var e = {};
            e["id"] = "";
            e["name"] = $('#br_name').val();
            e["nic"] = $('#br_nic').val();
            e["email"] = $('#br_email').val();
            e["address"] = $('#br_address').val();
            e["phone"] = $('#br_mobile').val();
            e["br_referrals"] = "";
            e["active"] = active;
            var d = JSON.stringify(e);

            $.ajax({
                url: '/staff/registration',
                dataType: 'text',
                contentType: "application/json",
                type: 'POST',
                data: d,
                success: function (data, textStatus, jqXHR) {
                    swal(data);
                    BROKER.List();
                    $('#br_name').val("");
                    $('#br_nic').val("");
                    $('#br_email').val("");
                    $('#br_address').val("");
                    $('#br_mobile').val("");
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    swal(textStatus);

                },
                beforeSend: function (xhr) {

                }
            });
        }
    },
    List: function () {
        $('#tbl_brokers tbody tr td').remove();
        $.ajax({
            url: "/staff/get/all/brokers?page=" + page + "&size=6",
            dataType: 'json',
            contentType: "application/json",
            type: 'GET',
            success: function (data, textStatus, jqXHR) {
                if (data.length <= 0) {
                    $('#tbl_brokers').append('<tr>\n\
                               <td colspan=9><p align="center" style="color: teal">No records found in your database\n\
                               </p></td>\n\
                               </tr>');
                } else {
                    for (var i = 0; i < data.length; i++) {

                        $('#tbl_brokers').append('<tr style="cursor: pointer">\n\
                                    <td>' + data[i].id + '</td>\n\
                                    <td>' + data[i].nic + '</td>\n\
                                    <td>' + data[i].name + '</td>\n\
                                    <td>' + data[i].refferals + '</td>\n\
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