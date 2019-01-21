var REGISTRATION = {
    saveVendor: function () {
        var e = {};
        e["email"] = $('#email').val();
        e["name"] = $('#f_name').val();
        e["password"] = $('#password').val();
        var d = JSON.stringify(e);
        $.ajax({
            url: '/staff/save/vendor',
            dataType: 'text',
            contentType: "application/json",
            type: 'POST',
            data: d,
            success: function (data, textStatus, jqXHR) {
                if (data === "ERROR") {
                    document.getElementById("registrationForum").style.display = "none";
                    swal("This email address is already registered.");

                } else {
                    location.replace(data);
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                document.getElementById("registrationForum").style.display = "none";
                swal("Something Went Wrong. \n Please Try Again Later.");
            },
            beforeSend: function (xhr) {

            }
        });
    },
    login: function () {
        var e = {};
        e["email"] = $('#email').val();
        e["password"] = $('#password').val();

        var d = JSON.stringify(e);
        console.log("HO: " + d);
        $.ajax({
            url: '/staff/login',
            dataType: 'text',
            contentType: "application/json",
            type: 'POST',
            data: d,
            success: function (data, textStatus, jqXHR) {
                if (data === "WRONG EMAIL") {
                    document.getElementById("loginForum").style.display = "none";
                    swal("Hmm!", "we don't know any user for this email. \n make sure your credentials and lets try again", "error");
                } else if (data === "WRONG PASSWORD") {
                    document.getElementById("loginForum").style.display = "none";
                    swal("WARNING!", "wrong password. \n if you want to reset please click forgot password.", "error");
                } else {
                    var name = $("#email").val();
                    localStorage.removeItem('VENDOR');
                    localStorage.setItem('VENDOR', name);
                    window.location.replace(data);
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                document.getElementById("loginForum").style.display = "none";
                swal("Oops!", "something went wrong.\n please try again later.", "error");
            },
            beforeSend: function (xhr) {

            }
        });
    }
}