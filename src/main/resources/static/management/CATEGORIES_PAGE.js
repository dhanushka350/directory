$(window).load(function () {

});


function viewMore(param) {
    localStorage.setItem("selectedCity", "Select City");
    localStorage.setItem("selectedCate", param);
    window.open("/home/listing/vendors", "_self");
}
