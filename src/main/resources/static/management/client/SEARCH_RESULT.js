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
    $('#allAds\n').empty();
    search("Select City", "Select Vendor Category");
};


function searchData() {

//methana check karahn
//     "Select City", "Select Vendor Category"
// uda cmnt eke theena deka pass karnna oneee hode
    var city = $("#city").val();
    var city = $("#cate").val();


    search(city, cate);
}

function search(city, cate) {
    $.ajax({
        url: "/advertisement/getAllads/" + city + "/" + cate,
        dataType: 'json',
        contentType: "application/json",
        type: 'GET',
        success: function (data, textStatus, jqXHR) {

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
                        "                                <span class=\"stars\">\n" +
                        "\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">&#xE838;</i>\n" +
                        "\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">&#xE838;</i>\n" +
                        "\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">&#xE838;</i>\n" +
                        "\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">&#xE838;</i>\n" +
                        "\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">&#xE838;</i>\n" +
                        "\t\t\t\t\t\t\t\t\t</span>\n" +
                        "                            </h3>\n" +
                        "                            <span class=\"address\"> " + data[i].city + " •  <a href=\"#\">Show on map</a></span>\n" +
                        "                            <span class=\"rating\"> 9 /10</span>\n" +
                        "                            <a  onclick='itemView(" + data[i].id + ")' title=\"Book now\" class=\"gradient-button\">Book now</a>\n" +
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
    window.open("/home/profileview", "_self");
}