var selctedAd;
var activated = false;

function setAdStatus() {
    var remember = document.getElementById("ad_status");
    if (remember.checked) {
        updateStatus(1);
        document.getElementById("lbl_status").innerHTML = "ACTIVE";
        activated = true;
    } else {
        updateStatus(0);
        document.getElementById("lbl_status").innerHTML = "INACTIVE";
        activated = false;
    }
}

function updateStatus(status) {
    var data = selctedAd + "-" + status;

    $.ajax({
        url: "/admin/update_ad_status" + data,
        dataType: 'text',
        contentType: "application/json",
        type: 'GET',
        success: function (data, textStatus, jqXHR) {
            swal(data);
        }
    });
}

function getDataFromBackend() {
    selctedAd = localStorage.getItem("selectedAd");
    $.ajax({
        url: "/staff/getOne/" + selctedAd,
        dataType: 'json',
        contentType: "application/json",
        type: 'GET',
        success: function (data, textStatus, jqXHR) {

            document.getElementById("lbl_vendor").innerText = data.venodr.name + " -||- " + data.title;
            document.getElementById("ad_title").value = data.title;
            document.getElementById("ad_city").value = data.city;
            document.getElementById("ad_cate").value = data.category;
            document.getElementById("ad_desc").value = data.description;
            document.getElementById("ad_createdDate").value = data.createdDate;
            document.getElementById("ad_referel").value = data.referral;

            document.getElementById("ven_name").value = data.venodr.name;
            document.getElementById("ven_mobile").value = data.venodr.phone;
            document.getElementById("ven_email").value = data.venodr.email;
            document.getElementById("ven_address").value = data.venodr.address;

            if (data.status === 0) {
                $('#ad_status').prop('checked', false);
                document.getElementById("lbl_status").innerHTML = "INACTIVE";
                activated = false;
            } else if (data.status === 1) {
                $('#ad_status').prop('checked', true);
                document.getElementById("lbl_status").innerHTML = "ACTIVATED";
                activated = true;
            }

        }
    });
}

function guestView() {
    localStorage.removeItem("selectedAd");
    localStorage.setItem("selectedAd", selctedAd);
    if (activated === true) {
        window.open("/main/advertisement", "_blank");
    } else {
        $('.ui.basic.modal')
            .modal('show')
        ;
    }
}

function activate() {
    $('#ad_status').prop('checked', true);
    this.activated = true;
    setTimeout(function () {
        setAdStatus();
    }, 5000);

}
