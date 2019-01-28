var selctedAd;


function loadData() {
    selctedAd = localStorage.getItem("selectedAd");
    // getDataFromBackend(selctedAd);
    // getAllAdsByVendor();
    getPackgeDetails(selctedAd);
    getDataFromBackend(selctedAd);
    setRatings(selctedAd);
    getAllAdsByVendor();
}


$('#btn_review').click(function (e) {
    selctedAd = localStorage.getItem("selectedAd");
    saveRatings();
    setRatings(selctedAd);
    e.preventDefault();
});


$('#msubmit').click(function (e) {
    sentInquiry();
    e.preventDefault();
});

let userid = null;
let ratings = 0;

function getDataFromBackend(selctedAd) {
    $.ajax({
        url: "/advertisement/getOne/" + selctedAd,
        dataType: 'json',
        contentType: "application/json",
        type: 'GET',
        success: function (data, textStatus, jqXHR) {

            $('#slider-img-1').attr('src', data.coverImage1);
            $('#slider-img-2').attr('src', data.coverImage2);
            $('#slider-img-3').attr('src', data.coverImage3);

            document.getElementById("title").innerHTML = data.title;
            document.getElementById("nav_title").innerHTML = data.title;
            document.getElementById("ad_title").innerHTML = data.title;
            document.getElementById("address").innerHTML = data.city;
            document.getElementById("desc").innerHTML = data.description;
            document.getElementById("main_desc").innerHTML = data.description;
            document.getElementById("main_number").innerHTML = data.venodr.phone;
            document.getElementById("main_email").innerHTML = data.venodr.email;
            document.getElementById("main_address").innerHTML = data.venodr.address;
            document.getElementById("main_fb").setAttribute('href', data.facebook);
            document.getElementById("main_site").setAttribute('href', data.twitter);
            document.getElementById("lcation").innerHTML = "<iframe style='height: 100%' src='" + data.map + "' " +
                "                                        allowfullscreen></iframe>";
            document.getElementById("opening").innerHTML = "<h4>Useful Information</h4><h5>Opening Days</h5><p>" + data.openingDates + "</p>" +
                "<h5>Opening Time</h5><p>" + data.openingTime + "</p>" +
                "<h5>Closing Time</h5><p>" + data.closingTime + "</p>";


            document.getElementById("txt-compname").innerHTML = "<span>About </span>" + data.title;
            document.getElementById("txt-desc").innerHTML = data.description;

            userid = data.id;
            setRatings(userid);
            getTopRating(data.city, data.category);
            getPackgeDetails(data.id);
        }
    });
}

$('#rate input:radio').on('change', function () {
    var value = $(this).val();
    ratings = value;

});

function saveRatings() {
    var e = {};
    e["fullName"] = document.getElementById("full_name").value;
    e["mobile"] = document.getElementById("mobile_txt").value;
    e["email"] = document.getElementById("email_txt").value;
    e["city"] = document.getElementById("city_txt").value;
    e["ratings"] = ratings;
    e["review"] = document.getElementById("review_txt").value;
    e["adID"] = userid;
    e["advertisement"] = selctedAd;
    var d = JSON.stringify(e);
    $.ajax({
        url: "/ratings/save",
        dataType: 'text',
        contentType: "application/json",
        type: 'POST',
        data: d,
        success: function (data, textStatus, jqXHR) {

            if ("SUCCESS" === data) {
                swal(data + "!", "Thank you for your review.");
            } else if ("FAILED" === data) {
                swal(data + "!", "Please try again later.");
            } else {
                swal("Oops!", data);
            }
            location.reload(true);
        },
        error: function (jqXHR, textStatus, errorThrown) {

        },
        beforeSend: function (xhr) {
        }
    });
}

function getRatings(avg, data) {
    console.log(data + "length");
    if (data === "0") {
        return 0;
    } else {
        var rate = avg / data
        return parseFloat(Math.round(rate * 100) / 100).toFixed(2);
    }
}

function getAllAdsByVendor() {
    selctedAd = localStorage.getItem("selectedAd");
    $.ajax({
        url: "/admin/get/all/extra/advertisement",
        dataType: 'json',
        contentType: "application/json",
        type: 'POST',
        data: selctedAd,
        success: function (data, textStatus, jqXHR) {
            if (data.length <= 0) {
                swal("No extra advertisement found.");
            } else {
                for (var i = 0; i < data.length; i++) {

                    // $('#other_ads').append($("<li onclick='itemView(" + data[i].id + ")'>\n" +
                    //     "<a href=\"#\">\n" +
                    //     "<h3 style='color: teal'>" + data[i].title + "</h3>\n" +
                    //     "<span>" + data[i].city + "<span><br>\n" +
                    //     "<span>" + data[i].category + "</span>\n" +
                    //     "</a>\n" +
                    //     "</li>"));

                    $('#oAds').append($("<li><figure  onclick='itemView( " + data[i].id + ")' class=\"left\" style='cursor: pointer'>\n" +
                        "<img src='" + data[i].coverImage1 + "' class='img-rip' style='margin-right: 1px;'/>\n" +
                        "<span class=\"image-overlay\"></span>\n" +
                        "</figure>\n" +
                        "<div class=\"meta\">\n" +
                        "<h3>" + data[i].title + "</h3>\n" +
                        "<p style='font-weight: bold; height: 100%'>" + data[i].description + "</p>\n" +
                        "</div>\n" +
                        "</li>"));


                }
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {

        },
        beforeSend: function (xhr) {

        }
    });


}

function setRatings(param) {
    var avg = 0;

    $.ajax({
        url: "/ratings/getAll/" + param,
        dataType: 'json',
        contentType: "application/json",
        type: 'GET',
        success: function (data, textStatus, jqXHR) {
            for (var i = 0; i < data.length; i++) {
                avg += data[i].ratings;

                $('#review').append($("<li>" +
                    "                  <figure class=\"left\">\n" +
                    "                  <img src=\"/client/images/uploads/avatar.jpg\" alt=\"avatar\"/>\n" +
                    "                  <address><span>" + data[i].fullName + "</span><br/>" + data[i].email + "<br/>" + data[i].mobile + "</address>\n" +
                    "                  </figure>\n" +
                    "                  <div class=\"rev pro\"><p>" + data[i].review + "</p></div>\n" +
                    "                  </li>"));
            }

            if (data.length === 0) {
                document.getElementById("review_count").innerText = "Based on no reviews";
                document.getElementById("avg").innerText = "0";
            } else {
                document.getElementById("review_count").innerText = "Based on " + data.length + " reviews";
                document.getElementById("avg").innerText = getRatings(avg, data.length);
            }

        },

    });
}

function getTopRating(city, catogry) {
    $.ajax({
        url: "/advertisement/getTopByCity/" + city + "/" + catogry,
        dataType: 'json',
        contentType: "application/json",
        type: 'GET',
        success: function (data, textStatus, jqXHR) {
            $('#top_three\n').empty();
            if (data.length === 0) {
                $('#top_three').append($("<h1>No Result Found</h1>"));
            } else {
                for (var i = 0; i < 3; i++) {

                    $('#top_three').append($("<div onclick='itemView(" + data[i].id + ")' style='cursor: pointer' >\n" +
                        "                            <div class=\"list-mig-like-com\">\n" +
                        "                                <div class=\"list-mig-lc-img\"><img src=\'" + data[i].coverImage1 + "' alt=\"\"/> <span\n" +
                        "                                        class=\"home-list-pop-rat list-mi-pr\"></span></div>\n" +
                        "                                <div class=\"list-mig-lc-con\">\n" +
                        "                                    <div class=\"list-rat-ch list-room-rati\"><span>4.0</span> <i class=\"fa fa-star\"\n" +
                        "                                                                                                aria-hidden=\"true\"></i>\n" +
                        "                                        <i class=\"fa fa-star\" aria-hidden=\"true\"></i> <i class=\"fa fa-star\"\n" +
                        "                                                                                         aria-hidden=\"true\"></i> <i\n" +
                        "                                                class=\"fa fa-star\" aria-hidden=\"true\"></i> <i class=\"fa fa-star-o\"\n" +
                        "                                                                                              aria-hidden=\"true\"></i>\n" +
                        "                                    </div>\n" +
                        "                                    <h5>" + data[i].title + "</h5>\n" +
                        "                                    <p>" + data[i].city + "</p>\n" +
                        "                                </div>\n" +
                        "                            </div>\n" +
                        "                        </div>"
                    ));
                }
            }
        }

    });

}

function getPackgeDetails(id) {

    $.ajax({
        url: "/advertisement/view_packages/" + id,
        dataType: 'json',
        contentType: "application/json",
        type: 'POST',
        success: function (data, textStatus, jqXHR) {
            console.log(data);
            if (data.length === 0 || data === null) {
                document.getElementById("pack_img").innerHTML = "no packages found";
            } else {

                if (data.packageName1 !== "" || data.packageName1 !== null) {


                    document.getElementById("pack_1").innerHTML =
                        "<figure class=\"left\" id=\"gallery1\">\n" +
                        "<img src='" + data.packageImage1 + "' alt=\"\"/>\n" +
                        "<span class=\"image-overlay\"></span>\n" +
                        "</figure>\n" +
                        "<div class=\"meta\">\n" +
                        "<h3>" + data.packageName1 + "</h3>\n" +
                        "<p>" + data.packageDes1 + "</p>\n" +
                        "</div>\n" +
                        "<div class=\"room-information\">\n" +
                        "<a class=\"gradient-button\" style=\"margin-bottom: 50%\" title=\"PRICE\">" + data.packagePrice1 + "</a>\n" +
                        "</div>";

                    document.getElementById("pack_2").innerHTML =
                        "<figure class=\"left\" id=\"gallery2\">\n" +
                        "<img src='" + data.packageImage2 + "' alt=\"\"/>\n" +
                        "<span class=\"image-overlay\"></span>\n" +
                        "</figure>\n" +
                        "<div class=\"meta\">\n" +
                        "<h3>" + data.packageName2 + "</h3>\n" +
                        "<p>" + data.packageDes2 + "</p>\n" +
                        "</div>\n" +
                        "<div class=\"room-information\">\n" +
                        "<a class=\"gradient-button\" style=\"margin-bottom: 50%\" title=\"PRICE\">" + data.packagePrice2 + "</a>\n" +
                        "</div>";


                    document.getElementById("pack_3").innerHTML =
                        "<figure class=\"left\" id=\"gallery3\">\n" +
                        "<img src='" + data.packageImage3 + "' alt=\"\"/>\n" +
                        "<span class=\"image-overlay\"></span>\n" +
                        "</figure>\n" +
                        "<div class=\"meta\">\n" +
                        "<h3>" + data.packageName3 + "</h3>\n" +
                        "<p>" + data.packageDes3 + "</p>\n" +
                        "</div>\n" +
                        "<div class=\"room-information\">\n" +
                        "<a class=\"gradient-button\" style=\"margin-bottom: 50%\" title=\"PRICE\">" + data.packagePrice3 + "</a>\n" +
                        "</div>";

                    document.getElementById("pack_4").innerHTML =
                        "<figure class=\"left\" id=\"gallery4\">\n" +
                        "<img src='" + data.packageImage4 + "' alt=\"\"/>\n" +
                        "<span class=\"image-overlay\"></span>\n" +
                        "</figure>\n" +
                        "<div class=\"meta\">\n" +
                        "<h3>" + data.packageName4 + "</h3>\n" +
                        "<p>" + data.packageDes4 + "</p>\n" +
                        "</div>\n" +
                        "<div class=\"room-information\">\n" +
                        "<a class=\"gradient-button\" style=\"margin-bottom: 50%\" title=\"PRICE\">" + data.packagePrice4 + "</a>\n" +
                        "</div>";

                    document.getElementById("pack_5").innerHTML =
                        "<figure class=\"left\" id=\"gallery5\">\n" +
                        "<img src='" + data.packageImage5 + "' alt=\"\"/>\n" +
                        "<span class=\"image-overlay\"></span>\n" +
                        "</figure>\n" +
                        "<div class=\"meta\">\n" +
                        "<h3>" + data.packageName5 + "</h3>\n" +
                        "<p>" + data.packageDes5 + "</p>\n" +
                        "</div>\n" +
                        "<div class=\"room-information\">\n" +
                        "<a class=\"gradient-button\" style=\"margin-bottom: 50%\" title=\"PRICE\">" + data.packagePrice5 + "</a>\n" +
                        "</div>";

                    document.getElementById("pack_6").innerHTML =
                        "<figure class=\"left\" id=\"gallery6\">\n" +
                        "<img src='" + data.packageImage6 + "' alt=\"\"/>\n" +
                        "<span class=\"image-overlay\"></span>\n" +
                        "</figure>\n" +
                        "<div class=\"meta\">\n" +
                        "<h3>" + data.packageName6 + "</h3>\n" +
                        "<p>" + data.packageDes6 + "</p>\n" +
                        "</div>\n" +
                        "<div class=\"room-information\">\n" +
                        "<a class=\"gradient-button\" style=\"margin-bottom: 50%\" title=\"PRICE\">" + data.packagePrice6 + "</a>\n" +
                        "</div>";
                }
            }
        }
    });
}

function itemView(param) {

    localStorage.setItem("selectedAd", param);
    window.open("/main/advertisement", "_self");
}

function sentInquiry() {
    var e = {};

    e["name"] = document.getElementById("mname").value;
    e["mobile"] = document.getElementById("mnumber").value;
    e["email"] = document.getElementById("memail").value;
    e["city"] = document.getElementById("mcity").value;
    e["message"] = document.getElementById("mmessage").value;
    e["status"] = 0;
    e["messageid"] = "";
    e["ad"] = selctedAd;
    var d = JSON.stringify(e);
    $.ajax({
        url: "/control/emails/sent/Inquiry",
        dataType: 'json',
        contentType: "application/json",
        type: 'POST',
        data: d,
        success: function (data, textStatus, jqXHR) {

            if ("SUCCESS" === data) {
                swal("message delivered.");
                $("#mname").val("");
                $("#mnumber").val("");
                $("#memail").val("");
                $("#mcity").val("");
                $("#mmessage").val("");

            } else if ("FAILED" === data) {
                swal(data + "!", "Please try again later.");
            } else {
                swal("Oops!", data);
            }
            // location.reload(true);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            swal(textStatus, errorThrown);
        },
        beforeSend: function (xhr) {
        }
    });
}