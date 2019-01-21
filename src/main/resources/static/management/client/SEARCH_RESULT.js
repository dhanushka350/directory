function getCity() {
    $.ajax({
        url: "/advertisement/getAllCities",
        dataType: 'json',
        contentType: "application/json",
        type: 'GET',
        success: function (data, textStatus, jqXHR) {

            for (var i = 0; i < data.length; i++) {

                $('#cityList').append($('<option>', {
                    value: data[i],
                    text: data[i]
                }));
            }
        },
    });
}

function getVendorCat() {
    $.ajax({
        url: "/advertisement/getAllVendorCat",
        dataType: 'json',
        contentType: "application/json",
        type: 'GET',
        success: function (data, textStatus, jqXHR) {

            for (var i = 0; i < data.length; i++) {

                $('#cateList').append($('<option>', {
                    value: data[i],
                    text: data[i]
                }));
            }
        },
    });
}

function loadOn() {
    var city = localStorage.getItem("selectedCity");
    var cate = localStorage.getItem("selectedCate");
    if (city.length < 2 || city === null) {
        city = "Select City";
    }
    if (cate.length < 2 || cate === null) {
        cate = "Select Vendor Category";
    }
    $('#allAds\n').empty();
    search(city, cate);
};


function searchData() {
    var city = $("#city").val();
    var cate = $("#category").val();

    if (city.length < 2) {
        city = "Select City";
    }
    if (cate.length < 2) {
        cate = "Select Vendor Category";
    }
    search(city, cate);
}

function search(city, cate) {
    $.ajax({
        url: "/advertisement/getAllads/" + city + "/" + cate,
        dataType: 'json',
        contentType: "application/json",
        type: 'GET',
        success: function (data, textStatus, jqXHR) {
            document.getElementById("rec_count").innerText = "Found " + data.length + " Results.";
            $('#allAds\n').empty();
            if (data.length === 0) {
                document.getElementById("allAds").innerHTML = "<h1 style='text-align: center'>No Result Found</h1>";
            } else {
                for (var i = 0; i < data.length; i++) {
                    $('#allAds\n').append($("<article class=\"one-third\">\n" +
                        "                        <figure><a href=\"hotel.html\" title=\"\"><img src='" + data[i].coverImage1 + "' alt=\"\"/></a>\n" +
                        "                        </figure>\n" +
                        "                        <div class=\"details\">\n" +
                        "                            <h3>" + data[i].title + "\n" +
                        "                            </h3>\n" +
                        "                            <span class=\"address\"> " + data[i].city + " •  <a>Working days - " + data[i].openingDates + "</a></span>\n" +
                        "                            <a  onclick='itemView(" + data[i].id + ")' title=\"Book now\" class=\"gradient-button\">More Details</a>\n" +
                        "                        </div>\n" +
                        "                    </article>"));

                }
                $('#allAds\n').append($(" <div class=\"bottom-nav\">\n" +
                    "                        <!--back up button-->\n" +
                    "                        <a href=\"#\" class=\"scroll-to-top\" title=\"Back up\">Back up</a>\n" +
                    "                        <!--//back up button-->\n" +
                    "\n" +
                    "                        <!--pager-->\n" +
                    "                        <div class=\"pager\">\n" +
                    "                            <span><a href=\"#\">First page</a></span>\n" +
                    "                            <span><a href=\"#\">&lt;</a></span>\n" +
                    "                            <span class=\"current\">1</span>\n" +
                    "                            <span><a href=\"#\">2</a></span>\n" +
                    "                            <span><a href=\"#\">3</a></span>\n" +
                    "                            <span><a href=\"#\">4</a></span>\n" +
                    "                            <span><a href=\"#\">5</a></span>\n" +
                    "                            <span><a href=\"#\">6</a></span>\n" +
                    "                            <span><a href=\"#\">7</a></span>\n" +
                    "                            <span><a href=\"#\">8</a></span>\n" +
                    "                            <span><a href=\"#\">&gt;</a></span>\n" +
                    "                            <span><a href=\"#\">Last page</a></span>\n" +
                    "                        </div>\n" +
                    "                        <!--//pager-->\n" +
                    "                    </div>"));

            }
        }
    });


}

function itemView(param) {
    localStorage.setItem("selectedAd", param);
    window.open("/main/advertisement", "_self");
}