// $(function () {
//     var name = localStorage.getItem('VENDOR');
//     VENDOR.getDetails(name);
// });

$('#save').click(function (e) {
    e.preventDefault();
    AD.saveAd();

});

$('#cmb_ads').on('change', function () {
    AD.getSelectedAD(this.value);
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
        e["id"] = $('#cmb_ads').find(":selected").val();
        e["vendor"] = localStorage.getItem('VENDOR');
        e["title"] = $('#ad_title').val();
        e["type"] = $('#type').val();
        e["city"] = $('#city').val();
        e["category"] = $('#category').val();
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
        e["referral"] = $('#referral').val();

        e["coverImage1"] = localStorage.getItem('SL1');
        e["coverImage2"] = localStorage.getItem('SL2');
        e["coverImage3"] = localStorage.getItem('SL3');
        e["coverImage4"] = localStorage.getItem('SL4');

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
                }, 1000);
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
    },
    getAllAds: function () {
        var name = localStorage.getItem('VENDOR');
        $('#cmb_ads')
            .find('option')
            .remove()
            .end()
            .append('<option value="0">Select Advertisement</option>')
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
                        alert(data.title);

                        // $('#cmb_ads').append($('"', {
                        //     value: data[i].id,
                        //     text: data[i].title
                        // }));
                    }
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {

            },
            beforeSend: function (xhr) {

            }
        });

    },
    getSelectedAD: function (id) {
        $.ajax({
            url: "/admin/get/edit/advertisement",
            dataType: 'json',
            contentType: "application/json",
            type: 'POST',
            data: id,
            success: function (data, textStatus, jqXHR) {

                $('#ad_title').val(data.title);
                $('#type').val(data.type.split(" ")[0]);
                $('#city').val(data.city);
                $('#category').val(data.category);
                $('#opening_days').val(data.openingDates);
                $('#opening_time').val(data.openingTime);
                $('#closing_time').val(data.closingTime);
                $('#desc').val(data.description);
                $('#facebook').val(data.facebook);
                $('#twitter').val(data.twitter);
                $('#experience').val(data.experience);
                $('input[name="optionsRadios"][value="' + data.professionals + '"]').prop('checked', true);
                $('#google').val(data.map);
                $('#view').val(data.view);

            },
            error: function (jqXHR, textStatus, errorThrown) {
                swal("No advertisement found.");
            },
            beforeSend: function (xhr) {

            }
        });
    }
}

var availableTags = [
    "Nugegoda",
    "Colombo 6",
    "Kottawa",
    "Dehiwala",
    "Piliyandala",
    "Galle",
    "Ambalangoda",
    "Elpitiya",
    "Hikkaduwa",
    "Baddegama",
    "Kandy",
    "Katugastota",
    "Gampola",
    "Peradeniya",
    "Kundasale",
    "Akkarepattu",
    "Ampara",
    "Kalmunai",
    "Sainthamaruthu",
    "Anuradhapura",
    "Kekirawa",
    "Tambuttegama",
    "Medawachchiya",
    "Eppawala",
    "Badulla",
    "Bandarawela",
    "Welimada",
    "Mahiyanganaya",
    "Ella",
    "Batticaloa",
    "Gampaha",
    "Negombo",
    "Kadawatha",
    "Kiribathgoda",
    "Kelaniya",
    "Tangalla",
    "Beliatta",
    "Ambalantota",
    "Tissamaharama",
    "Hambantota",
    "Jaffna",
    "Chavakachcheri",
    "Nallur",
    "Panadura",
    "Horana",
    "Kalutara",
    "Bandaragama",
    "Matugama",
    "Kegalle",
    "Mawanella",
    "Warakapola",
    "Ruwanwella",
    "Rambukkana",
    "Kilinochchi",
    "Kurunegala",
    "Kuliyapitiya",
    "Pannala",
    "Narammala",
    "Wariyapola",
    "Mannar",
    "Matale",
    "Dambulla",
    "Galewela",
    "Ukuwela",
    "Sigiriya",
    "Matara",
    "Akuressa",
    "Weligama",
    "Hakmana",
    "Dikwella",
    "Moneragala",
    "Wellawaya",
    "Buttala",
    "Kataragama",
    "Bibile",
    "Mullativu",
    "Nuwara Eliya",
    "Hatton",
    "Ginigathena",
    "Madulla",
    "Polonnaruwa",
    "Hingurakgoda",
    "Kaduruwela",
    "Medirigiriya",
    "Chilaw",
    "Wennappuwa",
    "Puttalam",
    "Marawila",
    "Nattandiya",
    "Ratnapura",
    "Embilipitiya",
    "Balangoda",
    "Pelmadulla",
    "Eheliyagoda",
    "Trincomalee",
    "Kinniya",
    "Vavuniya"
];
$("#city").autocomplete({
    lookup: availableTags
});
var cato = [
    "DJ",
    "Accessories & Fancy Items",
    "Ashtaka & Jayamangala Gatha",
    "Astrologers",
    "Balloons",
    "Bands",
    "Beauticians & Hair Dressers",
    "Jewellery - Other",
    "Bridal Wear",
    "Cake Structures",
    "Car Hire & Limousines",
    "Caterers",
    "Chocolates",
    "Cosmetic Products",
    "Dancing Groups",
    "Designing & Sewing",
    "Event Management Companies",
    "Flowers",
    "Grooms' Wear",
    "Hiring Tents & Chairs",
    "Honeymoon & Tour Packages",
    "Hotels",
    "Marriage Registrars",
    "Photo Locations",
    "Photographers",
    "Poruwa Suppliers",
    "Salons",
    "Settee Backs & Oil Lamps",
    "Shoes",
    "Travel Agents",
    "Wedding Cake Boxes",
    "Wedding Cakes",
    "Wedding Invitations",
    "Wedding Planners",
];
$("#category").autocomplete({
    lookup: cato
});
