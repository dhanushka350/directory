$(function () {
    var name = localStorage.getItem('VENDOR');
    VENDOR.getDetails(name);
});
$('#update').click(function (n) {
    VENDOR.updateProfile();
    n.preventDefault();
});
var image = "";
var VENDOR = {
    getDetails: function (name) {
        $.ajax({
            url: "/admin/view_profile",
            dataType: 'json',
            contentType: "application/json",
            type: 'POST',
            data: name,
            success: function (data, textStatus, jqXHR) {
                localStorage.setItem('VENDOR_ID', data.id);
                $("#user_name").val(data.name);
                // $("#password").val(data.password);
                $("#email").val(data.email);
                $("#last_name").val(data.lastName);
                $("#phone").val(data.phone);
                $("#dob").val(data.dob);
                $("#address").val(data.address);
                image = data.image
            },
            error: function (jqXHR, textStatus, errorThrown) {
                swal("Oops!", "we didn't find your details.", "error");
            },
            beforeSend: function (xhr) {

            }
        });
    },
    updateProfile: function () {

        var e = {};
        e["id"] = localStorage.getItem('VENDOR_ID');
        e["name"] = $('#user_name').val();
        e["password"] = $('#password').val();
        e["lastName"] = $('#last_name').val();
        e["email"] = $('#email').val();
        e["phone"] = $('#phone').val();
        e["dob"] = $('#dob').val();
        e["address"] = $('#address').val();
        e["image"] = image;
        var d = JSON.stringify(e);

        $.ajax({
            url: '/admin/update_profile',
            dataType: 'text',
            contentType: "application/json",
            type: 'POST',
            data: d,
            success: function (data, textStatus, jqXHR) {
                $('#user_name').val("");
                $('#password').val("");
                $('#last_name').val("");
                $('#email').val("");
                $('#phone').val("");
                $('#dob').val("");
                $('#address').val("");
                swal("Good to go!", "Your profile updated!", "success");
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