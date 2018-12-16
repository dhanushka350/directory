function loadData() {
    var selctedAd = localStorage.getItem("selectedAd");

    getDataFromBackend(selctedAd);
}


function getDataFromBackend(selctedAd) {
    $.ajax({
        url: "/advertisement/getOne/" + selctedAd,
        dataType: 'json',
        contentType: "application/json",
        type: 'GET',
        success: function (data, textStatus, jqXHR) {
            console.log(data)
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
            
        }
    });
}