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

// function getVendorCat() {
//     $.ajax({
//         url: "/advertisement/getAllVendorCat",
//         dataType: 'json',
//         contentType: "application/json",
//         type: 'GET',
//         success: function (data, textStatus, jqXHR) {
//
//             for (var i = 0; i < data.length; i++) {
//
//                 $('#cateList').append($('<option>', {
//                     value: data[i],
//                     text: data[i]
//                 }));
//             }
//         },
//     });
// }

function setFrontPageAdv() {
    $(".head").tooltip();
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
                    var tool = data[i].title;
                    var title = data[i].title;
                    if (data[i].title.length > 20) {
                        title = data[i].title.substring(0, 20);
                    }
                    $('#top-ads\n').append($("<article id='" + data[i].id + "' onclick='itemView(" + data[i].id + ")' class=\"one-fourth ads\">" +
                        "<figure><a title=\"\" style='width: 250px; height: 100px;'>\n" +
                        "<img class='img-rip' src=" + data[i].coverImage1 + "; style='height: 100%;width: 100%'>\n" +
                        "</a>\n" +
                        "</figure>\n" +
                        "<div class='ad details'>\n" +
                        "<a  title=\"View \" class=\"gradient-button\" onclick='itemView(" + data[i].id + ")'>View</a>\n" +
                        "<h6 title='" + title + "' class='head'>" + tool + "</h6>\n" +
                        "<span class=\"count\">" + data[i].city + "</span>\n" +
                        "<div class=\"ribbon\">\n" +
                        "<div>\n" +
                        "<a  title=\"View all\" style='text-align: left'>\n" +
                        "<span class=\"small\" style='text-anchor: start'>VENDOR</span>\n" +
                        "<span class='small'>" + data[i].vendor + "</span>\n" +
                        "</a>\n" +
                        "</div>\n" +
                        "<div>\n" +
                        "<a  title=\"View all\" style='text-align: right'>\n" +
                        "<span class=\"small\" style='text-anchor: end'>CATEGORY</span>\n" +
                        "<span class='small'>" + data[i].category + "</span>\n" +
                        "</a>\n" +
                        "</div>\n" +
                        "</div>\n" +
                        "</div>\n" +
                        "</article>"
                    ));
                }
                $(".head").tooltip();
            }
        }
    });
}

function itemView(param) {
    localStorage.setItem("selectedAd", param);
    window.open("/main/advertisement", "_self");
}

function viewMore(param) {
    localStorage.setItem("selectedCity", "Select City");
    localStorage.setItem("selectedCate", param);
    window.open("/main/search_results", "_self");
}

// $('#cmb-city').on('change', function () {
//     search();
// });

$('#category').on('change', function () {
    search();
});


function search() {

    var city = $("#city").val();
    var cate = $('#category').find(":selected").text();

    if (city.length < 2) {
        city = "Select City";
    }
    if (cate.length < 2) {
        cate = "Select Vendor Category";
    }

    var elmnt = document.getElementById("top-ads");
    elmnt.scrollIntoView();
    $.ajax({
        url: "/advertisement/getTopByCity/" + city + "/" + cate,
        dataType: 'json',
        contentType: "application/json",
        type: 'GET',
        success: function (data, textStatus, jqXHR) {
            $('#top-ads').empty();
            if (data.length === 0 || data == null) {
                $('#top-ads').append($("<h1>No Results Found</h1>"));
            } else {
                for (var i = 0; i < data.length; i++) {

                    var tool = data[i].title;
                    var title = data[i].title;
                    if (data[i].title.length > 20) {
                        title = data[i].title.substring(0, 20);
                    }
                    $('#top-ads\n').append($("<article id='" + data[i].id + "' onclick='itemView(" + data[i].id + ")' class=\"one-fourth\">" +
                        "<figure><a title=\"\" style='width: 250px; height: 100px;'>\n" +
                        "<img class='img-rip' src=" + data[i].coverImage1 + "; style='height: 100%;width: 100%'>\n" +
                        "</a>\n" +
                        "</figure>\n" +
                        "<div class='ad details'>\n" +
                        "<a  title=\"View \" class=\"gradient-button\" onclick='itemView(" + data[i].id + ")'>View</a>\n" +
                        "<h6 title='" + title + "'>" + tool + "</h6>\n" +
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
        },

    });
}


