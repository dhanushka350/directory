$(window).load(function () {
    getCity();
    getVendorCat();
    setFrontPageAdv();
});

//
// $('#cmb-city').autocomplete({
//     source: '/advertisement/getAllCities',
//     onSelect: function (suggestion) {
//         alert('You selected: ' + suggestion.value + ', ' + suggestion.data);
//     }
// });
//
// $('#cmb-cate').autocomplete({
//     source: '/advertisement/getAllVendorCat',
//     onSelect: function (suggestion) {
//         alert('You selected: ' + suggestion.value + ', ' + suggestion.data);
//     }
// });


function getCity() {
    $.ajax({
        url: "/advertisement/getAllCities",
        dataType: 'json',
        contentType: "application/json",
        type: 'GET',
        success: function (data, textStatus, jqXHR) {

            for (var i = 0; i < data.length; i++) {

                $('#cmb-city').append($('<option>', {
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

                $('#cmb-cate').append($('<option>', {
                    value: data[i],
                    text: data[i]
                }));
            }
        },
    });
}

function setFrontPageAdv() {
    $.ajax({
        url: "/advertisement/getTop",
        dataType: 'json',
        contentType: "application/json",
        type: 'GET',
        success: function (data, textStatus, jqXHR) {
            $('#top-ads\n').empty();
            if (data.length === 0) {
                alert("no res found")
                $('#top-ads').append($("<h1>No Results Found</h1>"));
            } else {
                for (var i = 0; i < data.length; i++) {
                    $('#top-ads\n').append($("<div id='" + data[i].id + "' onclick='itemView(" + data[i].id + ")' class=\"col-md-4 vendor-box\">\n" +
                        "                    <div class=\"grid\">\n" +
                        "                        <figure id=\"img-one\" class=\"effect-bubba\"><img src=" + data[i].coverImage1 + " alt=\"wedding venue\"\n" +
                        "                                                          class=\"img-responsive\">\n" +
                        "                            <figcaption>\n" +
                        "                                <h2>" + data[i].title + "</h2>\n" +
                        "                                <p>" + data[i].city + "</p>\n" +
                        "                                <p class=\"rating\"><i class=\"fa fa-star\"></i> <i class=\"fa fa-star\"></i> <i\n" +
                        "                                        class=\"fa fa-star\"></i> <i class=\"fa fa-star\"></i> <i class=\"fa fa-star-o\"></i>\n" +
                        "                                </p>\n" +
                        "                            </figcaption>\n" +
                        "                        </figure>\n" +
                        "                    </div>\n" +
                        "                </div>"
                    ));
                }

                $('#top-ads\n').append($(" <div onclick='viewMore();' class=\"col-md-4 vendor-box\" id=\"allCategory\">\n" +
                    "                    <div class=\"grid\">\n" +
                    "                        <figure class=\"effect-bubba\"><img src=\"images/vendor-6.jpg\" alt=\"wedding venue\"\n" +
                    "                                                          class=\"img-responsive\">\n" +
                    "                            <figcaption>\n" +
                    "                                <h2>All Vendors</h2>\n" +
                    "                                <p>Browse All Vendors</p>\n" +
                    "                            </figcaption>\n" +
                    "                        </figure>\n" +
                    "                    </div>\n" +
                    "                </div>"));
            }
        }
    });
}

function itemView(param) {
    localStorage.setItem("selectedAd", param);
    window.open("/home/profileview", "_self");
}

$('#cmb-city').on('change', function () {
    search();
});
$('#cmb-cate').on('change', function () {
    search();
});

function search() {
    $.ajax({
        url: "/advertisement/getTopByCity/" + $('#cmb-city').find(":selected").text() + "/" + $('#cmb-cate').find(":selected").text(),
        dataType: 'json',
        contentType: "application/json",
        type: 'GET',
        success: function (data, textStatus, jqXHR) {
            $('#top-ads\n').empty();
            if (data.length === 0) {
                alert("no result found");
            } else {
                for (var i = 0; i < data.length; i++) {
                    $('#top-ads\n').append($("<div id='" + data[i].id + "' onclick='itemView(" + data[i].id + ")' class=\"col-md-4 vendor-box\">\n" +
                        "                    <div class=\"grid\">\n" +
                        "                        <figure id=\"img-one\" class=\"effect-bubba\"><img src=" + data[i].coverImage1 + " alt=\"wedding venue\"\n" +
                        "                                                          class=\"img-responsive\">\n" +
                        "                            <figcaption>\n" +
                        "                                <h2>" + data[i].title + "</h2>\n" +
                        "                                <p>" + data[i].city + "</p>\n" +
                        "                                <p class=\"rating\"><i class=\"fa fa-star\"></i> <i class=\"fa fa-star\"></i> <i\n" +
                        "                                        class=\"fa fa-star\"></i> <i class=\"fa fa-star\"></i> <i class=\"fa fa-star-o\"></i>\n" +
                        "                                </p>\n" +
                        "                            </figcaption>\n" +
                        "                        </figure>\n" +
                        "                    </div>\n" +
                        "                </div>"
                    ));
                }
                $('#top-ads\n').append($(" <div onclick='viewMore();' class=\"col-md-4 vendor-box\" id=\"allCategory\">\n" +
                    "                    <div class=\"grid\">\n" +
                    "                        <figure class=\"effect-bubba\"><img src=\"images/vendor-6.jpg\" alt=\"wedding venue\"\n" +
                    "                                                          class=\"img-responsive\">\n" +
                    "                            <figcaption>\n" +
                    "                                <h2>All Vendors</h2>\n" +
                    "                                <p>Browse All Vendors</p>\n" +
                    "                            </figcaption>\n" +
                    "                        </figure>\n" +
                    "                    </div>\n" +
                    "                </div>"));

            }
        }

    });
}

function viewMore() {
    localStorage.setItem("selectedCity", $('#cmb-city').find(":selected").text());
    localStorage.setItem("selectedCate", $('#cmb-cate').find(":selected").text());
    window.open("/home/listing/vendors", "_self");
}


