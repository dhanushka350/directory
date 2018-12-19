var selctedAd;

function loadData() {
    selctedAd = localStorage.getItem("selectedAd");
    getDataFromBackend(selctedAd);
}


$('#rating_btn').click(function (e) {
    e.preventDefault();
    saveRatings();
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
            $("#img-main").css("background-image", "url(" + data.coverImage1 + ")");
            $("#image-comp").css("background-image", "url(" + data.coverImage1 + ")");
            console.log(data);
            document.getElementById("txt-name").innerHTML = data.title;
            document.getElementById("txt-address").innerHTML = "<b>Address:</b>" + data.venodr.address;
            document.getElementById("txt-cont").innerHTML = "<i class=\"fa fa-phone\" aria-hidden=\"true\"></i>" + data.venodr.phone;
            document.getElementById("txt-email").innerHTML = "<i class=\"fa fa-envelope\" aria-hidden=\"true\"></i>" + data.venodr.email;
            document.getElementById("txt-owner").innerHTML = "<i class=\"fa fa-user\" aria-hidden=\"true\"></i>" + data.venodr.name + " " + data.venodr.lastName;
            document.getElementById("txt-compname").innerHTML = "<span>About </span>" + data.title;
            document.getElementById("txt-desc").innerHTML = data.description;
            document.getElementById("txt-package-name").innerHTML = data.packageName1 + " , " + data.packageName2 + " , " + data.packageName3 + " , " + data.packageName4 + " , " + data.packageName5 + " , " + data.packageName6 + " , ";

            document.getElementById("pack-img-1").innerHTML = "<img src=" + data.packageImage1 + " alt= ''/> ";
            document.getElementById("pack-img-2").innerHTML = "<img src=" + data.packageImage2 + " alt= ''/> ";
            document.getElementById("pack-img-3").innerHTML = "<img src=" + data.packageImage3 + " alt= ''/> ";
            document.getElementById("pack-img-4").innerHTML = "<img src=" + data.packageImage4 + " alt= ''/> ";
            document.getElementById("pack-img-5").innerHTML = "<img src=" + data.packageImage5 + " alt= ''/> ";
            document.getElementById("pack-img-6").innerHTML = "<img src=" + data.packageImage6 + " alt= ''/> ";

            document.getElementById("txt-pac-1").innerHTML = data.packageName1;
            document.getElementById("txt-pac-2").innerHTML = data.packageName2;
            document.getElementById("txt-pac-3").innerHTML = data.packageName3;
            document.getElementById("txt-pac-4").innerHTML = data.packageName4;
            document.getElementById("txt-pac-5").innerHTML = data.packageName5;
            document.getElementById("txt-pac-6").innerHTML = data.packageName6;

            document.getElementById("slider-img-1").innerHTML = "<img src=" + data.coverImage1 + " alt=''> ";
            document.getElementById("slider-img-2").innerHTML = "<img src=" + data.coverImage2 + " alt=''> ";
            document.getElementById("slider-img-3").innerHTML = "<img src=" + data.coverImage3 + " alt=''> ";
            document.getElementById("slider-img-4").innerHTML = "<img src=" + data.coverImage4 + " alt=''> ";

            document.getElementById("txt-days").innerHTML = "Opening days : " + data.openingDates;
            document.getElementById("txt-open").innerHTML = "Opening Time : " + data.openingTime;
            document.getElementById("txt-close").innerHTML = "Closing Time : " + data.closingTime;
            document.getElementById("open_time").innerHTML = data.openingTime;
            document.getElementById("close_time").innerHTML =  data.closingTime;


            document.getElementById("image-comp").innerHTML = "<img style='width: 80px;height: 80px;border-radius: 50%' src=" + data.venodr.image + " alt='' > ";
            document.getElementById("name-txt").innerHTML = data.venodr.name + " " + data.venodr.lastName;
            userid = data.venodr.id;
            setRatings(userid);
            getTopRating(data.city, data.category);
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

        },
        error: function (jqXHR, textStatus, errorThrown) {

        },
        beforeSend: function (xhr) {
        }
    });
}

function setRatings(param) {
    $.ajax({
        url: "/ratings/getAll/" + param,
        dataType: 'json',
        contentType: "application/json",
        type: 'GET',
        success: function (data, textStatus, jqXHR) {
            var avg = 0;
            for (var i = 0; i < data.length; i++) {
                avg += data[i].ratings;
                $('#review_div\n').append($("<li>\n" +
                    "                                        <div class=\"lr-user-wr-img\"><img src=\"/profile/images/users/2.png\" alt=\"\"></div>\n" +
                    "                                        <div class=\"lr-user-wr-con\">\n" +
                    "                                            <h6>" + data[i].fullName + " <span>" + data[i].ratings + " <i class=\"fa fa-star\"\n" +
                    "                                                                           aria-hidden=\"true\"></i></span></h6> <span\n" +
                    "                                                class=\"lr-revi-date\">" + data[i].review + " </p>\n" +
                    "                                            <ul>\n" +
                    "                                                <li><a href=\"#!\"><span>Like</span><i class=\"fa fa-thumbs-o-up\"\n" +
                    "                                                                                     aria-hidden=\"true\"></i></a></li>\n" +
                    "                                                <li><a href=\"#!\"><span>Dis-Like</span><i class=\"fa fa-thumbs-o-down\"\n" +
                    "                                                                                         aria-hidden=\"true\"></i></a>\n" +
                    "                                                </li>\n" +
                    "                                                <li><a href=\"#!\"><span>Report</span> <i class=\"fa fa-flag-o\"\n" +
                    "                                                                                        aria-hidden=\"true\"></i></a></li>\n" +
                    "                                                <li><a href=\"#!\"><span>Comments</span> <i class=\"fa fa-commenting-o\"\n" +
                    "                                                                                          aria-hidden=\"true\"></i></a>\n" +
                    "                                                </li>\n" +
                    "                                                <li><a href=\"#!\"><span>Share Now</span> <i class=\"fa fa-facebook\"\n" +
                    "                                                                                           aria-hidden=\"true\"></i></a>\n" +
                    "                                                </li>\n" +
                    "                                                <li><a href=\"#!\"><i class=\"fa fa-google-plus\"\n" +
                    "                                                                    aria-hidden=\"true\"></i></a></li>\n" +
                    "                                                <li><a href=\"#!\"><i class=\"fa fa-twitter\" aria-hidden=\"true\"></i></a>\n" +
                    "                                                </li>\n" +
                    "                                                <li><a href=\"#!\"><i class=\"fa fa-linkedin\" aria-hidden=\"true\"></i></a>\n" +
                    "                                                </li>\n" +
                    "                                                <li><a href=\"#!\"><i class=\"fa fa-youtube\" aria-hidden=\"true\"></i></a>\n" +
                    "                                                </li>\n" +
                    "                                            </ul>\n" +
                    "                                        </div>\n" +
                    "                                    </li>"
                ));
            }
            document.getElementById("raings_count").innerHTML = "<span>" + avg / data.length + " <i class=\"fa fa-star\" aria-hidden=\"true\"></i></span> based on " + data.length + "reviews</p>";
        }

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
                        "                                        class=\"home-list-pop-rat list-mi-pr\">$720</span></div>\n" +
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