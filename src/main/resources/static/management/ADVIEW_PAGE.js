var selctedAd;


function loadData() {
    selctedAd = localStorage.getItem("selectedAd");
    getDataFromBackend(selctedAd);
    getAllAdsByVendor();
}


$('#btn_review').click(function (e) {
    saveRatings();
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
            // $("#img-main").css("background-image", "url('" + data.coverImage1 + "')");
            // $("#image-comp").css("background-image", "url('" + data.coverImage1 + "')");

            // document.getElementById("com-txt").innerHTML = data.title;
            // document.getElementById("txt-address").innerHTML = "<b>Address:</b>" + data.venodr.address;

            document.getElementById("txt-compname").innerHTML = "<span>About </span>" + data.title;
            document.getElementById("txt-desc").innerHTML = data.description;


            // document.getElementById("slider-img-1").innerHTML = "<img src='" + data.coverImage1 + "'>";
            // document.getElementById("slider-img-2").innerHTML = "<img src='" + data.coverImage2 + "'>";
            // document.getElementById("slider-img-3").innerHTML = "<img src='" + data.coverImage3 + "'>";
            // document.getElementById("slider-img-4").innerHTML = "<img src='" + data.coverImage4 + "'>";
            $('#slider-img-1').attr('src', data.coverImage1);
            $('#slider-img-2').attr('src', data.coverImage2);
            $('#slider-img-3').attr('src', data.coverImage3);
            $('#slider-img-4').attr('src', data.coverImage4);
            $('#slider-img-5').attr('src', data.coverImage1);
            $('#slider-img-6').attr('src', data.coverImage3);
            document.getElementById("img1").innerHTML = "<img src='" + data.coverImage1 + "'>";
            document.getElementById("img2").innerHTML = "<img src='" + data.coverImage2 + "'>";
            document.getElementById("img3").innerHTML = "<img src='" + data.coverImage3 + "'>";
            document.getElementById("img4").innerHTML = "<img src='" + data.coverImage4 + "'>";

            document.getElementById("open_time").innerHTML = data.openingTime;
            document.getElementById("close_time").innerHTML = data.closingTime;
            document.getElementById("open_days").innerHTML = data.openingDates;
            document.getElementById("txt_mob").innerHTML = data.venodr.phone;
            document.getElementById("txt_email").innerHTML = data.venodr.email;
            document.getElementById("fb").innerHTML = "<a href='" + data.facebook + "' target='_blank'><i class=\"fa fa-facebook\"></i> Facebook</a>";
            document.getElementById("tw").innerHTML = "<a href='" + data.twitter + "' target='_blank'><i class=\"fa fa-edge\"></i> Web Site</a>";

            document.getElementById("lcation").innerHTML = "<iframe id=\"lcation\"\n" +
                "                                        src='" + data.map + "' " +
                "                                        allowfullscreen></iframe>";

            // document.getElementById("profile_image").innerHTML = "<img style='width: 150px;height: 150px;border-radius: 50%' src=" + data.venodr.image + " alt='' > ";
            // document.getElementById("name-txt").innerHTML = data.venodr.name + " " + data.venodr.lastName;
            document.getElementById("inq-text").innerHTML = "Send Enquiry to <span style='color: orangered'> " + data.title + "</span> \n" +
                "                                        Fill in your details and <span style='color: orangered'> " + data.title + "</span>  will get back to you\n" +
                "                                        shortly.";
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
        return avg / data;
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

                    $('#other_ads').append($("<div onclick='itemView(" + data[i].id + ")' style='cursor: pointer' >\n" +
                        '<li class="col-md-4" style="cursor: pointer">\n' +
                        '<div class=\"pg-list-ser-p1\"><img src="' + data[i].coverImage1 + '" alt=\"\"> </div>\n' +
                        '<div class=\"pg-list-ser-p2\">\n' +
                        '<h4>' + data[i].title + '</h4></div>\n' +
                        '</li>\n' +
                        '</div>'));
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

                $('#review_div\n').append($("<li>\n" +
                    "                                        <div class=\"lr-user-wr-img\"><img src=\"/profile/images/users/2.png\" alt=\"\"></div>\n" +
                    "                                        <div class=\"lr-user-wr-con\">\n" +
                    "                                            <h6>" + data[i].fullName + " <span>" + data[i].ratings + " <i class=\"fa fa-star\"\n" +
                    "                                                                           aria-hidden=\"true\"></i></span></h6> <span\n" +
                    "                                                class=\"lr-revi-date\">" + data[i].review + " </p>\n" +
                    "                                        </div>\n" +
                    "                                    </li>"
                ));
            }
            if (data.length === 0) {
                document.getElementById("raings_count").innerHTML = "<span>" + "0" + " <i class=\"fa fa-star\" aria-hidden=\"true\"></i></span> based on " + "No" + " reviews</p>";
            } else {
                document.getElementById("raings_count").innerHTML = "<span>" + getRatings(avg, data.length) + " <i class=\"fa fa-star\" aria-hidden=\"true\"></i></span> based on " + data.length + " reviews</p>";
            }

            if ((avg / data.length) < 5) {
                $('#review_status').append($("<div class='lp-ur-all-left-1'>\n" +
                    "                                        <div class='lp-ur-all-left-11' style='font-weight: bold;'>Below Average</div>\n" +
                    "                                        <div class='lp-ur-all-left-12'>\n" +
                    "                                            <div class='lp-ur-all-left-13 lp-ur-all-left-below'></div>\n" +
                    "                                        </div>\n" +
                    "                                    </div>"));

                $('#ad_rating').append($("<i class='fa fa-star' aria-hidden='true'></i>"));

            } else if ((avg / data.length) > 5 & (avg / data.length) < 10) {
                $('#review_status\n').append($("<div class=\"lp-ur-all-left-1\">\n" +
                    "                                        <div class=\"lp-ur-all-left-11\" style='font-weight: bold;'>Satisfactory</div>\n" +
                    "                                        <div class=\"lp-ur-all-left-12\">\n" +
                    "                                            <div class=\"lp-ur-all-left-13 lp-ur-all-left-satis\"></div>\n" +
                    "                                        </div>\n" +
                    "                                    </div>"));

                $('#ad_rating').append($("<i class='fa fa-star' aria-hidden='true'></i><i class='fa fa-star' aria-hidden='true'></i>"));

            } else if ((avg / data.length) > 10 & (avg / data.length) < 20) {
                $('#review_status\n').append($("<div class=\"lp-ur-all-left-1\">\n" +
                    "                                        <div class=\"lp-ur-all-left-11\" style='font-weight: bold;'>Good</div>\n" +
                    "                                        <div class=\"lp-ur-all-left-12\">\n" +
                    "                                            <div class=\"lp-ur-all-left-13 lp-ur-all-left-Good\"></div>\n" +
                    "                                        </div>\n" +
                    "                                    </div>"));

                $('#ad_rating').append($("<i class='fa fa-star' aria-hidden='true'></i><i class='fa fa-star' aria-hidden='true'></i><i class='fa fa-star' aria-hidden='true'></i>"));

            } else if ((avg / data.length) > 20) {
                $('#review_status\n').append($("<div class=\"lp-ur-all-left-1\">\n" +
                    "                                        <div class=\"lp-ur-all-left-11\" style='font-weight: bold;'>Excellent</div>\n" +
                    "                                        <div class=\"lp-ur-all-left-12\">\n" +
                    "                                            <div class=\"lp-ur-all-left-13\"></div>\n" +
                    "                                        </div>\n" +
                    "                                    </div>"));

                $('#ad_rating').append($("<i class='fa fa-star' aria-hidden='true'></i><i class='fa fa-star' aria-hidden='true'></i><i class='fa fa-star' aria-hidden='true'></i><i class='fa fa-star' aria-hidden='true'></i><i class='fa fa-star' aria-hidden='true'></i>"));

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
                    document.getElementById("pack_1").innerHTML = " <div class=\"col-md-3\"><img src='" + data.packageImage1 + "' alt=\"\"></div>\n" +
                        "                                <!--LISTINGS: CONTENT-->\n" +
                        "                                <div class=\"col-md-9 home-list-pop-desc inn-list-pop-desc list-room-deta\">\n" +
                        "                                    <a href=\"#!\">\n" +
                        "                                        <h3>" + data.packageName1 + "</h3>\n" +
                        "                                    </a>\n" +
                        "                                    <h4>" + data.packageDes1 + "</h4>\n" +
                        "                                    <h4 style='color: red'><span></span>" + data.packagePrice1 + "</h4>\n" +
                        "                                </div>";
                }
                if (data.packageName2 !== "") {
                    document.getElementById("pack_2").innerHTML = " <div class=\"col-md-3\"><img src='" + data.packageImage2 + "' alt=\"\"></div>\n" +
                        "                                <!--LISTINGS: CONTENT-->\n" +
                        "                                <div class=\"col-md-9 home-list-pop-desc inn-list-pop-desc list-room-deta\">\n" +
                        "                                    <a href=\"#!\">\n" +
                        "                                        <h3>" + data.packageName2 + "</h3>\n" +
                        "                                    </a>\n" +
                        "                                    <h4>" + data.packageDes2 + "</h4>\n" +
                        "                                    <h4 style='color: red'>" + data.packagePrice2 + "</h4>\n" +
                        "                                </div>";
                }
                if (data.packageName3 !== "") {
                    document.getElementById("pack_3").innerHTML = " <div class=\"col-md-3\"><img src='" + data.packageImage3 + "' alt=\"\"></div>\n" +
                        "                                <!--LISTINGS: CONTENT-->\n" +
                        "                                <div class=\"col-md-9 home-list-pop-desc inn-list-pop-desc list-room-deta\">\n" +
                        "                                    <a href=\"#!\">\n" +
                        "                                        <h3>" + data.packageName3 + "</h3>\n" +
                        "                                    </a>\n" +
                        "                                    <h4>" + data.packageDes3 + "</h4>\n" +
                        "                                    <h4 style='color: red'>" + data.packagePrice3 + "</h4>\n" +
                        "                                </div>";
                }
                if (data.packageName4 !== "") {
                    document.getElementById("pack_4").innerHTML = " <div class=\"col-md-3\"><img src='" + data.packageImage4 + "' alt=\"\"></div>\n" +
                        "                                <!--LISTINGS: CONTENT-->\n" +
                        "                                <div class=\"col-md-9 home-list-pop-desc inn-list-pop-desc list-room-deta\">\n" +
                        "                                    <a href=\"#!\">\n" +
                        "                                        <h3>" + data.packageName4 + "</h3>\n" +
                        "                                    </a>\n" +
                        "                                    <h4>" + data.packageDes4 + "</h4>\n" +
                        "                                    <h4 style='color: red'>" + data.packagePrice4 + "</h4>\n" +
                        "                                </div>";
                }
                if (data.packageName5 !== "") {
                    document.getElementById("pack_5").innerHTML = " <div class=\"col-md-3\"><img src='" + data.packageImage5 + "' alt=\"\"></div>\n" +
                        "                                <!--LISTINGS: CONTENT-->\n" +
                        "                                <div class=\"col-md-9 home-list-pop-desc inn-list-pop-desc list-room-deta\">\n" +
                        "                                    <a href=\"#!\">\n" +
                        "                                        <h3>" + data.packageName5 + "</h3>\n" +
                        "                                    </a>\n" +
                        "                                    <h4>" + data.packageDes5 + "</h4>\n" +
                        "                                    <h4 style='color: red'>" + data.packagePrice5 + "</h4>\n" +
                        "                                </div>";
                }
                if (data.packageName6 !== "") {
                    document.getElementById("pack_6").innerHTML = " <div class=\"col-md-3\"><img src='" + data.packageImage6 + "' alt=\"\"></div>\n" +
                        "                                <!--LISTINGS: CONTENT-->\n" +
                        "                                <div class=\"col-md-9 home-list-pop-desc inn-list-pop-desc list-room-deta\">\n" +
                        "                                    <a href=\"#!\">\n" +
                        "                                        <h3>" + data.packageName6 + "</h3>\n" +
                        "                                    </a>\n" +
                        "                                    <h4>" + data.packageDes6 + "</h4>\n" +
                        "                                    <h4 style='color: red'>" + data.packagePrice6 + "</h4>\n" +
                        "                                </div>";
                }
            }
        }
    });
}

function itemView(param) {

    localStorage.setItem("selectedAd", param);
    window.open("/home/profileview", "_self");
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