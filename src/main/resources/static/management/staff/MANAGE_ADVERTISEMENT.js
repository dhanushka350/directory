var selctedAd;


function setAdStatus() {
    var remember = document.getElementById("ad_status");
    if (remember.checked) {
        updateStatus(1);
        document.getElementById("lbl_status").innerHTML = "ACTIVE";
    } else {
        updateStatus(0);
        document.getElementById("lbl_status").innerHTML = "INACTIVE";
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
        url: "/advertisement/getOne/" + selctedAd,
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
            } else if (data.status === 1) {
                $('#ad_status').prop('checked', true);
                document.getElementById("lbl_status").innerHTML = "ACTIVATED";
            } else {
                $('#ad_status').prop('checked', false);
                document.getElementById("lbl_status").innerHTML = "BLOCKED";
            }

        }
    });
}

function guestView() {
    localStorage.setItem("selectedAd", selctedAd);
    window.open("/home/profileview", "_blank");
}