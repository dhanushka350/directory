function loadData() {
    var selctedAd = localStorage.getItem("selectedAd");
    getDataFromBackend(selctedAd);
}

let userid = null;

function getDataFromBackend(selctedAd) {
    $.ajax({
        url: "/advertisement/getOne/" + selctedAd,
        dataType: 'json',
        contentType: "application/json",
        type: 'GET',
        success: function (data, textStatus, jqXHR) {
            document.getElementById("txt-name").innerHTML = data.title;
            document.getElementById("txt-address").innerHTML = "<b>Address:</b>" + data.venodr.address;
            document.getElementById("txt-cont").innerHTML = "<i class=\"fa fa-phone\" aria-hidden=\"true\"></i>" + data.venodr.phone;
            document.getElementById("txt-email").innerHTML = "<i class=\"fa fa-envelope\" aria-hidden=\"true\"></i>" + data.venodr.email;
            document.getElementById("txt-owner").innerHTML = "<i class=\"fa fa-user\" aria-hidden=\"true\"></i>" + data.venodr.name + " " + data.venodr.lastName;
            document.getElementById("txt-compname").innerHTML = "<span>About</span>" + data.title;
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

            document.getElementById("txt-open").innerHTML = "Opening days : " + data.openingDates + "Opening Time : " + data.openingTime + "Closing Time : " + data.closingTime;

            document.getElementById("image-comp").innerHTML = "<img style='width: 80px;height: 80px;border-radius: 50%' src=" + data.venodr.image + " alt='' > ";
            document.getElementById("name-txt").innerHTML = data.venodr.name + " " + data.venodr.lastName;
            userid = data.venodr.id;
            setRatings(userid);
        }
    });
}

function saveRatings() {

    console.log("working");
    console.log(document.getElementById("full_name").value);
    console.log(document.getElementById("mobile_txt").value);
    console.log(document.getElementById("email_txt").value);
    console.log(document.getElementById("city_txt").value);
    console.log(document.getElementById("review_txt").value);


    var e = {};
    e["fullName"] = document.getElementById("full_name").value;
    e["mobile"] = document.getElementById("mobile_txt").value;
    e["email"] = document.getElementById("email_txt").value;
    e["city"] = document.getElementById("city_txt").value;
    e["review"] = document.getElementById("review_txt").value;
    e["adID"] = userid;
    var d = JSON.stringify(e);
    $.ajax({
        url: "/ratings/save",
        dataType: 'json',
        contentType: "application/json",
        type: 'POST',
        data: d,
        success: function (data, textStatus, jqXHR) {
            console.log("data" + data);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            swal("Oops!", "we didn't find your details.", "error");
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