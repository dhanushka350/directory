$(window).load(function () {

});


function viewMore(param) {
    localStorage.setItem("selectedCity", "Select City");
    localStorage.setItem("selectedCate", param);
    window.open("http://localhost:7575/home/listing/vendors", "_self");
}
