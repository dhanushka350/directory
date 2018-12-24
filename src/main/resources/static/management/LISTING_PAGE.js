$(window).load(function () {
    var city = localStorage.getItem("selectedCity");
    var cate = localStorage.getItem("selectedCate");
    search(city, cate);
    getCity();
    getVendorCat();
});


function search(city, cate) {
    $.ajax({
        url: "/advertisement/getAllads/" + city + "/" + cate,
        dataType: 'json',
        contentType: "application/json",
        type: 'GET',
        success: function (data, textStatus, jqXHR) {
            $('#allAds\n').empty();
            if (data.length === 0) {
                document.getElementById("count_txt").innerHTML = data.length + " Results";
                document.getElementById("allAds").innerHTML = "<h1 style='text-align: center'>No Result Found</h1>";
            } else {
                document.getElementById("count_txt").innerHTML = data.length + " Results";
                for (var i = 0; i < data.length; i++) {
                    $('#allAds\n').append($(" <div onclick='itemView(" + data[i].id + ")' class=\"col-md-4 vendor-box\">\n" +
                        "                        <!-- venue box start-->\n" +
                        "                        <div class=\"vendor-image\">\n" +
                        "                            <!-- venue pic -->\n" +
                        "                            <a ><img src=" + data[i].coverImage1 + " alt=\"wedding venue\" class=\"img-responsive\"></a>\n" +
                        "                            <div class=\"favourite-bg\"><a href=\"#\" class=\"\"><i class=\"fa fa-heart\"></i></a></div>\n" +
                        "                        </div>\n" +
                        "                        <!-- /.venue pic -->\n" +
                        "                        <div class=\"vendor-detail\">\n" +
                        "                            <!-- venue details -->\n" +
                        "                            <div class=\"caption\">\n" +
                        "                                <!-- caption -->\n" +
                        "                                <h2><a href=\"/home/vendor-profile-details\" class=\"title\">" + data[i].title + " </a></h2>\n" +
                        "                                <p class=\"location\"><i class=\"fa fa-map-marker\"></i> " + data[i].city +
                        "                                    </p>\n" +
                        "                                <div class=\"rating \"><i class=\"fa fa-star\"></i> <i class=\"fa fa-star\"></i> <i\n" +
                        "                                        class=\"fa fa-star\"></i> <i class=\"fa fa-star\"></i> <i class=\"fa fa-star-o\"></i>\n" +
                        "                                    <span class=\"rating-count\"></span></div>\n" +
                        "                            </div>\n" +
                        "                            <!-- /.caption -->\n" +
                        "                            <div class=\"vendor-price\">\n" +
                        "                                <div class=\"price\">$390 - $600</div>\n" +
                        "                            </div>\n" +
                        "                        </div>\n" +
                        "                        <!-- venue details -->\n" +
                        "                    </div>"));

                }
            }
        }
    });

}

function itemView(param) {
    localStorage.setItem("selectedAd", param);
    window.open("http://localhost:7575/home/profileview", "_self");
}

function getCity() {
    $.ajax({
        url: "/advertisement/getAllCities",
        dataType: 'json',
        contentType: "application/json",
        type: 'GET',
        success: function (data, textStatus, jqXHR) {

            for (var i = 0; i < data.length; i++) {

                $('#city-cmb').append($('<option>', {
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

                $('#catType').append($('<option>', {
                    value: data[i],
                    text: data[i]
                }));
            }
        },
    });
}


function searchByFilters() {

    var selectedType = $('#catType').find(":selected").text();
    var selectedCity = $('#city-cmb').find(":selected").text();

    search(selectedCity, selectedType);
}

