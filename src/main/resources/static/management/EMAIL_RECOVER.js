$('#submit').click(function (n) {
    document.getElementById("message").innerText = "checking profile information...";
    EMAIL_RECOVER.sentRequest();
    n.preventDefault();
});

var EMAIL_RECOVER = {
    sentRequest: function () {
        var email = document.getElementById("email").value;
        $.ajax({
            traditional: true,
            url: "/admin/recover/email",
            dataType: 'text',
            contentType: "application/json",
            type: 'POST',
            data: email,
            success: function (data, textStatus, jqXHR) {
                document.getElementById("message").innerText = data;
            },
            error: function (jqXHR, textStatus, errorThrown) {
                document.getElementById("message").innerText = jqXHR;
            },
        });

    },
}