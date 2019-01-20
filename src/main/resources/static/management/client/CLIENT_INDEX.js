

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

function setFrontPageAdv() {
    $.ajax({
        url: "/advertisement/getTop",
        dataType: 'json',
        contentType: "application/json",
        type: 'GET',
        success: function (data, textStatus, jqXHR) {
            $('#top-ads\n').empty();
            if (data.length === 0) {
                $('#top-ads').append($("<h1>No Results Found</h1>"));
            } else {
                for (var i = 0; i < data.length; i++) {


                    $('#top-ads\n').append($("<article id='" + data[i].id + "' onclick='itemView(" + data[i].id + ")' class=\"one-fourth\">" +
                        "<figure><a title=\"\" style='width: 250px; height: 100px;'>\n" +
                        "<img src=" + data[i].coverImage1 + "; style='height: 100%;width: 100%'>\n" +
                        "</a>\n" +
                        "</figure>\n" +
                        "<div class=\"details\">\n" +
                        "<a  title=\"View \" class=\"gradient-button\" onclick='itemView(" + data[i].id + ")'>View</a>\n" +
                        "<h4>" + data[i].title + "</h4>\n" +
                        "<span class=\"count\">" + data[i].city + "</span>\n" +
                        "<div class=\"ribbon\">\n" +
                        "<div>\n" +
                        "<a href=\"hotels.html\" title=\"View all\">\n" +
                        "<span class=\"small\">VENDOR</span>\n" +
                        "<span class='small'>" + data[i].vendor + "</span>\n" +
                        "</a>\n" +
                        "</div>\n" +
                        "<div>\n" +
                        "<a href=\"flights.html\" title=\"View all\">\n" +
                        "<span class=\"small\">CATEGORY</span>\n" +
                        "<span class='small'>" + data[i].category + "</span>\n" +
                        "</a>\n" +
                        "</div>\n" +
                        "</div>\n" +
                        "</div>\n" +
                        "</article>"
                    ));
                }
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

    var city = $("#city").val();
    var cate = $("#category").val();
    var elmnt = document.getElementById("top-ads");
    elmnt.scrollIntoView();
    $.ajax({
        url: "/advertisement/getTopByCity/" + city + "/" + cate,
        dataType: 'json',
        contentType: "application/json",
        type: 'GET',
        success: function (data, textStatus, jqXHR) {
            $('#top-ads').empty();
            if (data.length === 0) {
                $('#top-ads').append($("<h1>No Results Found</h1>"));
            } else {
                for (var i = 0; i < data.length; i++) {
                    $('#top-ads\n').append($("<article id='" + data[i].id + "' onclick='itemView(" + data[i].id + ")' class=\"one-fourth\">" +
                        "<figure><a title=\"\" style='width: 250px; height: 100px;'>\n" +
                        "<img src=" + data[i].coverImage1 + "; style='height: 100%;width: 100%'>\n" +
                        "</a>\n" +
                        "</figure>\n" +
                        "<div class=\"details\">\n" +
                        "<a  title=\"View \" class=\"gradient-button\" onclick='itemView(" + data[i].id + ")'>View</a>\n" +
                        "<h4>" + data[i].title + "</h4>\n" +
                        "<span class=\"count\">" + data[i].city + "</span>\n" +
                        "<div class=\"ribbon\">\n" +
                        "<div>\n" +
                        "<a href=\"hotels.html\" title=\"View all\">\n" +
                        "<span class=\"small\">VENDOR</span>\n" +
                        "<span class='small'>" + data[i].vendor + "</span>\n" +
                        "</a>\n" +
                        "</div>\n" +
                        "<div>\n" +
                        "<a href=\"flights.html\" title=\"View all\">\n" +
                        "<span class=\"small\">CATEGORY</span>\n" +
                        "<span class='small'>" + data[i].category + "</span>\n" +
                        "</a>\n" +
                        "</div>\n" +
                        "</div>\n" +
                        "</div>\n" +
                        "</article>"
                    ));
                }
            }
        }

    });
}

function viewMore() {
    localStorage.setItem("selectedCity", $('#cmb-city').find(":selected").text());
    localStorage.setItem("selectedCate", $('#cmb-cate').find(":selected").text());
    window.open("/home/listing/vendors", "_self");
}


