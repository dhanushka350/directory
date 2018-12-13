$('#login').click(function (n) {
    login.UserLogin();
});
var login = {
    UserLogin: function () {
        var e = {};
        e["email"] = $('#email').val();
        e["password"] = $('#password').val();

        var d = JSON.stringify(e);
        console.log("HO: " + d);
        $.ajax({
            url: '/login_profile',
            dataType: 'text',
            contentType: "application/json",
            type: 'POST',
            data: d,
            success: function (data, textStatus, jqXHR) {

                if (data === "WRONG EMAIL") {
                    swal("Hmm!", "we don't know any user for this email. \n make sure your credentials and lets try again", "error");
                } else if (data === "WRONG PASSWORD") {
                    swal("WARNING!", "wrong password. \n if you want to reset please click frogot password.", "error");
                } else {
                    var name = $("#email").val();
                    localStorage.removeItem('VENDOR');
                    localStorage.setItem('VENDOR', name);
                    window.location.replace(data);
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                swal("Oops!", "something went wrong.\n please try again later.", "error");
            },
            beforeSend: function (xhr) {

            }
        });
    },
}