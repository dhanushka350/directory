function viewMore(param) {
    localStorage.setItem("selectedCity", "Select City");
    localStorage.setItem("selectedCate", param);
    window.open("/main/search_results", "_self");
}