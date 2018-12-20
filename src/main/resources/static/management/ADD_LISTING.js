// $(function () {
//     var name = localStorage.getItem('VENDOR');
//     VENDOR.getDetails(name);
// });

$('#save').click(function (e) {
    e.preventDefault();
    AD.saveAd();

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
                var notComplate = false;
                if (notComplate) {
                    swal("Profile info", "hey " + data.name + "first of all we need complete your");
                }
                document.getElementById("first_name").value = data.name;
                document.getElementById("last_name").value = data.lastName;
                document.getElementById("list_phone").value = data.phone;
                document.getElementById("email").value = data.email;
                document.getElementById("list_addr").value = data.address;
                swal("hi " + data.name + ". ", "Your advertisement limit is - 01.");
            },
            error: function (jqXHR, textStatus, errorThrown) {

            },
            beforeSend: function (xhr) {

            }
        });
    }
};

var AD = {
    saveAd: function () {
        var e = {};
        e["vendor"] = localStorage.getItem('VENDOR');
        e["title"] = $('#ad_title').val();
        e["type"] = $('#type').find(":selected").text();
        e["city"] = $('#city').find(":selected").text();
        e["category"] = $('#category').find(":selected").text();
        e["openingDates"] = $('#opening_days').val();
        e["openingTime"] = $('#opening_time').val();
        e["closingTime"] = $('#closing_time').val();
        e["description"] = $('#desc').val();
        e["facebook"] = $('#facebook').val();
        e["twitter"] = $('#twitter').val();
        e["experience"] = $('#experience').find(":selected").text();
        e["professionals"] = $('input[name=optionsRadios]:checked').val();
        e["map"] = $('#google').val();
        e["view"] = $('#view').val();

        var d = JSON.stringify(e);

        $.ajax({
            url: '/admin/save_advertisement/step-1',
            dataType: 'text',
            contentType: "application/json",
            type: 'POST',
            data: d,
            success: function (data, textStatus, jqXHR) {
                swal("Step one completed!", "Let's add some packages.", "success");
                setTimeout(function () {
                    window.location.replace("/admin/db/packages");
                }, 500);
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

    },
    getAdDetails: function () {
        var user = localStorage.getItem('VENDOR');

        $.ajax({
            traditional: true,
            url: "/admin/get/advertisement/details",
            dataType: 'json',
            contentType: "application/text",
            type: 'POST',
            data: user,
            success: function (data, textStatus, jqXHR) {
                swal(data.title + " Loaded.");
                $("#s1").attr("src", data.coverImage1);
                $("#s2").attr("src", data.coverImage2);
                $("#s3").attr("src", data.coverImage3);
                $("#s4").attr("src", data.coverImage4);
                $("#cover").attr("src", data.coverImage1);

                $("#p1").attr("src", data.packageImage1);
                $("#p2").attr("src", data.packageImage2);
                $("#p3").attr("src", data.packageImage3);
                $("#p4").attr("src", data.packageImage4);
                $("#p5").attr("src", data.packageImage5);

            },
            error: function (jqXHR, textStatus, errorThrown) {

            },
            beforeSend: function (xhr) {

            }
        });
    }
}