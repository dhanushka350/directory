

$(function () {
    var name = localStorage.getItem('VENDOR');
    VENDOR.getDetails(name);
});

$('#update').click(function (n) {
    VENDOR.updateProfile();
    n.preventDefault();
});
$('#update_image').click(function (n) {
    window.location.replace("/home/fileStorage");
});


var VENDOR = {
    getDetails: function (name) {
        $.ajax({
            url: "/admin/view_profile",
            dataType: 'json',
            contentType: "application/json",
            type: 'POST',
            data: name,
            success: function (data, textStatus, jqXHR) {

                $("#user_name").val(data.name);
                $("#email").val(data.email);
                $("#last_name").val(data.lastName);
                $("#phone").val(data.phone);
                $("#nic").val(data.nic);
                $("#address").val(data.address);

            },
            error: function (jqXHR, textStatus, errorThrown) {

            },
            beforeSend: function (xhr) {

            }
        });
    },
    updateProfile: function () {

        var e = {};
        e["id"] = localStorage.getItem('VENDOR_ID');
        e["name"] = $('#user_name').val();
        e["lastName"] = $('#last_name').val();
        e["email"] = $('#email').val();
        e["phone"] = $('#phone').val();
        e["nic"] = $('#nic').val();
        e["address"] = $('#address').val();
        var d = JSON.stringify(e);

        $.ajax({
            url: '/admin/update_profile',
            dataType: 'text',
            contentType: "application/json",
            type: 'POST',
            data: d,
            success: function (data, textStatus, jqXHR) {
                swal("Good to go!", "Your profile updated!", "success");
                var name = localStorage.getItem('VENDOR');
                VENDOR.getDetails(name);
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log("error" + jqXHR + " - " + errorThrown);
                console.log(textStatus);
                console.log("R: " + jqXHR.status);
                console.log("R: " + jqXHR.responseText);
                swal("Oops!", "vendor profiles is under maintaining.. \n please try again later.", "error");

            },
            beforeSend: function (xhr) {

            }
        });
    }
}