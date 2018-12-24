var selctedAd;

function loadData() {
    selctedAd = localStorage.getItem("selectedAd");
    getDataFromBackend(selctedAd);
}


$('#btn_review').click(function (e) {
    saveRatings();
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
            console.log(data.coverImage1);
            $("#img-main").css("background-image", "url('" + data.coverImage1 + "')");
            $("#image-comp").css("background-image", "url('" + data.coverImage1 + "')");

            document.getElementById("txt-name").innerHTML = data.title;
            document.getElementById("txt-address").innerHTML = "<b>Address:</b>" + data.venodr.address;
            document.getElementById("txt-cont").innerHTML = "<i class=\"fa fa-phone\" aria-hidden=\"true\"></i>" + data.venodr.phone;
            document.getElementById("txt-email").innerHTML = "<i class=\"fa fa-envelope\" aria-hidden=\"true\"></i>" + data.venodr.email;
            document.getElementById("txt-owner").innerHTML = "<i class=\"fa fa-user\" aria-hidden=\"true\"></i>" + data.venodr.name + " " + data.venodr.lastName;
            document.getElementById("txt-compname").innerHTML = "<span>About </span>" + data.title;
            document.getElementById("txt-desc").innerHTML = data.description;


            document.getElementById("slider-img-1").innerHTML = "<img src='" + data.coverImage1 + "'>";
            document.getElementById("slider-img-2").innerHTML = "<img src='" + data.coverImage2 + "'>";
            document.getElementById("slider-img-3").innerHTML = "<img src='" + data.coverImage3 + "'>";
            document.getElementById("slider-img-4").innerHTML = "<img src='" + data.coverImage4 + "'>";

            document.getElementById("txt-days").innerHTML = "Opening days : " + data.openingDates;
            document.getElementById("txt-open").innerHTML = "Opening Time : " + data.openingTime;
            document.getElementById("txt-close").innerHTML = "Closing Time : " + data.closingTime;
            document.getElementById("open_time").innerHTML = data.openingTime;
            document.getElementById("close_time").innerHTML = data.closingTime;
            document.getElementById("open_days").innerHTML = data.openingDates;
            document.getElementById("exp").innerHTML = data.experience
            document.getElementById("created-date").innerHTML = "Since " + data.createdDate
            document.getElementById("fb").innerHTML = "<a href='" + data.facebook + "'><i class=\"fa fa-facebook fb1\"></i> Facebook</a>";
            document.getElementById("tw").innerHTML = "<a href='" + data.twitter + "'><i class=\"fa fa-twitter tw1\"></i> Twitter</a>";

            document.getElementById("lcation").innerHTML = "<iframe id=\"lcation\"\n" +
                "                                        src='" + data.map + "' " +
                "                                        allowfullscreen></iframe>";

            document.getElementById("image-comp").innerHTML = "<img style='width: 80px;height: 80px;border-radius: 50%' src=" + data.venodr.image + " alt='' > ";
            document.getElementById("name-txt").innerHTML = data.venodr.name + " " + data.venodr.lastName;
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
            document.getElementById("raings_count").innerHTML = "<span>" + avg / data.length + " <i class=\"fa fa-star\" aria-hidden=\"true\"></i></span> based on " + data.length + "reviews</p>";

            if ((avg / data.length) < 5) {
                $('#review_status\n').append($("<div class=\"lp-ur-all-left-1\">\n" +
                    "                                        <div class=\"lp-ur-all-left-11\" style='font-weight: bold;'>Below Average</div>\n" +
                    "                                        <div class=\"lp-ur-all-left-12\">\n" +
                    "                                            <div class=\"lp-ur-all-left-13 lp-ur-all-left-below\"></div>\n" +
                    "                                        </div>\n" +
                    "                                    </div>"));

            } else if ((avg / data.length) > 5 & (avg / data.length) < 10) {
                $('#review_status\n').append($("<div class=\"lp-ur-all-left-1\">\n" +
                    "                                        <div class=\"lp-ur-all-left-11\" style='font-weight: bold;'>Satisfactory</div>\n" +
                    "                                        <div class=\"lp-ur-all-left-12\">\n" +
                    "                                            <div class=\"lp-ur-all-left-13 lp-ur-all-left-satis\"></div>\n" +
                    "                                        </div>\n" +
                    "                                    </div>"));

            } else if ((avg / data.length) > 10 & (avg / data.length) < 20) {
                $('#review_status\n').append($("<div class=\"lp-ur-all-left-1\">\n" +
                    "                                        <div class=\"lp-ur-all-left-11\" style='font-weight: bold;'>Good</div>\n" +
                    "                                        <div class=\"lp-ur-all-left-12\">\n" +
                    "                                            <div class=\"lp-ur-all-left-13 lp-ur-all-left-Good\"></div>\n" +
                    "                                        </div>\n" +
                    "                                    </div>"));

            } else if ((avg / data.length) > 20) {
                $('#review_status\n').append($("<div class=\"lp-ur-all-left-1\">\n" +
                    "                                        <div class=\"lp-ur-all-left-11\" style='font-weight: bold;'>Excellent</div>\n" +
                    "                                        <div class=\"lp-ur-all-left-12\">\n" +
                    "                                            <div class=\"lp-ur-all-left-13\"></div>\n" +
                    "                                        </div>\n" +
                    "                                    </div>"));

            }

        }
        ,

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
            console.log(data);
            if (data.length === 0) {
                alert("no result found");
            } else {
                for (var i = 0; i < 3; i++) {

                    $('#top_three').append($("<a href=\"#!\">\n" +
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
                        "                        </a>"
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
            if (data.length === 0) {
                document.getElementById("pack_img").innerHTML = "no packages found";
            } else {
                document.getElementById("pack_img").innerHTML = "<ul>\n" +
                    "                                    <li class=\"col-md-4\">\n" +
                    "                                        <div id=\"pack-img-1\" class=\"pg-list-ser-p1\"><img\n" +
                    "                                                src=" + data.packageImage1 + " alt= ''/> " +
                    "                                                alt=\"\"/></div>\n" +
                    "                                        <div class=\"pg-list-ser-p2\">\n" +
                    "                                            <h4 id=\"txt-pac-1\"></h4></div>\n" +
                    "                                    </li>\n" +
                    "                                    <li class=\"col-md-4\">\n" +
                    "                                        <div id=\"pack-img-2\" class=\"pg-list-ser-p1\"><img\n" +
                    "                                                src=" + data.packageImage2 + " alt= ''/> " +
                    "                                                alt=\"\"/></div>\n" +
                    "                                        <div class=\"pg-list-ser-p2\">\n" +
                    "                                            <h4 id=\"txt-pac-2\"></h4></div>\n" +
                    "                                    </li>\n" +
                    "                                    <li class=\"col-md-4\">\n" +
                    "                                        <div id=\"pack-img-3\" class=\"pg-list-ser-p1\"><img\n" +
                    "                                                src=" + data.packageImage3 + " alt= ''/> " +
                    "                                                alt=\"\"/></div>\n" +
                    "                                        <div class=\"pg-list-ser-p2\">\n" +
                    "                                            <h4 id=\"txt-pac-3\"></h4></div>\n" +
                    "                                    </li>\n" +
                    "                                    <li class=\"col-md-4\">\n" +
                    "                                        <div id=\"pack-img-4\" class=\"pg-list-ser-p1\"><img\n" +
                    "                                                src=" + data.packageImage4 + " alt= ''/> " +
                    "                                                alt=\"\"/></div>\n" +
                    "                                        <div class=\"pg-list-ser-p2\">\n" +
                    "                                            <h4 id=\"txt-pac-4\"></h4></div>\n" +
                    "                                    </li>\n" +
                    "                                    <li class=\"col-md-4\">\n" +
                    "                                        <div id=\"pack-img-5\" class=\"pg-list-ser-p1\"><img\n" +
                    "                                                src=" + data.packageImage5 + " alt= ''/> " +
                    "                                                alt=\"\"/></div>\n" +
                    "                                        <div class=\"pg-list-ser-p2\">\n" +
                    "                                            <h4 id=\"txt-pac-5\"></h4></div>\n" +
                    "                                    </li>\n" +
                    "                                    <li class=\"col-md-4\">\n" +
                    "                                        <div id=\"pack-img-6\" class=\"pg-list-ser-p1\"><img\n" +
                    "                                                src=" + data.packageImage6 + " alt= ''/> " +
                    "                                                alt=\"\"/></div>\n" +
                    "                                        <div class=\"pg-list-ser-p2\">\n" +
                    "                                            <h4 id=\"txt-pac-6\"></h4></div>\n" +
                    "                                    </li>\n" +
                    "                                </ul>"

                document.getElementById("txt-pac-1").innerHTML = data.packageName1;
                document.getElementById("txt-pac-2").innerHTML = data.packageName2;
                document.getElementById("txt-pac-3").innerHTML = data.packageName3;
                document.getElementById("txt-pac-4").innerHTML = data.packageName4;
                document.getElementById("txt-pac-5").innerHTML = data.packageName5;
                document.getElementById("txt-pac-6").innerHTML = data.packageName6;

                if (data.packageName1 != null) {
                    document.getElementById("pack_1").innerHTML = " <div class=\"col-md-3\"><img src='" + data.packageImage1 + "' alt=\"\"></div>\n" +
                        "                                <!--LISTINGS: CONTENT-->\n" +
                        "                                <div class=\"col-md-9 home-list-pop-desc inn-list-pop-desc list-room-deta\">\n" +
                        "                                    <a href=\"#!\">\n" +
                        "                                        <h3>" + data.packageName1 + "</h3>\n" +
                        "                                    </a>\n" +
                        "                                    <h4>" + data.packageDes1 + "</h4>\n" +
                        "                                    <h4 style='color: red'>"+data.packagePrice1+"</h4>\n" +
                        "                                </div>";
                }
                if (data.packageName2 != null) {
                    document.getElementById("pack_2").innerHTML = " <div class=\"col-md-3\"><img src='" + data.packageImage2 + "' alt=\"\"></div>\n" +
                        "                                <!--LISTINGS: CONTENT-->\n" +
                        "                                <div class=\"col-md-9 home-list-pop-desc inn-list-pop-desc list-room-deta\">\n" +
                        "                                    <a href=\"#!\">\n" +
                        "                                        <h3>" + data.packageName2 + "</h3>\n" +
                        "                                    </a>\n" +
                        "                                    <h4>" + data.packageDes2 + "</h4>\n" +
                        "                                    <h4 style='color: red'>"+data.packagePrice2+"</h4>\n" +
                        "                                </div>";
                }
                if (data.packageName3 != null) {
                    document.getElementById("pack_3").innerHTML = " <div class=\"col-md-3\"><img src='" + data.packageImage3 + "' alt=\"\"></div>\n" +
                        "                                <!--LISTINGS: CONTENT-->\n" +
                        "                                <div class=\"col-md-9 home-list-pop-desc inn-list-pop-desc list-room-deta\">\n" +
                        "                                    <a href=\"#!\">\n" +
                        "                                        <h3>" + data.packageName3 + "</h3>\n" +
                        "                                    </a>\n" +
                        "                                    <h4>" + data.packageDes3 + "</h4>\n" +
                        "                                    <h4 style='color: red'>"+data.packagePrice3+"</h4>\n" +
                        "                                </div>";
                }
                if (data.packageName4 != null) {
                    document.getElementById("pack_4").innerHTML = " <div class=\"col-md-3\"><img src='" + data.packageImage4 + "' alt=\"\"></div>\n" +
                        "                                <!--LISTINGS: CONTENT-->\n" +
                        "                                <div class=\"col-md-9 home-list-pop-desc inn-list-pop-desc list-room-deta\">\n" +
                        "                                    <a href=\"#!\">\n" +
                        "                                        <h3>" + data.packageName4 + "</h3>\n" +
                        "                                    </a>\n" +
                        "                                    <h4>" + data.packageDes4 + "</h4>\n" +
                        "                                    <h4 style='color: red'>"+data.packagePrice4+"</h4>\n" +
                        "                                </div>";
                }
                if (data.packageName5 != null) {
                    document.getElementById("pack_5").innerHTML = " <div class=\"col-md-3\"><img src='" + data.packageImage5 + "' alt=\"\"></div>\n" +
                        "                                <!--LISTINGS: CONTENT-->\n" +
                        "                                <div class=\"col-md-9 home-list-pop-desc inn-list-pop-desc list-room-deta\">\n" +
                        "                                    <a href=\"#!\">\n" +
                        "                                        <h3>" + data.packageName5 + "</h3>\n" +
                        "                                    </a>\n" +
                        "                                    <h4>" + data.packageDes5 + "</h4>\n" +
                        "                                    <h4 style='color: red'>"+data.packagePrice5+"</h4>\n" +
                        "                                </div>";
                }
                if (data.packageName6 != null) {
                    document.getElementById("pack_6").innerHTML = " <div class=\"col-md-3\"><img src='" + data.packageImage6 + "' alt=\"\"></div>\n" +
                        "                                <!--LISTINGS: CONTENT-->\n" +
                        "                                <div class=\"col-md-9 home-list-pop-desc inn-list-pop-desc list-room-deta\">\n" +
                        "                                    <a href=\"#!\">\n" +
                        "                                        <h3>" + data.packageName6 + "</h3>\n" +
                        "                                    </a>\n" +
                        "                                    <h4>" + data.packageDes6 + "</h4>\n" +
                        "                                    <h4 style='color: red'>"+data.packagePrice6+"</h4>\n" +
                        "                                </div>";
                }
            }
        }
    });
}