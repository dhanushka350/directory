

// Dear programmer:
// When I wrote this code, only god and
// I knew how it worked.
// Now, only god knows it!
//
// Therefore, if you are trying to optimize
// this routing and it fails (most surely),
// please increase this counter as a
// warning for the next person:
//
// total_hours_wasted_here = 460:
//
// Dhanushka - lines 3360

var vendor;
var broker;
var land;
var landID;
var docId = 12;
var other = [];
var odlist = [];
var purchaseData = new Array();
var ProjectOfficerApproval = 0;
var BranchManagerApproval = 0;
var HeadOfficeApproval = 0;
var reject = 0;
var preparedBy = $.session.get("Logged_User");

$(function () {
    disableAllSteps();
    showStepOne();
    window.scrollTo(0, 0);
    document.getElementById('wstep').style.backgroundColor = "#1ABB9C";

    if ($.session.get("Land") != null) {
        LO.loadProjectForApproval();
    }

    checkAuthorityForApproval();
    authority();
    toastr.options = {
        "closeButton": true,
        "debug": false,
        "newestOnTop": false,
        "progressBar": false,
        "positionClass": "toast-top-right",
        "preventDuplicates": false,
        "onclick": null,
        "showDuration": "300",
        "hideDuration": "1000",
        "timeOut": "5000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    };

    LO.load_area();

    $('#BtnNewDoc').click(function (e) {
        e.preventDefault();
        docId = docId + 1;
        var docName = $('#btnNewDocument').val();
        other.push(docName);
        var tr;
        tr = $('<tr id="' + docId + '">');
        tr.append("<td>" + docId + "</td>");
        tr.append("<td> <input type='text'  required='required' class='form-control col-md-8 col-xs-12 textFieldStyle' value=" + docName + "></td>");
        tr.append("<td><a href='#' class='btn btn-info btn-xs actions' onclick='LO.remove_other_document(this);' style='background-color: transparent; color: #00A000;'> <i class='glyphicon glyphicon-remove' style='color: red; margin-left: 0px; margin-top: -3px;'></i></a></td>");
        $('#tbl_document').append(tr);
        modal.style.display = "none";
        $("#btnNewDocument").val("");


    });

    $("#rejectBtn").click(function (e) {
        reject = 1;
        LO.sendAllData();
        e.preventDefault();
    });
    disableAllSteps();
    showStepOne();
    window.scrollTo(0, 0);
    document.getElementById('wstep').style.backgroundColor = "#1ABB9C";


    $("#stepOneNext").click(function () {
        disableAllSteps();
        showStepTow();
        window.scrollTo(0, 0);
        defaultColourForSteps();
        document.getElementById('wstep2').style.backgroundColor = "#1ABB9C";
    });
    $("#stepTowPopConfirm").click(function () {
        disableAllSteps();
        showStepThree();
        modal2.style.display = "none";
        window.scrollTo(0, 0);
        defaultColourForSteps();
        document.getElementById('wstep3').style.backgroundColor = "#1ABB9C";
    });
    $("#stepThreePopConfirm").click(function () {
        disableAllSteps();
        showStepFour();
        modal3.style.display = "none";
        window.scrollTo(0, 0);
        defaultColourForSteps();
        document.getElementById('wstep4').style.backgroundColor = "#1ABB9C";
    });
    $("#stepFourPopConfirm").click(function () {
        disableAllSteps();
        showStepFive();
        modal4.style.display = "none";
        window.scrollTo(0, 0);
        defaultColourForSteps();
        document.getElementById('wstep5').style.backgroundColor = "#1ABB9C";
    });
    $("#stepFiveNext").click(function (e) {
        disableAllSteps();
        showStepSix();
        window.scrollTo(0, 0);
        defaultColourForSteps();
        document.getElementById('wstep6').style.backgroundColor = "#1ABB9C";
        e.preventDefault();
    });
    $("#btn_summary").click(function (e) {
        disableAllSteps();
        showStepSeven();
        window.scrollTo(0, 0);
        defaultColourForSteps();
        document.getElementById('wstep7').style.backgroundColor = "#1ABB9C";
        $("#txtSumCashFolwPeriod").val(preparedBy);
        jsreportInits();
        e.preventDefault();
    });
    $("#sendForApprovalBtn").click(function (e) {
        LO.sendAllData();
        e.preventDefault();
        // disableAllSteps();
        // showStepSeven();
        // window.scrollTo(0, 0);
        // defaultColourForSteps();
        // document.getElementById('wstep7').style.backgroundColor = "#1ABB9C";
    });
    $("#stepTowprevious").click(function () {
        disableAllSteps();
        showStepOne();
        defaultColourForSteps();
        window.scrollTo(0, 0);
        document.getElementById('wstep').style.backgroundColor = "#1ABB9C";

    });
    $("#stepThreeprevious").click(function () {
        disableAllSteps();
        showStepTow();
        defaultColourForSteps();
        window.scrollTo(0, 0);
        document.getElementById('wstep2').style.backgroundColor = "#1ABB9C";
    });
    $("#stepFourprevious").click(function () {
        disableAllSteps();
        showStepThree();
        defaultColourForSteps();
        window.scrollTo(0, 0);
        document.getElementById('wstep3').style.backgroundColor = "#1ABB9C";
    });
    $("#stepFiveprevious").click(function (e) {
        disableAllSteps();
        showStepFour();
        defaultColourForSteps();
        window.scrollTo(0, 0);
        document.getElementById('wstep4').style.backgroundColor = "#1ABB9C";
        e.preventDefault();
    });
    $("#stepSixPrevious").click(function () {
        disableAllSteps();
        showStepFive();
        defaultColourForSteps();
        window.scrollTo(0, 0);
        document.getElementById('wstep5').style.backgroundColor = "#1ABB9C";
    });

    var wage = document.getElementById("txtBrokerNIC");
    wage.addEventListener("keydown", function (e) {
        if (e.keyCode === 13) {
            //checks whether the pressed key is "Enter"

            LO.get_Broker_By_Nic();

        }
    });

});

//////////////////////////////////////// LAND OVERVIEW


function cost_of_capital() {
    var w = parseFloat($("#txtProject").val());
    var x = parseFloat($("#txtCostOfCapital").val());

    var tot = w + x;
    $("#txtTotalCostOfProject2").val(parseFloat(Math.round(tot * 100) / 100).toFixed(2));

    var a = parseFloat($("#txtTotalCostOfProject2").val());
    var b = parseFloat($("#txtSellableArea").val());
    var c = a / b;
    $("#txtCostPerch2").val(parseFloat(Math.round(c * 100) / 100).toFixed(2));
}


// characters validate_characters

function validate_characters(txt) {
    if (document.getElementById(txt).value == "") {
        document.getElementById(txt).focus();
        return false;
    }
    if (!/^[a-zA-Z]*$/g.test(document.getElementById(txt).value)) {
        var x = document.getElementById(txt).value;
        document.getElementById(txt).value = x.substr(0, x.length - 1);
        document.getElementById(txt).focus();
        return false;
    }
}

function validate_numbers(txt) {
    if (document.getElementById(txt).value == "") {
        document.getElementById(txt).focus();
        return false;
    }
    if (!/[0-9]|\./.test(document.getElementById(txt).value)) {
        var x = document.getElementById(txt).value;
        document.getElementById(txt).value = x.substr(0, x.length - 1);
        document.getElementById(txt).focus();
        return false;
    }
}

////// purchasing cost
function total_of_purchasing_cost() {

    var q = parseFloat($("#txtPurPrice").val());

    if (isNaN(q)) {
        q = 0;
    }

    var w = parseFloat($("#txtPurExtracts").val());

    if (isNaN(w)) {
        w = 0;
    }

    var e = parseFloat($("#txtPurValuationFee").val());

    if (isNaN(e)) {
        e = 0;
    }

    var r = parseFloat($("#txtPurInsurance").val());

    if (isNaN(r)) {
        r = 0;
    }

    var t = parseFloat($("#txtPurReport").val());

    if (isNaN(t)) {
        t = 0;
    }

    var y = parseFloat($("#txtPurStamp").val());

    if (isNaN(y)) {
        y = 0;
    }

    var u = parseFloat($("#txtPurLegal").val());

    if (isNaN(u)) {
        u = 0;
    }

    var tot = q + w + e + r + t + y + u;
    tot = parseFloat(Math.round(tot * 100) / 100).toFixed(2);

    $("#txtPurSubTotal").val(tot);
}

function total_of_Surveying_Expenses() {

    var q = parseFloat($("#txtSurPerimeter").val());

    if (isNaN(q)) {
        q = 0;
    }

    var w = parseFloat($("#txtSurBlockingOut").val());

    if (isNaN(w)) {
        w = 0;
    }

    var e = parseFloat($("#txtSurBlockPlan").val());

    if (isNaN(e)) {
        e = 0;
    }

    var tot = q + w + e;

    $("#txtSurSESubTotal").val(parseFloat(Math.round(tot * 100) / 100).toFixed(2));
}

function total_of_Approval_Costs() {

    var q = parseFloat($("#txtAppUDA").val());

    if (isNaN(q)) {
        q = 0;
    }

    var w = parseFloat($("#txtAppNBRO").val());

    if (isNaN(w)) {
        w = 0;
    }

    var e = parseFloat($("#txtAppPerasariCharge").val());

    if (isNaN(e)) {
        e = 0;
    }

    var r = parseFloat($("#txtAppTownPlanner").val());

    if (isNaN(r)) {
        r = 0;
    }

    var tot = q + w + e + r;
    $("#txtAppSubTotal").val(parseFloat(Math.round(tot * 100) / 100).toFixed(2));
}

function total_of_Other_Expenses() {
    var r = parseFloat($("#txtBrokerCharge").val());

    if (isNaN(r)) {
        r = 0;
    }

    $("#txtOEBrokerSubTotal").val(parseFloat(Math.round(r * 100) / 100).toFixed(2));
}

function total_of_Extra_Expenses() {

    var ex1 = parseFloat($("#cost1_ex1").val());
    var ex2 = parseFloat($("#cost1_ex2").val());
    var ex3 = parseFloat($("#cost1_ex3").val());
    var ex4 = parseFloat($("#cost1_ex4").val());
    var ex5 = parseFloat($("#cost1_ex5").val());
    var ex6 = parseFloat($("#cost1_ex6").val());
    var ex7 = parseFloat($("#cost1_ex7").val());

    if (isNaN(ex1)) {
        ex1 = 0;
    }
    if (isNaN(ex2)) {
        ex2 = 0;
    }
    if (isNaN(ex3)) {
        ex3 = 0;
    }
    if (isNaN(ex4)) {
        ex4 = 0;
    }
    if (isNaN(ex5)) {
        ex5 = 0;
    }
    if (isNaN(ex6)) {
        ex6 = 0;
    }
    if (isNaN(ex7)) {
        ex7 = 0;
    }

    var tot = (ex1 + ex2) + (ex3 + ex4) + (ex5 + ex6) + ex7;

    $("#ex_sub").val(parseFloat(Math.round(tot * 100) / 100).toFixed(2));

}

////// development cost

function total_land_preperation_cost() {
    var e1 = parseFloat($("#txtToClearLand").val());
    var e2 = parseFloat($("#txtMJCB").val());
    var e3 = parseFloat($("#txtMDozer").val());
    var e4 = parseFloat($("#txtTransport").val());
    var e5 = parseFloat($("#txtDrilling").val());
    var e6 = parseFloat($("#txtLandFinishing").val());
    var e7 = parseFloat($("#txtConcretePolse").val());
    var e8 = parseFloat($("#txtWoodenPolse").val());
    var e9 = parseFloat($("#txtLabourCharges").val());
    var e10 = parseFloat($("#txtStaffWelfare").val());
    var e11 = parseFloat($("#txtLabourWelfare").val());

    if (isNaN(e1)) {
        e1 = 0;
    }
    if (isNaN(e2)) {
        e2 = 0;
    }
    if (isNaN(e3)) {
        e3 = 0;
    }
    if (isNaN(e4)) {
        e4 = 0;
    }
    if (isNaN(e5)) {
        e5 = 0;
    }
    if (isNaN(e6)) {
        e6 = 0;
    }
    if (isNaN(e7)) {
        e7 = 0;
    }
    if (isNaN(e8)) {
        e8 = 0;
    }
    if (isNaN(e9)) {
        e9 = 0;
    }
    if (isNaN(e10)) {
        e10 = 0;
    }
    if (isNaN(e11)) {
        e11 = 0;
    }

    var tot = e1 + e2 + e3 + e4 + e5 + e6 + e7 + e8 + e9 + e10 + e11;
    $("#txtLPCSubTotal").val(parseFloat(Math.round(tot * 100) / 100).toFixed(2));
}

function construction_cost() {
    var w1 = parseFloat($("#txtSideDrains").val());
    var w2 = parseFloat($("#txtCulverts").val());
    var w3 = parseFloat($("#txtConcerting").val());
    var w4 = parseFloat($("#txtTarring").val());
    var w5 = parseFloat($("#txtBarbwired").val());
    var w6 = parseFloat($("#txtParapetWall").val());
    var w7 = parseFloat($("#txtWaterProject").val());
    var w8 = parseFloat($("#txtProjectOffice").val());

    if (isNaN(w1)) {
        w1 = 0;
    }
    if (isNaN(w2)) {
        w2 = 0;
    }
    if (isNaN(w3)) {
        w3 = 0;
    }
    if (isNaN(w4)) {
        w4 = 0;
    }
    if (isNaN(w5)) {
        w5 = 0;
    }
    if (isNaN(w6)) {
        w6 = 0;
    }
    if (isNaN(w7)) {
        w7 = 0;
    }
    if (isNaN(w8)) {
        w8 = 0;
    }

    var tot = w1 + w2 + w3 + w4 + w5 + w6 + w7 + w8;
    $("#txtCCSubTotal").val(parseFloat(Math.round(tot * 100) / 100).toFixed(2));
}

function public_infrastructure_costs() {
    var w1 = parseFloat($("#txtElectricity").val());
    var w2 = parseFloat($("#txtWater").val());

    if (isNaN(w1)) {
        w1 = 0;
    }
    if (isNaN(w2)) {
        w2 = 0;
    }

    var tot = w1 + w2;
    $("#txtPISubTotal").val(parseFloat(Math.round(tot * 100) / 100).toFixed(2));
}

function traveling_expenses() {
    var w1 = parseFloat($("#txtProjectManager").val());
    var w2 = parseFloat($("#txtSeniorManager").val());
    var w3 = parseFloat($("#txtSalesManager").val());
    var w4 = parseFloat($("#txtProjectOfficer").val());

    if (isNaN(w1)) {
        w1 = 0;
    }
    if (isNaN(w2)) {
        w2 = 0;
    }
    if (isNaN(w3)) {
        w3 = 0;
    }
    if (isNaN(w4)) {
        w4 = 0;
    }

    var tot = w1 + w2 + w3 + w4;
    $("#txtTESubTotal").val(parseFloat(Math.round(tot * 100) / 100).toFixed(2));
}

function telephone_expenses() {
    var w1 = parseFloat($("#txtTProjectManager").val());
    var w2 = parseFloat($("#txtTSeniorManager").val());
    var w3 = parseFloat($("#txtTSalesManager").val());
    var w4 = parseFloat($("#txtTProjectOfficer_1").val());
    var w5 = parseFloat($("#txtTProjectOfficer_2").val());
    if (isNaN(w1)) {
        w1 = 0;
    }
    if (isNaN(w2)) {
        w2 = 0;
    }
    if (isNaN(w3)) {
        w3 = 0;
    }
    if (isNaN(w4)) {
        w4 = 0;
    }
    if (isNaN(w5)) {
        w5 = 0;
    }

    var tot = w1 + w2 + w3 + w4 + w5;
    $("#txtTELSubTotal").val(parseFloat(Math.round(tot * 100) / 100).toFixed(2));
}

function dev_other_cost() {
    var w1 = parseFloat($("#txtLandNameBoard").val());
    var w2 = parseFloat($("#txtLPCProjectMaintenence").val());
    var w3 = parseFloat($("#txtLPCEntertaintment").val());
    var w4 = parseFloat($("#txtLPCUnforseen").val());
    var w5 = parseFloat($("#txtLPCReSale").val());
    var w6 = parseFloat($("#txt_new_value").val());

    if (isNaN(w1)) {
        w1 = 0;
    }
    if (isNaN(w2)) {
        w2 = 0;
    }
    if (isNaN(w3)) {
        w3 = 0;
    }
    if (isNaN(w4)) {
        w4 = 0;
    }
    if (isNaN(w5)) {
        w5 = 0;
    }
    if (isNaN(w6)) {
        w6 = 0;
    }

    var tot = w1 + w2 + w3 + w4 + w5 + w6;

    $("#txtOESubTotal").val(parseFloat(Math.round(tot * 100) / 100).toFixed(2));

}

function dev_extra_cost() {
    var w1 = parseFloat($("#dev_other1").val());
    var w2 = parseFloat($("#dev_other2").val());
    var w3 = parseFloat($("#dev_other3").val());
    var w4 = parseFloat($("#dev_other4").val());
    var w5 = parseFloat($("#dev_other5").val());
    var w6 = parseFloat($("#dev_other6").val());

    if (isNaN(w1)) {
        w1 = 0;
    }
    if (isNaN(w2)) {
        w2 = 0;
    }
    if (isNaN(w3)) {
        w3 = 0;
    }
    if (isNaN(w4)) {
        w4 = 0;
    }
    if (isNaN(w5)) {
        w5 = 0;
    }
    if (isNaN(w6)) {
        w6 = 0;
    }

    var tot = w1 + w2 + w3 + w4 + w5 + w6;
    $("#devEx").val(parseFloat(Math.round(tot * 100) / 100).toFixed(2));
}

/// media expenses

function media_expenses() {
    var w1 = parseFloat($("#txtMERecordingRadio").val());
    var w2 = parseFloat($("#txtMEBroadcastingRadio").val());
    var w3 = parseFloat($("#txtMEPress").val());
    var w4 = parseFloat($("#txtMEAdvertistment").val());
    var w5 = parseFloat($("#txtMETv").val());
    var w6 = parseFloat($("#txtMERecordingTv").val());
    var w7 = parseFloat($("#txtMETelecasting").val());
    var w8 = parseFloat($("#txtMEInternet").val());

    if (isNaN(w1)) {
        w1 = 0;
    }
    if (isNaN(w2)) {
        w2 = 0;
    }
    if (isNaN(w3)) {
        w3 = 0;
    }
    if (isNaN(w4)) {
        w4 = 0;
    }
    if (isNaN(w5)) {
        w5 = 0;
    }
    if (isNaN(w6)) {
        w6 = 0;
    }
    if (isNaN(w7)) {
        w7 = 0;
    }
    if (isNaN(w8)) {
        w8 = 0;
    }

    var tot = w1 + w2 + w3 + w4 + w5 + w6 + w7 + w8;
    $("#txt_media_expenses_SubTotal").val(parseFloat(Math.round(tot * 100) / 100).toFixed(2));
}

function banner_expenses() {
    var w1 = parseFloat($("#txtMEBannerArtwork").val());
    var w2 = parseFloat($("#txtMEBannerPrinting").val());
    var w3 = parseFloat($("#txtMEBannerApproval").val());
    var w4 = parseFloat($("#txtMEBannerHoarding").val());
    var w5 = parseFloat($("#txtMEBannerPPBords").val());
    var w6 = parseFloat($("#txtMEBannerPosters").val());
    var w7 = parseFloat($("#txtMEBannerSticker").val());
    var w8 = parseFloat($("#txtMEBannerDayCards").val());
    var w9 = parseFloat($("#txtMEBannerBlockNo").val());

    if (isNaN(w1)) {
        w1 = 0;
    }
    if (isNaN(w2)) {
        w2 = 0;
    }
    if (isNaN(w3)) {
        w3 = 0;
    }
    if (isNaN(w4)) {
        w4 = 0;
    }
    if (isNaN(w5)) {
        w5 = 0;
    }
    if (isNaN(w6)) {
        w6 = 0;
    }
    if (isNaN(w7)) {
        w7 = 0;
    }
    if (isNaN(w8)) {
        w8 = 0;
    }
    if (isNaN(w9)) {
        w9 = 0;
    }

    var tot = w1 + w2 + w3 + w4 + w5 + w6 + w7 + w8 + w9;
    $("#txtMEBSubTotal").val(parseFloat(Math.round(tot * 100) / 100).toFixed(2));
}

function mobile_unit_expenses() {
    var w1 = parseFloat($("#txtMEMobileUnitExpenses").val());
    var w2 = parseFloat($("#txtMEMobileRecordings").val());
    var w3 = parseFloat($("#txtMEMobileProduction").val());
    var w4 = parseFloat($("#txtMEMobileOperation").val());
    var w5 = parseFloat($("#txtMEMobileSafari").val());

    if (isNaN(w1)) {
        w1 = 0;
    }
    if (isNaN(w2)) {
        w2 = 0;
    }
    if (isNaN(w3)) {
        w3 = 0;
    }
    if (isNaN(w4)) {
        w4 = 0;
    }
    if (isNaN(w5)) {
        w5 = 0;
    }

    var tot = w1 + w2 + w3 + w4 + w5;
    $("#txtPICSubTotal").val(parseFloat(Math.round(tot * 100) / 100).toFixed(2));
}

function leaflets_expenses() {
    var w1 = parseFloat($("#txtMELeafletArtwork").val());
    var w2 = parseFloat($("#txtLeafletPrinting").val());
    var w3 = parseFloat($("#txtLeafletDistribution").val());

    if (isNaN(w1)) {
        w1 = 0;
    }
    if (isNaN(w2)) {
        w2 = 0;
    }
    if (isNaN(w3)) {
        w3 = 0;
    }

    var tot = w1 + w2 + w3;
    $("#txtMELeafletSubTotal").val(parseFloat(Math.round(tot * 100) / 100).toFixed(2));
}

function media_other_ex() {
    var w1 = parseFloat($("#txtMESaleInitiationEx").val());
    var w2 = parseFloat($("#txtMEUnforseenExpenses").val());
    var w3 = parseFloat($("#txtMEGeneralAdvertising").val());

    if (isNaN(w1)) {
        w1 = 0;
    }
    if (isNaN(w2)) {
        w2 = 0;
    }
    if (isNaN(w3)) {
        w3 = 0;
    }

    var tot = w1 + w2 + w3;
    $("#txtMEOSubTotal").val(parseFloat(Math.round(tot * 100) / 100).toFixed(2));
}

function media_extra_ex() {
    var w1 = parseFloat($("#txtme2").val());
    var w2 = parseFloat($("#txtme3").val());
    var w3 = parseFloat($("#txtme4").val());
    var w4 = parseFloat($("#txtme5").val());
    var w5 = parseFloat($("#txtme6").val());
    var w6 = parseFloat($("#txtme1").val());

    if (isNaN(w1)) {
        w1 = 0;
    }
    if (isNaN(w2)) {
        w2 = 0;
    }
    if (isNaN(w3)) {
        w3 = 0;
    }
    if (isNaN(w4)) {
        w4 = 0;
    }
    if (isNaN(w5)) {
        w5 = 0;
    }
    if (isNaN(w6)) {
        w6 = 0;
    }
    var tot = w1 + w2 + w3 + w4 + w5 + w6;
    $("#txtMESubTotal").val(parseFloat(Math.round(tot * 100) / 100).toFixed());
}

//// resale expenses
function resale01() {
    var w1 = parseFloat($("#txtRCBanners").val());
    var w2 = parseFloat($("#txtRCBannersApproval").val());
    var w3 = parseFloat($("#txtRCBannerHangging").val());
    var w4 = parseFloat($("#txtRCLeafletPrinting").val());
    var w5 = parseFloat($("#txtRCLeafletDistribution").val());
    var w6 = parseFloat($("#txtRCPaperAdvertisement").val());
    var w7 = parseFloat($("#txtSellableArea").val());

    if (isNaN(w1)) {
        w1 = 0;
    }
    if (isNaN(w2)) {
        w2 = 0;
    }
    if (isNaN(w3)) {
        w3 = 0;
    }
    if (isNaN(w4)) {
        w4 = 0;
    }
    if (isNaN(w5)) {
        w5 = 0;
    }
    if (isNaN(w6)) {
        w6 = 0;
    }

    var tot = w1 + w2 + w3 + w4 + w5 + w6;

    var x = tot / w7;
    $("#txtRCSubtotal").val(parseFloat(Math.round(tot * 100) / 100).toFixed(2));
    $("#txtResaleExpenses").val(parseFloat(Math.round(tot * 100) / 100).toFixed(2));
    $("#txtResaleCostPerch").val(parseFloat(Math.round(x * 100) / 100).toFixed(2));
}

function resale02() {
    var w1 = parseFloat($("#txtRC2Banners").val());
    var w2 = parseFloat($("#txtRC2BannersApproval").val());
    var w3 = parseFloat($("#txtRC2BannerHangging").val());
    var w4 = parseFloat($("#txtRC2LeafletPrinting").val());
    var w5 = parseFloat($("#txtRC2LeafletDistribution").val());
    var w6 = parseFloat($("#txtRC2PaperAdvertisement").val());
    var w7 = parseFloat($("#txtSellableArea").val());

    if (isNaN(w1)) {
        w1 = 0;
    }
    if (isNaN(w2)) {
        w2 = 0;
    }
    if (isNaN(w3)) {
        w3 = 0;
    }
    if (isNaN(w4)) {
        w4 = 0;
    }
    if (isNaN(w5)) {
        w5 = 0;
    }
    if (isNaN(w6)) {
        w6 = 0;
    }

    var tot = w1 + w2 + w3 + w4 + w5 + w6;
    var x = tot / w7;
    $("#txtRC2Subtotal").val(parseFloat(Math.round(tot * 100) / 100).toFixed(2));
    $("#txtResale02Expenses").val(parseFloat(Math.round(tot * 100) / 100).toFixed(2));
    $("#txtResale02CostPerch").val(parseFloat(Math.round(x * 100) / 100).toFixed(2));
}

function resale_extra() {
    var w1 = parseFloat($("#reex1").val());
    var w2 = parseFloat($("#reex2").val());
    var w3 = parseFloat($("#reex3").val());
    var w4 = parseFloat($("#reex4").val());
    var w5 = parseFloat($("#reex5").val());
    var w6 = parseFloat($("#reex6").val());
    var w7 = parseFloat($("#txtSellableArea").val());

    if (isNaN(w1)) {
        w1 = 0;
    }
    if (isNaN(w2)) {
        w2 = 0;
    }
    if (isNaN(w3)) {
        w3 = 0;
    }
    if (isNaN(w4)) {
        w4 = 0;
    }
    if (isNaN(w5)) {
        w5 = 0;
    }
    if (isNaN(w6)) {
        w6 = 0;
    }

    var tot = w1 + w2 + w3 + w4 + w5 + w6;
    var x = tot / w7;
    $("#resale_ex").val(parseFloat(Math.round(tot * 100) / 100).toFixed(2));
    $("#txtResaleOtherExpenses").val(parseFloat(Math.round(tot * 100) / 100).toFixed(2));
    $("#txtResaleOtherCosts").val(parseFloat(Math.round(x * 100) / 100).toFixed(2));

    var sub1 = parseFloat($("#txtPurSubTotal").val());
    var sub2 = parseFloat($("#txtSurSESubTotal").val());
    var sub3 = parseFloat($("#txtAppSubTotal").val());
    var sub4 = parseFloat($("#txtOEBrokerSubTotal").val());
    var sub5 = parseFloat($("#ex_sub").val());

    var sub6 = parseFloat($("#txtLPCSubTotal").val());
    var sub7 = parseFloat($("#txtCCSubTotal").val());
    var sub8 = parseFloat($("#txtPISubTotal").val());
    var sub9 = parseFloat($("#txtTESubTotal").val());
    var sub10 = parseFloat($("#txtTELSubTotal").val());
    var sub11 = parseFloat($("#txtOESubTotal").val());
    var sub12 = parseFloat($("#devEx").val());

    var sub13 = parseFloat($("#txt_media_expenses_SubTotal").val());
    var sub14 = parseFloat($("#txtMEBSubTotal").val());
    var sub15 = parseFloat($("#txtPICSubTotal").val());
    var sub16 = parseFloat($("#txtMELeafletSubTotal").val());
    var sub17 = parseFloat($("#txtMEOSubTotal").val());
    var sub18 = parseFloat($("#txtMESubTotal").val());

    var sub19 = parseFloat($("#txtRCSubtotal").val());
    var sub20 = parseFloat($("#txtRC2Subtotal").val());
    var sub21 = parseFloat($("#resale_ex").val());

    var tot = sub1 + sub2 + sub3 + sub4 + sub5 + sub6 + sub7 + sub8 + sub9 + sub10 + sub11 + sub12 + sub13 + sub14 + sub15 + sub16 + sub17 + sub18 + sub19 + sub20 + sub21;

    $("#txtProject").val(parseFloat(Math.round(tot * 100) / 100).toFixed(2));

}

///////////////// auto
function total_in_purchase() {
    var A = parseFloat($("#txtA").val());
    var R = parseFloat($("#txtR").val());
    var P = parseFloat($("#txtP").val());
    if (isNaN(A)) {
        A = 0.0
    }
    if (isNaN(R)) {
        R = 0.0
    }
    if (isNaN(P)) {
        P = 0.0
    }

    A = A * 160;
    R = R * 40;
    $("#txtTotalInPurchase").val(parseFloat(Math.round((A + R + P) * 100) / 100).toFixed(2));
}

function sellable_area() {

    var total = $("#txtTotalInPurchase").val();
    var road = $("#txtRoadways").val();
    var reservation = $("#txtReservation").val();
    if (isNaN(total)) {
        total = 0.0
    }
    if (isNaN(road)) {
        road = 0.0
    }
    if (isNaN(reservation)) {
        reservation = 0.0
    }

    var x = total - road - reservation;

    $("#txtSellableArea").val(parseFloat(Math.round(x * 100) / 100).toFixed(2));
}

function price_commision() {
    var x = parseFloat($("#txtBrokerCommission").val());
    var y = parseFloat($("#txtNegotiatedPrice").val());
    if (isNaN(x)) {
        x = 0;
    }
    if (isNaN(y)) {
        y = 0;
    }
    var z = parseFloat(x + y);
    $("#txtPriceAndCommission").val(parseFloat(Math.round(z * 100) / 100).toFixed(2));
}

function total_costs() {

    var sub1 = parseFloat($("#txtPurSubTotal").val());
    var sub2 = parseFloat($("#txtSurSESubTotal").val());
    var sub3 = parseFloat($("#txtAppSubTotal").val());
    var sub4 = parseFloat($("#txtOEBrokerSubTotal").val());
    var sub5 = parseFloat($("#ex_sub").val());

    var sub6 = parseFloat($("#txtLPCSubTotal").val());
    var sub7 = parseFloat($("#txtCCSubTotal").val());
    var sub8 = parseFloat($("#txtPISubTotal").val());
    var sub9 = parseFloat($("#txtTESubTotal").val());
    var sub10 = parseFloat($("#txtTELSubTotal").val());
    var sub11 = parseFloat($("#txtOESubTotal").val());
    var sub12 = parseFloat($("#devEx").val());

    var sub13 = parseFloat($("#txt_media_expenses_SubTotal").val());
    var sub14 = parseFloat($("#txtMEBSubTotal").val());
    var sub15 = parseFloat($("#txtPICSubTotal").val());
    var sub16 = parseFloat($("#txtMELeafletSubTotal").val());
    var sub17 = parseFloat($("#txtMEOSubTotal").val());
    var sub18 = parseFloat($("#txtMESubTotal").val());

    var sub19 = parseFloat($("#txtRCSubtotal").val());
    var sub20 = parseFloat($("#txtRC2Subtotal").val());
    var sub21 = parseFloat($("#resale_ex").val());

    var tot = sub1 + sub2 + sub3 + sub4 + sub5 + sub6 + sub7 + sub8 + sub9 + sub10 + sub11 + sub12 + sub13 + sub14 + sub15 + sub16 + sub17 + sub18 + sub19 + sub20 + sub21;

    $("#txtSPTotalCost").val(parseFloat(Math.round(tot * 100) / 100).toFixed(2));


}

function net_proceed() {
    var tot_sale = parseFloat(parseFloat(Math.round($("#txtSPTotalSale").val() * 100) / 100).toFixed(2));
    var tax = parseFloat(parseFloat(Math.round($("#txtSPTax").val() * 100) / 100).toFixed(2));
    var net = tot_sale - tax;
    $("#txtSPNetProceeds").val(parseFloat(Math.round(net * 100) / 100).toFixed(2));
}

function total_sales() {

    var tab = document.getElementById('sales_tbl');
    var l = tab.rows.length;

    var s = '';
    var tot = 0;
    for (var i = 1; i < l; i++) {
        var tr = tab.rows[i];

        var cll = tr.cells[2];
        s = cll.innerText;
        s = parseFloat(s);
        tot = parseFloat(s + tot);

    }


    $("#txtSPTotalSale").val(parseFloat(Math.round(tot * 100) / 100).toFixed(2));

}

function gross_profit() {
    var net = parseFloat($("#txtSPNetProceeds").val());
    var tot = parseFloat($("#txtSPTotalCost").val());

    var gross = net - tot;
    $("#txtSPGrossProfit").val(parseFloat(Math.round(gross * 100) / 100).toFixed(2));

}

function net_profit() {
    var gross = parseFloat($("#txtSPGrossProfit").val());
    var insent = parseFloat($("#txtSPIncentives").val());

    var net_profit = gross - insent;
    $("#txtSPNetProfit").val(parseFloat(Math.round(net_profit * 100) / 100).toFixed(2));

    var totcost = $("#txtSPTotalCost").val();
    var roi = net_profit / totcost;
    $("#txtSPROI").val(parseFloat(Math.round(roi * 100) / 100).toFixed(2));

    var sales = $("#txtSPTotalSale").val();
    var ratio = net_profit / sales;
    $("#txtSPProfitRatio").val(parseFloat(Math.round(ratio * 100) / 100).toFixed(2))
}


function add_row_profit_table() {

    var extent = parseFloat($("#txtSPExtent").val());
    var price = parseFloat($("#txtSPPrice").val());
    var sub = price * extent;
    sub = parseFloat(Math.round(sub * 100) / 100).toFixed(2);
    $('#sales_tbl').append('<tr>\n\
                               <td>' + extent + '</td>\n\
                               <td style="align-content: right;">' + "    " + price + '</td>\n\
                               <td>' + sub + '</td>\n\
                               <td><i class="glyphicon glyphicon-remove" style="color: red"></i></td>\n\
                               </tr>');
}

function add_more_txt_6() {
    var ex_6_1_4 = $('#ex_6_1_4').is(':hidden');
    var ex_6_1_5 = $('#ex_6_1_5').is(':hidden');
    var ex_6_1_6 = $('#ex_6_1_6').is(':hidden');

    if (ex_6_1_4 === true) {
        $("#ex_6_1_4").removeAttr("hidden");
    } else if (ex_6_1_5 === true) {
        $("#ex_6_1_5").removeAttr("hidden");
    } else if (ex_6_1_6 === true) {
        $("#ex_6_1_6").removeAttr("hidden");
    }
}

function add_more_txt_1_5() {
    var ex_1_5_4 = $('#ex_1_5_4').is(':hidden');
    var ex_1_5_5 = $('#ex_1_5_5').is(':hidden');
    var ex_1_5_6 = $('#ex_1_5_6').is(':hidden');

    if (ex_1_5_4 === true) {
        $("#ex_1_5_4").removeAttr("hidden");
    } else if (ex_1_5_5 === true) {
        $("#ex_1_5_5").removeAttr("hidden");
    } else if (ex_1_5_6 === true) {
        $("#ex_1_5_6").removeAttr("hidden");
    }
}

function add_more_txt_2_7() {
    var ex_2_7_3 = $('#ex_2_7_3').is(':hidden');
    var ex_2_7_4 = $('#ex_2_7_4').is(':hidden');
    var ex_2_7_5 = $('#ex_2_7_5').is(':hidden');

    if (ex_2_7_3 === true) {
        $("#ex_2_7_3").removeAttr("hidden");
    } else if (ex_2_7_4 === true) {
        $("#ex_2_7_4").removeAttr("hidden");
    } else if (ex_2_7_5 === true) {
        $("#ex_2_7_5").removeAttr("hidden");
    }
}

function add_more_txt_3_6() {
    var ex_3_6_4 = $('#ex_3_6_4').is(':hidden');
    var ex_3_6_5 = $('#ex_3_6_5').is(':hidden');
    var ex_3_6_6 = $('#ex_3_6_6').is(':hidden');

    if (ex_3_6_4 === true) {
        $("#ex_3_6_4").removeAttr("hidden");
    } else if (ex_3_6_5 === true) {
        $("#ex_3_6_5").removeAttr("hidden");
    } else if (ex_3_6_6 === true) {
        $("#ex_3_6_6").removeAttr("hidden");
    }
}

var LO = {

        sendAllData: function () {
            LO.collect_purchasing_cost();
            LO.land_preperation_cost();
            LO.media_cost();
            LO.resale_cost();
            LO.add_Land_details();
        },
        get_Broker_By_Nic: function () {

            var nic = $("#txtBrokerNIC").val();
            if (nic.length === 10) {
                $.ajax({
                    url: "broker/request/broker/by/nic?broker_nic=" + nic,
                    dataType: 'json',
                    contentType: "application/json",
                    type: 'GET',
                    success: function (data, textStatus, jqXHR) {
                        if (data.broker_nic === "no data") {
                            toastr.info(' NIC not in the broker list..' + "\n" + "  this broker will added as a new broker.", 'New Broker Found !');
                        }
                        $("#txtBrokerName").val(data.broker_name);
                        $("#txtBrokerAddress").val(data.broker_address);
                        $("#txtBrokerContact").val(data.broker_contact);
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                        toastr.error('something went wrong!', 'WARNING !');
                    },

                });
            }
        },
        get_Vendor_By_Nic: function () {

            var nic = $("#txtOwnerNIC").val();
            if (nic.length === 10) {
                $.ajax({
                    url: "vendor/request/vendor/by/nic?vendor_nic=" + nic,
                    dataType: 'json',
                    contentType: "application/json",
                    type: 'GET',
                    success: function (data, textStatus, jqXHR) {
                        if (data.vendor_nic === "no data") {
                            toastr.info(' NIC not in the vendor list..' + "\n" + "  this land owner will be added as a new vendor.", 'New Vendor Found !');
                        }
                        $("#txtOwnerName").val(data.vendor_name);
                        $("#txtOwnerContact").val(data.vendor_contact);
                        $("#txtOwnerAddress").val(data.vendor_address);
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                        toastr.error('something went wrong!', 'WARNING !');
                    },

                });
            }
        },
        load_area: function () {
            $('#area')
                .find('option')
                .remove()
                .end()
                .append('<option value="">Select Area</option>')
                .val('Select Area')
            ;
            $.ajax({
                url: "all/locations",
                dataType: 'json',
                contentType: "application/json",
                type: 'GET',
                success: function (data, textStatus, jqXHR) {
                    var options = '';
                    for (var i = 0; i < data.length; i++) {

                        $('#area').append($('<option>', {
                            value: data[i].name,
                            text: data[i].name
                        }));
                    }


                },
                error: function (jqXHR, textStatus, errorThrown) {
                    toastr.error('there is a trouble with loading areas !', 'Request Failed !');
                },
                beforeSend: function (xhr) {

                }
            });
        },
        loadForeignTable: function () {
            $('#tbl_foreign_proj tbody tr').remove();
            $('#tbl-foreign-project-other tbody tr').remove();
            var area = $("select#area option").filter(":selected").val();
            $.ajax({
                url: "all/forign/projects",
                dataType: 'json',
                contentType: "application/json",
                type: 'POST',
                data: area,
                success: function (data, textStatus, jqXHR) {

                    if (data.salesName === null) {
                        $('#tbl_foreign_proj').append('<tr>\n\
                               <td colspan=8><p align="center">Areawise projects are not found in database\n\
                               </p></td>\n\
                               </tr>');
                        $('#tbl-foreign-project-other').append('<tr>\n\
                               <td colspan=8><p align="center">Areawise projects are not found in database\n\
                               </p></td>\n\
                               </tr>');
                    } else {
                        for (var i = 0; i < data.length; i++) {

                            $('#tbl_foreign_proj').append('<tr>\n\
                                    <td>' + (i + 1) + '</td>\n\
                                    <td>' + data[i].developer + '</td>\n\
                                    <td>' + data[i].projectName + '</td>\n\
                                    <td>' + data[i].commencedDate + '</td>\n\
                                    <td>' + data[i].totalLots + '</td>\n\
                                    <td>' + data[i].unsoldLots + '</td>\n\
                                    <td>' + data[i].remarks + '</td>\n\
                                    <td>' + data[i].area + '</td>\n\
                                    </tr>');

                            $('#tbl-foreign-project-other').append('<tr>\n\
                                    <td>' + (i + 1) + '</td>\n\
                                    <td>' + data[i].developer + '</td>\n\
                                    <td>' + data[i].projectName + '</td>\n\
                                    <td>' + data[i].commencedDate + '</td>\n\
                                    <td>' + data[i].totalLots + '</td>\n\
                                    <td>' + data[i].unsoldLots + '</td>\n\
                                    <td>' + data[i].remarks + '</td>\n\
                                    </tr>');
                        }
                    }

                },
                error: function (jqXHR, textStatus, errorThrown) {

                },
                beforeSend: function (xhr) {

                }
            });

        },
        loadLocalTable: function () {

            $('#tbl_local_project tbody tr').remove();
            $('#tbl-local-project-other tbody tr').remove();
            var area = $("select#area option").filter(":selected").val();
            $.ajax({
                url: "all/local/projects",
                dataType: 'json',
                contentType: "application/json",
                type: 'POST',
                data: area,
                success: function (data, textStatus, jqXHR) {

                    if (data.salesName === null) {
                        $('#tbl_local_project').append('<tr>\n\
                               <td colspan=5><p align="center">Local Projects are not found in database\n\
                               </p></td>\n\
                               </tr>');
                        $('#tbl-local-project-other').append('<tr>\n\
                               <td colspan=5><p align="center">Local Projects are not found in database\n\
                               </p></td>\n\
                               </tr>');
                    } else {
                        var cid = null;
                        for (var i = 0; i < data.length; i++) {

                            if (data[i].projectID < 10) {
                                cid = "00" + data[i].projectID;
                            }
                            else if (data[i].projectID < 100 && data[i].projectID > 10) {
                                cid = "0" + data[i].projectID;
                            }
                            else {
                                cid = data[i].projectID;
                            }

                            var tot = data[i].totalLots;
                            var saled = data[i].soldLots;
                            var unsaled = tot - saled;

                            $('#tbl_local_project').append('<tr>\n\
                                    <td>' + (i + 1) + '</td>\n\
                                    <td>' + data[i].salesName + '</td>\n\
                                    <td>' + data[i].startDate + '</td>\n\
                                    <td>' + data[i].totalLots + '</td>\n\
                                    <td>' + unsaled + '</td>\n\
                                    </tr>');

                            $('#tbl-local-project-other').append('<tr>\n\
                                    <td>' + (i + 1) + '</td>\n\
                                    <td>' + data[i].salesName + '</td>\n\
                                    <td>' + data[i].startDate + '</td>\n\
                                    <td>' + data[i].totalLots + '</td>\n\
                                    <td>' + unsaled + '</td>\n\
                                    </tr>');
                        }
                    }

                },
                error: function (jqXHR, textStatus, errorThrown) {

                },
                beforeSend: function (xhr) {

                }
            });
        },
        remove_other_document: function (o) {
            var p = o.parentNode.parentNode;
            p.parentNode.removeChild(p);

        },

        add_Land_details: function () {

            //ok
            var data = {};
            data["id"] = landID;
            data["land_name"] = $('#txtLandName').val();
            data["land_area"] = document.getElementById("area").value;
            data["local_authority"] = $('#txtLocalAuthorityArea').val();
            data["authority"] = $('#txtLocalAuthority').val();
            data["land_location_details"] = $('#txtLocation').val();
            data["land_total_extent_A"] = $('#txtA').val();
            data["land_total_extent_R"] = $('#txtR').val();
            data["land_total_extent_P"] = $('#txtP').val();
            data["land_total_in_purchase"] = $('#txtTotalInPurchase').val();
            data["land_road_ways"] = $('#txtRoadways').val();
            data["land_reservation"] = $('#txtReservation').val();
            data["land_sellable_area"] = $('#txtSellableArea').val();
            data["land_original_price"] = $('#txtOriginalPrice').val();
            data["land_nigotiated_price"] = $('#txtNegotiatedPrice').val();
            data["land_total_price"] = $('#txtPriceAndCommission').val();
            data["land_broker_commision"] = $('#txtBrokerCommission').val();
            data["land_broker_remarks"] = $('#txtBrokerRemarks').val();
            data["reject"] = reject;
            data["projectOfficerApproval"] = ProjectOfficerApproval;
            data["branchManagerApproval"] = BranchManagerApproval;
            data["headOfficeApproval"] = HeadOfficeApproval;
            data["preparedBy"] = "dhanushka";

            var data2 = {};
            data2["broker_name"] = $('#txtBrokerName').val();
            data2["broker_address"] = $('#txtBrokerAddress').val();
            data2["broker_commission"] = $('#txtBrokerCommission').val();
            data2["broker_contact"] = $('#txtBrokerContact').val();
            data2["broker_remarks"] = $('#txtBrokerRemarks').val();
            data2["broker_nic"] = $('#txtBrokerNIC').val();


            var g = {};
            if ($('#check_local_visiting').is(':checked')) {
                g["local_visiting"] = true;
                $("#d01").prop("checked", true);
            } else {
                g["local_visiting"] = false;
                $("#d01").prop("checked", false);
            }

            if ($('#check_approval_tea').is(':checked')) {
                g["approval_tea"] = true;
                $("#d02").prop("checked", true);
            } else {
                g["approval_tea"] = false;
                $("#d02").prop("checked", false);
            }

            if ($('#check_approval_rubber').is(':checked')) {
                g["approval_rubber"] = true;
                $("#d03").prop("checked", true);
            } else {
                g["approval_rubber"] = false;
                $("#d03").prop("checked", false);
            }

            if ($('#check_approval_coconut').is(':checked')) {
                g["approval_coconut"] = true;
                $("#d04").prop("checked", true);
            } else {
                g["approval_coconut"] = false;
                $("#d04").prop("checked", false);
            }

            if ($('#check_street_line').is(':checked')) {
                g["street_line"] = true;
                $("#d05").prop("checked", true);
            } else {
                g["street_line"] = false;
                $("#d05").prop("checked", false);
            }

            if ($('#check_title_report').is(':checked')) {
                g["title_report"] = true;
                $("#d06").prop("checked", true);
            } else {
                g["title_report"] = false;
                $("#d06").prop("checked", false);
            }

            if ($('#check_perimeter_plan').is(':checked')) {
                g["perimeter_plan"] = true;
                $("#d07").prop("checked", true);
            } else {
                g["perimeter_plan"] = false;
                $("#d07").prop("checked", false);
            }

            if ($('#check_NBRO').is(':checked')) {
                g["nbro"] = true;
                $("#d08").prop("checked", true);
            } else {
                g["nbro"] = false;
                $("#d08").prop("checked", false);
            }

            if ($('#check_UDA').is(':checked')) {
                g["uda"] = true;
                $("#d09").prop("checked", true);
            } else {
                g["uda"] = false;
                $("#d09").prop("checked", false);
            }

            if ($('#check_enviromental').is(':checked')) {
                g["enviromental"] = true;
                $("#d10").prop("checked", true);
            } else {
                g["enviromental"] = false;
                $("#d10").prop("checked", false);
            }

            if ($('#check_muncipal').is(':checked')) {
                g["muncipal"] = true;
                $("#d11").prop("checked", true);
            } else {
                g["muncipal"] = false;
                $("#d11").prop("checked", false);
            }

            if ($('#check_pradeshiya_sabha').is(':checked')) {
                g["pradeshiya_sabha"] = true;
                $("#d12").prop("checked", true);
            } else {
                g["pradeshiya_sabha"] = false;
                $("#d12").prop("checked", false);
            }
            var doc = JSON.stringify(g);

            // other doc
            var doc_name = [];
            var name = {};
            for (var p = 0; p < other.length; p++) {
                console.log(other[p]);
                doc_name.push(name["doc_name"] = other[p]);
            }
            var otherDoc = JSON.stringify(doc_name);

            // purchasing cost
            var t = {};
            // 1.1 purchasing cost
            t["price"] = $.session.get("1.1.1_price");
            t["extract"] = $.session.get("1.1.2_extracts");
            t["valuation"] = $.session.get("1.1.3_valuation");
            t["titleInsurance"] = $.session.get("1.1.4_title_Insurance");
            t["titleReport"] = $.session.get("1.1.5_title_Report");
            t["stampFees"] = $.session.get("1.1.6_stamp_fees");
            t["leagleFees"] = $.session.get("1.1.7_legle_fees");

            // 1.2 surveying expenses
            t["perimeter"] = $.session.get("1.2.1_perimeter");
            t["blockingOut"] = $.session.get("1.2.2_blocking_out");
            t["blockPlan"] = $.session.get("1.2.3_block_Plan");

            //1.3 approval cost
            t["uda"] = $.session.get("1.3.1_UDA");
            t["nbro"] = $.session.get("1.3.2_NBRO");
            t["perasariCharges"] = $.session.get("1.3.3_perasari_charges");
            t["townPlanner"] = $.session.get("1.3.4_town_planer");

            // 1.4 other expenses
            t["brokerCharge"] = $.session.get("1.4.1_Broker_charge");
            var purchasing = JSON.stringify(t);


            // land preperation
            var q = {};
            // 2.1 land preperation cost
            q["cleaning_land"] = $.session.get("2.1.1_cleaning");
            q["machinery_JCB"] = $.session.get("2.1.2_jcb");
            q["machinery_Dozer"] = $.session.get("2.1.3_dozer");
            q["transport_Tipper"] = $.session.get("2.1.4_transport");
            q["drilling"] = $.session.get("2.1.5_drilling");
            q["land_finishing"] = $.session.get("2.1.6_finishing_the_land");
            q["purchasing_concrete_poles"] = $.session.get("2.1.7_concrete_poles");
            q["purchasing_wooden_poles"] = $.session.get("2.1.8_wooden_poles");
            q["labour_charges"] = $.session.get("2.1.9_labour_charges");
            q["staff_welfare"] = $.session.get("2.1.10_staff_welfare");
            q["labour_welfare"] = $.session.get("2.1.11_labour_welfare");

            // 2.2 construction expenses
            q["side_drains"] = $.session.get("2.2.1_side_drains");
            q["culverts"] = $.session.get("2.2.2_culverts");
            q["concerting"] = $.session.get("2.2.3_concerting");
            q["tarring"] = $.session.get("2.2.4_tarring");
            q["barbwired_fench"] = $.session.get("2.2.5_barbwired");
            q["parapet_wall"] = $.session.get("2.2.6_parapet");
            q["water_project"] = $.session.get("2.2.7_water");
            q["project_office"] = $.session.get("2.2.8_project_office");


            //2.3 public infrastructure cost
            q["main_electricity"] = $.session.get("2.3.1_main_electricity");
            q["main_water_supply"] = $.session.get("2.3.2_main_water_supply");

            // 2.4 traveling expenses
            q["project_manager"] = $.session.get("2.4.1_project_manager");
            q["senior_manager"] = $.session.get("2.4.2_senior_manager");
            q["sales_manager"] = $.session.get("2.4.3_sales_manager");
            q["project_officer_1"] = $.session.get("2.4.4_project_officer1");

            // 2.5 Telephone Expenses
            q["project_manager_tel"] = $.session.get("2.5.1_project_manager");
            q["senior_manager_tel"] = $.session.get("2.5.2_senior_manager");
            q["sales_manager_tel"] = $.session.get("2.5.3_sales_manager");
            q["project_officer_1_tel"] = $.session.get("2.5.4_project_officer1");
            q["project_officer_2_tel"] = $.session.get("2.5.5_project_officer2");

            // 2.6 Other Expenses
            q["land_name_board"] = $.session.get("2.6.1_land_name_bord");
            q["project_maintenance"] = $.session.get("2.6.2_project_maintenance");
            q["entertainment"] = $.session.get("2.6.3_entertainment");
            q["unforseen"] = $.session.get("2.6.4_unforseen");
            q["resale"] = $.session.get("2.6.5_resale");
            // get extra OE value here....( if it exist.)
            q["new_name"] = $.session.get("2.6.6_new_name");
            q["new_price"] = $.session.get("2.6.6_new_value");
            var landPreperation = JSON.stringify(q);

            // advertiing

            var w = {};
            // 3.1 media expenses
            w["recording_radio"] = $.session.get("3.1.1_recording_radio");
            w["broadcasting_radio"] = $.session.get("3.1.2_broadcasting_radio");
            w["artwork_press"] = $.session.get("3.1.3_artwork_press");
            w["paper_advertisment"] = $.session.get("3.1.4_paper_advertisment");
            w["artwork_tv"] = $.session.get("3.1.5_artwork_tv");
            w["recording_tv"] = $.session.get("3.1.6_recording_tv");
            w["telecasting_tv"] = $.session.get("3.1.7_telecasting_tv");
            w["internet"] = $.session.get("3.1.8_internet");

            // 3.2 banner expenses
            w["banner_artwork"] = $.session.get("3.2.1_artwork");
            w["banner_printing"] = $.session.get("3.2.2_printing");
            w["banner_approval"] = $.session.get("3.2.3_approval_and_hanging");
            w["banner_hoardings"] = $.session.get("3.2.4_hoardings");
            w["banner_pp_boards"] = $.session.get("3.2.5_pp_boards");
            w["banner_posters"] = $.session.get("3.2.6_poster");
            w["banner_stickers"] = $.session.get("3.2.7_stickers");
            w["banner_day_cards"] = $.session.get("3.2.8_day_cards");
            w["banner_facility_bord"] = $.session.get("3.2.9_facility_board");


            //3.3 mobile unit expenses
            w["mobile_artwork"] = $.session.get("3.3.1_artwork");
            w["mobile_recording"] = $.session.get("3.3.2_recording");
            w["mobile_production"] = $.session.get("3.3.3_production");
            w["mobile_operation_expenses"] = $.session.get("3.3.4_operation_expenses");
            w["mobile_safari_vehicles"] = $.session.get("3.3.5_safari_expenses");


            // 3.4 leaflet expenses
            w["leaflet_artwork"] = $.session.get("3.4.1_artwork");
            w["leaflet_printing"] = $.session.get("3.4.2_printing");
            w["leaflet_distribution"] = $.session.get("3.4.3_distribution");


            // 3.5 other Expenses
            w["sales_initiation_day_expenses"] = $.session.get("3.5.1_sales_initiation");
            w["unforseen_expenses"] = $.session.get("3.5.2_unforseen_expenses");
            w["general_advertising"] = $.session.get("3.5.3_general_advertising");


            // resale
            var s = {};
            // 4.1 resale costs 1
            s["resale_one_banner"] = $.session.get("4.1.1_banner");
            s["resale_one_banner_approval"] = $.session.get("4.1.2_banner_approvals");
            s["resale_one_banner_hanging"] = $.session.get("4.1.3_banner_hanging");
            s["resale_one_leaflet_printing"] = $.session.get("4.1.4_leaflet_printing");
            s["resale_one_leaflet_distribution"] = $.session.get("4.1.5_leaflet_distribution");
            s["resale_one_paper_advertistment"] = $.session.get("4.1.6_paper_advertisment");

            // 5.1 resale costs 2
            s["resale_two_banner"] = $.session.get("5.1.1_banner");
            s["resale_two_banner_approval"] = $.session.get("5.1.2_banner_approvals");
            s["resale_two_banner_hanging"] = $.session.get("5.1.3_banner_hanging");
            s["resale_two_leaflet_printing"] = $.session.get("5.1.4_leaflet_printing");
            s["resale_two_leaflet_distribution"] = $.session.get("5.1.5_leaflet_distribution");
            s["resale_two_paper_advertistment"] = $.session.get("5.1.6_paper_advertisment");

            s["costOfCapital"] = $.session.get("costOfCapital");
            s["description"] = $.session.get("description");

            var resale = JSON.stringify(s);

            // purchasing extra

            var myList = new Array();
            var desc;
            var cost;

            desc = $("#cost1_desc1").val();
            cost = $("#cost1_ex1").val();
            myList.push({expenses_description: desc, cost: cost});

            desc = $("#cost1_desc2").val();
            cost = $("#cost1_ex2").val();
            myList.push({expenses_description: desc, cost: cost});

            desc = $("#cost1_desc3").val();
            cost = $("#cost1_ex3").val();
            myList.push({expenses_description: desc, cost: cost});

            desc = $("#cost1_desc4").val();
            cost = $("#cost1_ex4").val();
            myList.push({expenses_description: desc, cost: cost});

            desc = $("#cost1_desc5").val();
            cost = $("#cost1_ex5").val();
            myList.push({expenses_description: desc, cost: cost});

            desc = $("#cost1_desc6").val();
            cost = $("#cost1_ex6").val();
            myList.push({expenses_description: desc, cost: cost});

            // development cost

            var myList2 = new Array();
            desc = $("#dev_other_txt1").val();
            cost = $("#dev_other1").val();
            myList2.push({expenses_description: desc, cost: cost});
            desc = $("#dev_other_txt2").val();
            cost = $("#dev_other2").val();
            myList2.push({expenses_description: desc, cost: cost});
            desc = $("#dev_other_txt3").val();
            cost = $("#dev_other3").val();
            myList2.push({expenses_description: desc, cost: cost});
            desc = $("#dev_other_txt4").val();
            cost = $("#dev_other4").val();
            myList2.push({expenses_description: desc, cost: cost});
            desc = $("#dev_other_txt5").val();
            cost = $("#dev_other5").val();
            myList2.push({expenses_description: desc, cost: cost});
            desc = $("#dev_other_txt6").val();
            cost = $("#dev_other6").val();
            myList2.push({expenses_description: desc, cost: cost});


            // advertising cost

            var myList3 = new Array();
            desc = $("#ME2").val();
            cost = $("#txtme2").val();
            myList3.push({expenses_description: desc, cost: cost});
            desc = $("#ME3").val();
            cost = $("#txtme3").val();
            myList3.push({expenses_description: desc, cost: cost});
            desc = $("#ME1").val();
            cost = $("#txtme1").val();
            myList3.push({expenses_description: desc, cost: cost});
            desc = $("#ME4").val();
            cost = $("#txtme4").val();
            myList3.push({expenses_description: desc, cost: cost});
            desc = $("#ME5").val();
            cost = $("#txtme5").val();
            myList3.push({expenses_description: desc, cost: cost});
            desc = $("#ME6").val();
            cost = $("#txtme6").val();
            myList3.push({expenses_description: desc, cost: cost});

            var myList4 = new Array();
            desc = $("#txtreex1").val();
            cost = $("#reex1").val();
            myList4.push({expenses_description: desc, cost: cost});
            desc = $("#txtreex2").val();
            cost = $("#reex2").val();
            myList4.push({expenses_description: desc, cost: cost});
            desc = $("#txtreex3").val();
            cost = $("#reex3").val();
            myList4.push({expenses_description: desc, cost: cost});
            desc = $("#txtreex4").val();
            cost = $("#reex4").val();
            myList4.push({expenses_description: desc, cost: cost});
            desc = $("#txtreex5").val();
            cost = $("#reex5").val();
            myList4.push({expenses_description: desc, cost: cost});
            desc = $("#txtreex6").val();
            cost = $("#reex6").val();
            myList4.push({expenses_description: desc, cost: cost});

            // vendor
            var b = {};
            b["vendor_name"] = $('#txtOwnerName').val();
            b["vendor_address"] = $('#txtOwnerAddress').val();
            b["vendor_nic"] = $('#txtOwnerNIC').val();
            b["vendor_contact"] = $('#txtOwnerContact').val();


            // sales
            var n = {};
            n["cash_flow_period"] = $('#txtSPCashflow').val();
            n["total_sales"] = $('#txtSPTotalSale').val();
            n["tax"] = $('#txtSPTax').val();
            n["net_proceed"] = $('#txtSPNetProceeds').val();
            n["total_cost"] = $('#txtSPTotalCost').val();
            n["gross_profit"] = $('#txtSPGrossProfit').val();
            n["incentives"] = $('#txtSPIncentives').val();
            n["net_profit"] = $('#txtSPNetProfit').val();
            n["roi"] = $('#txtSPROI').val();
            n["profit_ratio"] = $('#txtSPProfitRatio').val();


            // purchase prices
            var myList5 = new Array();
            var tab = document.getElementById('sales_tbl');
            var l = tab.rows.length;
            var d = {};
            var ss = '';
            var x = '';
            var y = '';
            var tot = 0;
            for (var i = 1; i < l; i++) {
                var tr = tab.rows[i];

                var cll = tr.cells[0];
                x = cll.innerText;
                isNaN(x);
                d[i] = parseFloat(x);

                var cll = tr.cells[1];
                y = cll.innerText;
                d[i] = parseFloat(y);

                var cll = tr.cells[2];
                ss = cll.innerText;
                d[i] = parseFloat(ss);
                myList5.push({no_of_purchase: x, cost_per_purch: parseFloat(y), sub_cost: parseFloat(ss)});
            }
            purchaseData = myList5;
            console.log("HO: " + d);

            var allDetails = {}
            allDetails["land_dto"] = data;
            allDetails["document_dto"] = g;
            allDetails["other_document_dto"] = doc_name;
            allDetails["broker_commision_dto"] = data2;
            allDetails["purchasing_cost_dto"] = t;
            allDetails["land_preperation_cost_dto"] = q;
            allDetails["advertising_costs_dto"] = w;
            allDetails["resale_cost_dto"] = s;
            allDetails["purchasing_extra"] = myList;
            allDetails["development_cost_dtos"] = myList2;
            allDetails["advertising_cost_dtos"] = myList3;
            allDetails["resale_extra_cost_dtos"] = myList4;
            allDetails["vendor_dto"] = b;
            allDetails["salesand_profit"] = n;
            allDetails["purchase_dto"] = myList5;
            var Land_and_Costing = JSON.stringify(allDetails);

            $.ajax({
                url: 'Land_Details/store/land/details',
                dataType: 'json',
                contentType: "application/json",
                type: 'POST',
                data: Land_and_Costing,
                success: function (data, textStatus, jqXHR) {
                    toastr.success('Land Saved.', 'Success!');
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    toastr.error('Can not proceed!', 'Something went wrong...');
                }

            });
        }
        ,
        collect_purchasing_cost: function () {

            // 1.1 purchasing costs
            $.session.set("1.1.1_price", $("#txtPurPrice").val());
            $.session.set("1.1.2_extracts", $("#txtPurExtracts").val());
            $.session.set("1.1.3_valuation", $("#txtPurValuationFee").val());
            $.session.set("1.1.4_title_Insurance", $("#txtPurInsurance").val());
            $.session.set("1.1.5_title_Report", $("#txtPurReport").val());
            $.session.set("1.1.6_stamp_fees", $("#txtPurStamp").val());
            $.session.set("1.1.7_legle_fees", $("#txtPurLegal").val());

            // 1.2 surveying cost
            $.session.set("1.2.1_perimeter", $("#txtSurPerimeter").val());
            $.session.set("1.2.2_blocking_out", $("#txtSurBlockingOut").val());
            $.session.set("1.2.3_block_Plan", $("#txtSurBlockPlan").val());

            // 1.3 Approval Cost
            $.session.set("1.3.1_UDA", $("#txtAppUDA").val());
            $.session.set("1.3.2_NBRO", $("#txtAppNBRO").val());
            $.session.set("1.3.3_perasari_charges", $("#txtAppPerasariCharge").val());
            $.session.set("1.3.4_town_planer", $("#txtAppTownPlanner").val());

            // 1.4 Other Expenses
            $.session.set("1.4.1_Broker_charge", $("#txtBrokerCharge").val());

        }
        ,
        land_preperation_cost: function () {
            // 2.1 land_preperation costs
            $.session.set("2.1.1_cleaning", $("#txtToClearLand").val());
            $.session.set("2.1.2_jcb", $("#txtMJCB").val());
            $.session.set("2.1.3_dozer", $("#txtMDozer").val());
            $.session.set("2.1.4_transport", $("#txtTransport").val());
            $.session.set("2.1.5_drilling", $("#txtDrilling").val());
            $.session.set("2.1.6_finishing_the_land", $("#txtLandFinishing").val());
            $.session.set("2.1.7_concrete_poles", $("#txtConcretePolse").val());
            $.session.set("2.1.8_wooden_poles", $("#txtWoodenPolse").val());
            $.session.set("2.1.9_labour_charges", $("#txtLabourCharges").val());
            $.session.set("2.1.10_staff_welfare", $("#txtStaffWelfare").val());
            $.session.set("2.1.11_labour_welfare", $("#txtLabourWelfare").val());

            // 2.2 construction cost
            $.session.set("2.2.1_side_drains", $("#txtSideDrains").val());
            $.session.set("2.2.2_culverts", $("#txtCulverts").val());
            $.session.set("2.2.3_concerting", $("#txtConcerting").val());
            $.session.set("2.2.4_tarring", $("#txtTarring").val());
            $.session.set("2.2.5_barbwired", $("#txtBarbwired").val());
            $.session.set("2.2.6_parapet", $("#txtParapetWall").val());
            $.session.set("2.2.7_water", $("#txtWaterProject").val());
            $.session.set("2.2.8_project_office", $("#txtProjectOffice").val());


            // 2.3 public infrastructure Cost
            $.session.set("2.3.1_main_electricity", $("#txtElectricity").val());
            $.session.set("2.3.2_main_water_supply", $("#txtWater").val());

            // 2.4 Traveling Expenses
            $.session.set("2.4.1_project_manager", $("#txtProjectManager").val());
            $.session.set("2.4.2_senior_manager", $("#txtSeniorManager").val());
            $.session.set("2.4.3_sales_manager", $("#txtSalesManager").val());
            $.session.set("2.4.4_project_officer1", $("#txtProjectOfficer").val());

            // 2.5 Telephone Expenses
            $.session.set("2.5.1_project_manager", $("#txtTProjectManager").val());
            $.session.set("2.5.2_senior_manager", $("#txtTSeniorManager").val());
            $.session.set("2.5.3_sales_manager", $("#txtTSalesManager").val());
            $.session.set("2.5.4_project_officer1", $("#txtTProjectOfficer_1").val());
            $.session.set("2.5.5_project_officer2", $("#txtTProjectOfficer_2").val());

            // 2.6 Other Expenses
            $.session.set("2.6.1_land_name_bord", $("#txtLandNameBoard").val());
            $.session.set("2.6.2_project_maintenance", $("#txtLPCProjectMaintenence").val());
            $.session.set("2.6.3_entertainment", $("#txtLPCEntertaintment").val());
            $.session.set("2.6.4_unforseen", $("#txtLPCUnforseen").val());
            $.session.set("2.6.5_resale", $("#txtLPCReSale").val());

            // this value changing dynamically.. should find a way to collect data.. (same as the extra expenses)
            var new_name = $("#txtCustomName").val();

            if (new_name === "") {
            } else {
                $.session.set("2.6.6_new_name", "disabled");
                $.session.set("2.6.6_new_value", "0.00");
                // $("#txtCustomName").val()
                // $("#txt_new_value").val()

            }

            // 2.7 Extra Expenses


        }
        ,
        media_cost: function () {
            // 3.1 media expenses
            $.session.set("3.1.1_recording_radio", $("#txtMERecordingRadio").val());
            $.session.set("3.1.2_broadcasting_radio", $("#txtMEBroadcastingRadio").val());
            $.session.set("3.1.3_artwork_press", $("#txtMEPress").val());
            $.session.set("3.1.4_paper_advertisment", $("#txtMEAdvertistment").val());
            $.session.set("3.1.5_artwork_tv", $("#txtMETv").val());
            $.session.set("3.1.6_recording_tv", $("#txtMERecordingTv").val());
            $.session.set("3.1.7_telecasting_tv", $("#txtMETelecasting").val());
            $.session.set("3.1.8_internet", $("#txtMEInternet").val());

            // 3.2 banner expenses
            $.session.set("3.2.1_artwork", $("#txtMEBannerArtwork").val());
            $.session.set("3.2.2_printing", $("#txtMEBannerPrinting").val());
            $.session.set("3.2.3_approval_and_hanging", $("#txtMEBannerApproval").val());
            $.session.set("3.2.4_hoardings", $("#txtMEBannerHoarding").val());
            $.session.set("3.2.5_pp_boards", $("#txtMEBannerPPBords").val());
            $.session.set("3.2.6_poster", $("#txtMEBannerPosters").val());
            $.session.set("3.2.7_stickers", $("#txtMEBannerSticker").val());
            $.session.set("3.2.8_day_cards", $("#txtMEBannerDayCards").val());
            $.session.set("3.2.9_facility_board", $("#txtMEBannerBlockNo").val());

            // 3.3 mobile unit expenses
            $.session.set("3.3.1_artwork", $("#txtMEMobileUnitExpenses").val());
            $.session.set("3.3.2_recording", $("#txtMEMobileRecordings").val());
            $.session.set("3.3.3_production", $("#txtMEMobileProduction").val());
            $.session.set("3.3.4_operation_expenses", $("#txtMEMobileOperation").val());
            $.session.set("3.3.5_safari_expenses", $("#txtMEMobileSafari").val());


            // 3.4 Leaflet Expenses
            $.session.set("3.4.1_artwork", $("#txtMELeafletArtwork").val());
            $.session.set("3.4.2_printing", $("#txtLeafletPrinting").val());
            $.session.set("3.4.3_distribution", $("#txtLeafletDistribution").val());


            // 3.5 Other Expenses
            $.session.set("3.5.1_sales_initiation", $("#txtMESaleInitiationEx").val());
            $.session.set("3.5.2_unforseen_expenses", $("#txtMEUnforseenExpenses").val());
            $.session.set("3.5.3_general_advertising", $("#txtMEGeneralAdvertising").val());

            // 3.7 Extra Expenses


        }
        ,
        resale_cost: function () {
            // 4.1 resale cost 1
            $.session.set("4.1.1_banner", $("#txtRCBanners").val());
            $.session.set("4.1.2_banner_approvals", $("#txtRCBannersApproval").val());
            $.session.set("4.1.3_banner_hanging", $("#txtRCBannerHangging").val());
            $.session.set("4.1.4_leaflet_printing", $("#txtRCLeafletPrinting").val());
            $.session.set("4.1.5_leaflet_distribution", $("#txtRCLeafletDistribution").val());
            $.session.set("4.1.6_paper_advertisment", $("#txtRCPaperAdvertisement").val());

            // 5.1 resale cost 5
            $.session.set("5.1.1_banner", $("#txtRC2Banners").val());
            $.session.set("5.1.2_banner_approvals", $("#txtRC2BannersApproval").val());
            $.session.set("5.1.3_banner_hanging", $("#txtRC2BannerHangging").val());
            $.session.set("5.1.4_leaflet_printing", $("#txtRC2LeafletPrinting").val());
            $.session.set("5.1.5_leaflet_distribution", $("#txtRC2LeafletDistribution").val());
            $.session.set("5.1.6_paper_advertisment", $("#txtRC2PaperAdvertisement").val());

            $.session.set("costOfCapital", $("#txtCostOfCapital").val());
            $.session.set("description", $("#txtResaleDescription").val());

        },

        summerySet: function () {
            $("#txtSumLandName").val($('#txtLandName').val());
            $("#txtSumLocation").val($('#txtLocation').val());
            $("#txtSumLocalAuthority").val($('#txtLocalAuthorityArea').val());
            $("#txtSumLocalPradeshiyasaba").val($('#txtLocalAuthority').val());

            $("#txtSumOwnerName").val($('#txtOwnerName').val());
            $("#txtSumOwnerAddress").val($('#txtOwnerAddress').val());
            $("#txtSumLocationDetail").val($('#txtLocation').val());

            $("#txtSTotalExtent").val($('#txtA').val());
            $("#txtSA").val($('#txtR').val());
            $("#txtSR").val($('#txtP').val());

            $("#txtSumtotalInpurchase").val($('#txtTotalInPurchase').val());
            $("#txtSumRoadways").val($('#txtRoadways').val());
            $("#txtSumReservation").val($('#txtReservation').val());
            $("#txtSumSellableArea").val($('#txtSellableArea').val());
            $("#txtSumOriginalPrice").val($('#txtOriginalPrice').val());
            $("#txtSumNegotiatedPrice").val($('#txtNegotiatedPrice').val());
            $("#txtSumPriceAndCommission").val($('#txtPriceAndCommission').val());

            $("#txtSumBrokerName").val($('#txtBrokerName').val());
            $("#txtSumBrokerAddress").val($('#txtBrokerAddress').val());
            $("#txtSumBrokerCommission").val($('#txtBrokerCommission').val());
            $("#txtSumBrokerRemarks").val($('#txtBrokerRemarks').val());

            $("#txtSumCashFPeriod").val($("#txtSPCashflow").val());

            $('#sum_purchasing_costs').html($("#txtTotalPurchaseCost").val());
            $('#sum_development_cost').html($("#txtTotalDevelopmentCost").val());
            $('#sum_advertising_expenses').html($("#txtTotalAdvertisingCost").val());
            $('#sum_resale_01').html($("#txtResaleExpenses").val());
            $('#sum_resale_02').html($("#txtResale02Expenses").val());
            $('#txtSPTotalSale').html($("#sum_sales_price").val());

            var sub1 = parseFloat($("#txtPurSubTotal").val());
            var sub2 = parseFloat($("#txtSurSESubTotal").val());
            var sub3 = parseFloat($("#txtAppSubTotal").val());
            var sub4 = parseFloat($("#txtOEBrokerSubTotal").val());
            var sub5 = parseFloat($("#ex_sub").val());

            var sub6 = parseFloat($("#txtLPCSubTotal").val());
            var sub7 = parseFloat($("#txtCCSubTotal").val());
            var sub8 = parseFloat($("#txtPISubTotal").val());
            var sub9 = parseFloat($("#txtTESubTotal").val());
            var sub10 = parseFloat($("#txtTELSubTotal").val());
            var sub11 = parseFloat($("#txtOESubTotal").val());
            var sub12 = parseFloat($("#devEx").val());

            var sub13 = parseFloat($("#txt_media_expenses_SubTotal").val());
            var sub14 = parseFloat($("#txtMEBSubTotal").val());
            var sub15 = parseFloat($("#txtPICSubTotal").val());
            var sub16 = parseFloat($("#txtMELeafletSubTotal").val());
            var sub17 = parseFloat($("#txtMEOSubTotal").val());
            var sub18 = parseFloat($("#txtMESubTotal").val());

            var sub19 = parseFloat($("#txtRCSubtotal").val());
            var sub20 = parseFloat($("#txtRC2Subtotal").val());
            var sub21 = parseFloat($("#resale_ex").val());

            var tot = sub1 + sub2 + sub3 + sub4 + sub5 + sub6 + sub7 + sub8 + sub9 + sub10 + sub11 + sub12 + sub13 + sub14 + sub15 + sub16 + sub17 + sub18 + sub19 + sub20 + sub21;

            var tax = parseFloat($("#txtSPTax").val());
            var x = (tot * tax) / 100;
            var total = tot + tax;

            $('#sum_tax').html(parseFloat(Math.round(x * 100) / 100).toFixed(2));
            $('#sum_incentives').html($("#txtSPIncentives").val());
            $('#sum_total').html(parseFloat(Math.round(total * 100) / 100).toFixed(2));
            $('#sum_tot_cost').html(total);
            $('#sum_cost_of_money').html($("#txtCostOfCapital").val());
            $('#sum_sales_price').html($("#txtSPTotalSale").val());
            $('#sum_net_profit').html($("#txtSPNetProfit").val());
            $('#sum_roi').html($("#txtSPROI").val());

            $("#d01").val($("#check_local_visiting"));
            $("#d02").val($("#check_approval_tea").val());
            $("#d03").val($("#check_approval_rubber").val());
            $("#d04").val($("#check_approval_coconut").val());
            $("#d05").val($("#check_street_line").val());
            $("#d06").val($("#check_title_report").val());
            $("#d07").val($("#check_perimeter_plan").val());
            $("#d08").val($("#check_NBRO").val());
            $("#d09").val($("#check_UDA").val());
            $("#d10").val($("#check_enviromental").val());
            $("#d11").val($("#check_muncipal").val());
            $("#d12").val($("#check_pradeshiya_sabha").val());

            if ($('#check_local_visiting').is(':checked')) {
                $("#d01").prop("checked", true);
            } else {
                $("#d01").prop("checked", false);
            }

            if ($('#check_approval_tea').is(':checked')) {
                $("#d02").prop("checked", true);
            } else {
                $("#d02").prop("checked", false);
            }

            if ($('#check_approval_rubber').is(':checked')) {
                $("#d03").prop("checked", true);
            } else {
                $("#d03").prop("checked", false);
            }

            if ($('#check_approval_coconut').is(':checked')) {
                $("#d04").prop("checked", true);
            } else {
                $("#d04").prop("checked", false);
            }

            if ($('#check_street_line').is(':checked')) {
                $("#d05").prop("checked", true);
            } else {
                $("#d05").prop("checked", false);
            }

            if ($('#check_title_report').is(':checked')) {
                $("#d06").prop("checked", true);
            } else {
                $("#d06").prop("checked", false);
            }

            if ($('#check_perimeter_plan').is(':checked')) {
                $("#d07").prop("checked", true);
            } else {
                $("#d07").prop("checked", false);
            }

            if ($('#check_NBRO').is(':checked')) {
                $("#d08").prop("checked", true);
            } else {
                $("#d08").prop("checked", false);
            }

            if ($('#check_UDA').is(':checked')) {
                $("#d09").prop("checked", true);
            } else {
                $("#d09").prop("checked", false);
            }

            if ($('#check_enviromental').is(':checked')) {
                $("#d10").prop("checked", true);
            } else {
                $("#d10").prop("checked", false);
            }

            if ($('#check_muncipal').is(':checked')) {
                $("#d11").prop("checked", true);
            } else {
                $("#d11").prop("checked", false);
            }

            if ($('#check_pradeshiya_sabha').is(':checked')) {
                $("#d12").prop("checked", true);
            } else {
                $("#d12").prop("checked", false);
            }

            for(var i = 0 ; i < other.length;i++){
                var tr;
                var doc = other[i];
                tr = $('<tr>');
                tr.append("<td>" + "OD-"+(i+1) + "</td>");
                tr.append("<td>doc</td>");
                tr.append("<td>✔</td>");
                $('#sum_doc_tbl').append(tr);
            }
        },

        loadProjectForApproval: function () {
            var land = $.session.get("Land");
            if (land != null) {
                var e = {};
                e["data"] = land
                var d = JSON.stringify(e);
                $.ajax({
                        url: 'Land_Details/get/land/for/approval',
                        dataType: 'json',
                        contentType: "application/json",
                        type: 'POST',
                        data: land,
                        success: function (data, textStatus, jqXHR) {

                            if (data) {
                                var landData = data.land_dto;
                                var vendore = data.vendor_dto;
                                var broker = data.broker_commision_dto;
                                var document = data.document_dto;
                                var otherdoc = data.other_document_dto;
                                var purchasingCost = data.purchasing_cost_dto;
                                var developmentCost = data.land_preperation_cost_dto;
                                var advertisingCost = data.advertising_costs_dto;
                                var resaleCost = data.resale_cost_dto;
                                var extra_purchase = data.purchasing_extra;
                                var extra_develop = data.development_cost_dtos;
                                var extra_adver = data.advertising_cost_dtos;
                                var extra_resale = data.resale_extra_cost_dtos;
                                var salesAndProfit = data.salesand_profit;
                                var purchaseTable = data.purchase_dto;

                                setVendorDetails(vendore);
                                setLandDetails(landData);
                                setBrokerDetails(broker);
                                setDocumentDetails(document);
                                setPurchasingCostDetails(purchasingCost);
                                setDevelopmentCostDetails(developmentCost);
                                setAdvertisingCostDetails(advertisingCost);
                                setResaleCostDetails(resaleCost);
                                setExtraPurchasingCost(extra_purchase);
                                setExtraDevCost(extra_develop);
                                setExtraAdverCost(extra_adver);
                                setExtraResale(extra_resale);
                                setOtherDoc(otherdoc);
                                setSalesAndProfit(salesAndProfit);
                                setPurchaseTable(purchaseTable);
                                cost_of_capital();
                                LO.loadForeignTable();
                                LO.loadLocalTable();
                                $("#sendForApprovalBtn").val("Approve Land");
                                checkAuthorityForApproval();
                                toastr.success('Land and Costing details are loaded!', 'Done !');

                            }
                            else {
                                toastr.info('something went wrong..');
                            }

                        },
                        error: function (jqXHR, textStatus, errorThrown) {
                            console.log("error" + jqXHR + " - " + errorThrown);
                            console.log(textStatus);
                            console.log("R: " + jqXHR.status);
                            console.log("R: " + jqXHR.responseText);
                            toastr.error('Can not save location.', 'Failed !');

                        }
                    }
                )
                ;
                $.session.remove("Land");
            }

        },

    }
;


// $('#print').click(function (e) {
//     e.preventDefault();
//     jsreportInits();
// });


function checkAuthorityForApproval() {
    var userName = $.session.get("Logged_User");
    if (userName === null) {
        toastr.warning('Authority Check Failed!', 'Your Session Has Been expire!');
    } else {
        var form_data = {
            'name': userName
        };

        var d = JSON.stringify(form_data);

        $.post("login/request/authorization/for/approval",
            {
                name: userName

            }, function (result) {
                if (result != null) {
                    var role = result.role;
                    if (role === "OFFICER") {
                        if (ProjectOfficerApproval === 0) {
                            document.getElementById("sendForApprovalBtn").innerHTML = "Approve Land";
                            document.getElementById("sendForApprovalBtn").disabled = false;
                            // getLands(1);
                            ProjectOfficerApproval = 1;
                        } else {
                            document.getElementById("sendForApprovalBtn").innerHTML = "Approved";
                            document.getElementById("sendForApprovalBtn").disabled = true;
                        }
                    } else if (role === "MANAGER") {
                        if (BranchManagerApproval === 0) {
                            document.getElementById("sendForApprovalBtn").innerHTML = "Approve Land";
                            document.getElementById("sendForApprovalBtn").disabled = false;
                            //  getLands(2);
                            BranchManagerApproval = 1;
                        } else {
                            document.getElementById("sendForApprovalBtn").innerHTML = "Approved";
                            document.getElementById("sendForApprovalBtn").disabled = true;
                        }
                    }
                    else if (role === "HEAD_OFFICE") {
                        if (BranchManagerApproval === 0) {
                            document.getElementById("sendForApprovalBtn").innerHTML = "Approve Land";
                            document.getElementById("sendForApprovalBtn").disabled = false;
                            //  getLands(3);
                            HeadOfficeApproval = 1;
                        } else {
                            document.getElementById("sendForApprovalBtn").innerHTML = "Approved";
                            document.getElementById("sendForApprovalBtn").disabled = true;
                        }
                    }

                } else {
                    toastr.warning('Access Denied!', 'You Do Not Have Any Authority For Approve A Land ');
                }

            });
    }
}

function setPurchaseTable(data) {
    $('#sales_tbl tbody tr').remove();
    if (data.length > 0) {
        for (var i = 0; i < data.length; i++) {
            $('#sales_tbl').append('<tr>\n\
                                    <td>' + data[i].no_of_purchase + '</td>\n\
                                    <td>' + data[i].cost_per_purch + '</td>\n\
                                    <td>' + data[i].sub_cost + '</td>\n\
                                    </tr>');
        }
    } else {
        $('#sales_tbl').append('<tr>\n\
                               <td colspan=8><p align="center"> There is no item to load!\n\
                               </p></td>\n\
                               </tr>');
    }
}

function setSalesAndProfit(data) {
    $("#txtSPCashflow").val(data.cash_flow_period);
    $("#txtSPTotalSale").val(data.total_sales);
    $("#txtSPTax").val(data.tax);
    $("#txtSPNetProceeds").val(data.net_proceed);
    $("#txtSPTotalCost").val(data.total_cost);
    $("#txtSPGrossProfit").val(data.gross_profit);
    $("#txtSPIncentives").val(data.incentives);
    $("#txtSPNetProfit").val(data.net_profit);
    $("#txtSPROI").val(data.roi);
    $("#txtSPProfitRatio").val(data.profit_ratio);
}

function setOtherDoc(data) {
    for (var i = 0; i < data.length; i++) {
        docId = docId + 1;
        var docName = data[i].doc_name;
        other.push(docName);
        var tr;
        tr = $('<tr id="' + docId + '">');
        tr.append("<td>" + docId + "</td>");
        tr.append("<td> <input type='text'  required='required' class='form-control col-md-8 col-xs-12 textFieldStyle' value=" + docName + "></td>");
        tr.append("<td><a href='#' class='btn btn-info btn-xs actions' onclick='LO.remove_other_document(this);' style='background-color: transparent; color: #00A000;'> <i class='glyphicon glyphicon-remove' style='color: red; margin-left: 0px; margin-top: -3px;'></i></a></td>");
        $('#tbl_document').append(tr);
        modal.style.display = "none";
        $("#btnNewDocument").val("");
    }

}

function setExtraPurchasingCost(data) {

    $("#cost1_desc1").val(data[0].expenses_description + "");
    $("#cost1_ex1").val(data[0].cost);

    $("#cost1_desc2").val(data[1].expenses_description + "");
    $("#cost1_ex2").val(data[1].cost);

    $("#cost1_desc3").val(data[2].expenses_description + "");
    $("#cost1_ex3").val(data[2].cost);

    $("#cost1_desc4").val(data[3].expenses_description + "");
    $("#cost1_ex4").val(data[3].cost);

    $("#cost1_desc5").val(data[4].expenses_description + "");
    $("#cost1_ex5").val(data[4].cost);

    $("#cost1_desc6").val(data[5].expenses_description + "");
    $("#cost1_ex6").val(data[5].cost);

    total_of_Extra_Expenses();
};

function setExtraDevCost(data) {

    $("#dev_other_txt1").val(data[0].expenses_description);
    $("#dev_other1").val(data[0].cost);

    $("#dev_other_txt2").val(data[1].expenses_description);
    $("#dev_other2").val(data[1].cost);

    $("#dev_other_txt3").val(data[2].expenses_description);
    $("#dev_other3").val(data[2].cost);

    $("#dev_other_txt4").val(data[3].expenses_description);
    $("#dev_other4").val(data[3].cost);

    $("#dev_other_txt5").val(data[4].expenses_description);
    $("#dev_other5").val(data[4].cost);

    $("#dev_other_txt6").val(data[5].expenses_description);
    $("#dev_other6").val(data[5].cost);
    dev_extra_cost();
};

function setExtraAdverCost(data) {
    $("#ME2").val(data[0].expenses_description);
    $("#txtme2").val(data[0].cost);

    $("#ME3").val(data[1].expenses_description);
    $("#txtme3").val(data[1].cost);

    $("#ME1").val(data[2].expenses_description);
    $("#txtme1").val(data[2].cost);

    $("#ME4").val(data[3].expenses_description);
    $("#txtme4").val(data[3].cost);

    $("#ME5").val(data[4].expenses_description);
    $("#txtme5").val(data[4].cost);

    $("#ME6").val(data[5].expenses_description);
    $("#txtme6").val(data[5].cost);
    media_extra_ex();
};

function setExtraResale(data) {
    $("#txtreex1").val(data[0].expenses_description);
    $("#reex1").val(data[0].cost);

    $("#txtreex2").val(data[1].expenses_description);
    $("#reex2").val(data[1].cost);

    $("#txtreex3").val(data[2].expenses_description);
    $("#reex3").val(data[2].cost);

    $("#txtreex4").val(data[3].expenses_description);
    $("#reex4").val(data[3].cost);

    $("#txtreex5").val(data[4].expenses_description);
    $("#reex5").val(data[4].cost);

    $("#txtreex6").val(data[5].expenses_description);
    $("#reex6").val(data[5].cost);
    resale_extra();
};

function setLandDetails(data) {
    landID = data.id;
    $('#txtLandName').val(data.land_name);
    $('#area').val(data.land_area);
    $('#txtLocalAuthorityArea').val(data.authority);
    $('#txtLocalAuthority').val(data.local_authority);
    $('#txtLocation').val(data.land_location_details);
    $('#txtA').val(data.land_total_extent_A);
    $('#txtR').val(data.land_total_extent_R);
    $('#txtP').val(data.land_total_extent_P);
    $('#txtTotalInPurchase').val(data.land_total_in_purchase);
    $('#txtRoadways').val(data.land_road_ways);
    $('#txtReservation').val(data.land_reservation);
    $('#txtSellableArea').val(data.land_sellable_area);
    $('#txtOriginalPrice').val(data.land_original_price);
    $('#txtNegotiatedPrice').val(data.land_nigotiated_price);
    $('#txtPriceAndCommission').val(data.land_total_price);
    total_in_purchase();
    sellable_area();
    price_commision();
    ProjectOfficerApproval = data.projectOfficerApproval;
    BranchManagerApproval = data.branchManagerApproval;
    HeadOfficeApproval = data.headOfficeApproval;
    land = data.id;
    preparedBy = data.preparedBy;

    if (ProjectOfficerApproval > 0) {
        document.getElementById('projectOfficerApprovalLable').innerHTML = 'Approved!';
    } else {
        document.getElementById('projectOfficerApprovalLable').innerHTML = 'Pending!';
    }

    if (BranchManagerApproval > 0) {
        document.getElementById('branchManagerApprovalLable').innerHTML = 'Approved!';
    } else {
        document.getElementById('branchManagerApprovalLable').innerHTML = 'Pending!';
    }

    if (HeadOfficeApproval > 0) {
        document.getElementById('headOfficeApprovalLable').innerHTML = 'Approved!';
    } else {
        document.getElementById('headOfficeApprovalLable').innerHTML = 'Pending!';
    }

};

function setVendorDetails(data) {
    $('#txtOwnerName').val(data.vendor_name);
    $('#txtOwnerAddress').val(data.vendor_address);
    $('#txtOwnerNIC').val(data.vendor_nic);
    $('#txtOwnerContact').val(data.vendor_contact);
};

function setBrokerDetails(data) {
    $('#txtBrokerName').val(data.broker_name);
    $('#txtBrokerAddress').val(data.broker_address);
    $('#txtBrokerCommission').val(data.broker_commission);
    $('#txtBrokerContact').val(data.broker_contact);
    $('#txtBrokerRemarks').val(data.broker_remarks);
    $('#txtBrokerNIC').val(data.broker_nic);
};

function setDocumentDetails(data) {
    if (data.local_visiting === true) {
        $("#check_local_visiting").prop("checked", true);
    } else {
        $("#check_local_visiting").prop("checked", false);
    }

    if (data.approval_tea) {
        $("#check_approval_tea").prop("checked", true);
    } else {
        $("#check_approval_tea").prop("checked", false);
    }

    if (data.approval_rubber) {
        $("#check_approval_rubber").prop("checked", true);
    } else {
        $("#check_approval_rubber").prop("checked", false);
    }

    if (data.approval_coconut) {
        $("#check_approval_coconut").prop("checked", true);
    } else {
        $("#check_approval_coconut").prop("checked", false);
    }

    if (data.street_line) {
        $("#check_street_line").prop("checked", true);
    } else {
        $("#check_street_line").prop("checked", false);
    }

    if (data.title_report) {
        $("#check_title_report").prop("checked", true);
    } else {
        $("#check_title_report").prop("checked", false);
    }

    if (data.perimeter_plan) {
        $("#check_perimeter_plan").prop("checked", true);
    } else {
        $("#check_perimeter_plan").prop("checked", false);
    }

    if (data.nbro) {
        $("#check_NBRO").prop("checked", true);
    } else {
        $("#check_NBRO").prop("checked", false);
    }

    if (data.uda) {
        $("#check_UDA").prop("checked", true);
    } else {
        $("#check_UDA").prop("checked", false);
    }

    if (data.enviromental) {
        $("#check_enviromental").prop("checked", true);
    } else {
        $("#check_enviromental").prop("checked", false);
    }

    if (data.muncipal) {
        $("#check_muncipal").prop("checked", true);
    } else {
        $("#check_muncipal").prop("checked", false);
    }

    if (data.pradeshiya_sabha) {
        $("#check_pradeshiya_sabha").prop("checked", true);
    } else {
        $("#check_pradeshiya_sabha").prop("checked", false);
    }
};

function setPurchasingCostDetails(data) {

    $("#txtPurPrice").val(data.price);
    $("#txtPurExtracts").val(data.extract);
    $("#txtPurValuationFee").val(data.valuation);
    $("#txtPurInsurance").val(data.titleInsurance);
    $("#txtPurReport").val(data.titleReport);
    $("#txtPurStamp").val(data.stampFees);
    $("#txtPurLegal").val(data.leagleFees);
    total_of_purchasing_cost();

    $("#txtSurPerimeter").val(data.perimeter);
    $("#txtSurBlockingOut").val(data.blockingOut);
    $("#txtSurBlockPlan").val(data.blockPlan);
    total_of_Surveying_Expenses();

    $("#txtAppUDA").val(data.uda);
    $("#txtAppNBRO").val(data.nbro);
    $("#txtAppPerasariCharge").val(data.perasariCharges);
    $("#txtAppTownPlanner").val(data.townPlanner);
    total_of_Approval_Costs();

    $("#txtBrokerCharge").val(data.brokerCharge);
    total_of_Other_Expenses();


};

function setDevelopmentCostDetails(data) {

    $("#txtToClearLand").val(data.cleaning_land);
    $("#txtMJCB").val(data.machinery_JCB);
    $("#txtMDozer").val(data.machinery_Dozer);
    $("#txtTransport").val(data.transport_Tipper);
    $("#txtDrilling").val(data.drilling);
    $("#txtLandFinishing").val(data.land_finishing);
    $("#txtConcretePolse").val(data.purchasing_concrete_poles);
    $("#txtWoodenPolse").val(data.purchasing_wooden_poles);
    $("#txtLabourCharges").val(data.labour_charges);
    $("#txtStaffWelfare").val(data.staff_welfare);
    $("#txtLabourWelfare").val(data.labour_welfare);
    total_land_preperation_cost();

    $("#txtSideDrains").val(data.side_drains);
    $("#txtCulverts").val(data.culverts);
    $("#txtConcerting").val(data.concerting);
    $("#txtTarring").val(data.tarring);
    $("#txtBarbwired").val(data.barbwired_fench);
    $("#txtParapetWall").val(data.parapet_wall);
    $("#txtWaterProject").val(data.water_project);
    $("#txtProjectOffice").val(data.project_office);
    construction_cost();

    $("#txtElectricity").val(data.main_electricity);
    $("#txtWater").val(data.main_water_supply);
    public_infrastructure_costs();

    $("#txtProjectManager").val(data.project_manager);
    $("#txtSeniorManager").val(data.senior_manager);
    $("#txtSalesManager").val(data.sales_manager);
    $("#txtProjectOfficer").val(data.project_officer_1);
    traveling_expenses();

    $("#txtTProjectManager").val(data.project_manager_tel);
    $("#txtTSeniorManager").val(data.senior_manager_tel);
    $("#txtTSalesManager").val(data.sales_manager_tel);
    $("#txtTProjectOfficer_1").val(data.project_officer_1_tel);
    $("#txtTProjectOfficer_2").val(data.project_officer_2_tel);
    telephone_expenses();

    $("#txtLandNameBoard").val(data.land_name_board);
    $("#txtLPCProjectMaintenence").val(data.project_maintenance);
    $("#txtLPCEntertaintment").val(data.entertainment);
    $("#txtLPCUnforseen").val(data.unforseen);
    $("#txtLPCReSale").val(data.resale);
    $("#txtCustomName").val(data.new_name);
    $("#txt_new_value").val(data.new_price);
    dev_other_cost();


};

function setAdvertisingCostDetails(data) {

    $("#txtMEBannerArtwork").val(data.banner_artwork);
    $("#txtMEBannerPrinting").val(data.banner_printing);
    $("#txtMEBannerApproval").val(data.banner_approval);
    $("#txtMEBannerHoarding").val(data.banner_hoardings);
    $("#txtMEBannerPPBords").val(data.banner_pp_boards);
    $("#txtMEBannerPosters").val(data.banner_posters);
    $("#txtMEBannerSticker").val(data.banner_stickers);
    $("#txtMEBannerDayCards").val(data.banner_day_cards);
    $("#txtMEBannerBlockNo").val(data.banner_facility_bord);
    banner_expenses();

    $("#txtMERecordingRadio").val(data.recording_radio);
    $("#txtMEBroadcastingRadio").val(data.broadcasting_radio);
    $("#txtMEPress").val(data.artwork_press);
    $("#txtMEAdvertistment").val(data.paper_advertisment);
    $("#txtMETv").val(data.artwork_tv);
    $("#txtMERecordingTv").val(data.recording_tv);
    $("#txtMETelecasting").val(data.telecasting_tv);
    $("#txtMEInternet").val(data.internet);
    media_expenses();

    $("#txtMELeafletArtwork").val(data.leaflet_artwork);
    $("#txtLeafletPrinting").val(data.leaflet_printing);
    $("#txtLeafletDistribution").val(data.leaflet_distribution);
    leaflets_expenses();

    $("#txtMEMobileUnitExpenses").val(data.mobile_artwork);
    $("#txtMEMobileRecordings").val(data.mobile_recording);
    $("#txtMEMobileProduction").val(data.mobile_production);
    $("#txtMEMobileOperation").val(data.mobile_operation_expenses);
    $("#txtMEMobileSafari").val(data.mobile_safari_vehicles);
    mobile_unit_expenses();

    $("#txtMESaleInitiationEx").val(data.sales_initiation_day_expenses);
    $("#txtMEUnforseenExpenses").val(data.unforseen_expenses);
    $("#txtMEGeneralAdvertising").val(data.general_advertising);
    media_other_ex();

};

function setResaleCostDetails(data) {

    $("#txtRCBanners").val(data.resale_one_banner);
    $("#txtRCLeafletPrinting").val(data.resale_one_leaflet_printing);
    $("#txtRCBannersApproval").val(data.resale_one_banner_approval);
    $("#txtRCBannerHangging").val(data.resale_one_banner_hanging);
    $("#txtRCLeafletDistribution").val(data.resale_one_leaflet_distribution);
    $("#txtRCPaperAdvertisement").val(data.resale_one_paper_advertistment);
    resale01();

    $("#txtRC2Banners").val(data.resale_two_banner);
    $("#txtRC2BannersApproval").val(data.resale_two_banner_approval);
    $("#txtRC2BannerHangging").val(data.resale_two_banner_hanging);
    $("#txtRC2LeafletPrinting").val(data.resale_two_leaflet_printing);
    $("#txtRC2LeafletDistribution").val(data.resale_two_leaflet_distribution);
    $("#txtRC2PaperAdvertisement").val(data.resale_two_paper_advertistment);
    resale02();

    $("#txtCostOfCapital").val(data.costOfCapital);
    $("#txtResaleDescription").val(data.description);


};

function disableAllSteps() {
    document.getElementById("step-1").style.display = "none";
    document.getElementById("step-2").style.display = "none";
    document.getElementById("step-3").style.display = "none";
    document.getElementById("step-4").style.display = "none";
    document.getElementById("step-5").style.display = "none";
    document.getElementById("step-6").style.display = "none";
    document.getElementById("step-7").style.display = "none";

}

function showAllSteps() {
    document.getElementById("step-1").style.display = "block";
    document.getElementById("step-2").style.display = "block";
    document.getElementById("step-3").style.display = "block";
    document.getElementById("step-4").style.display = "block";
    document.getElementById("step-5").style.display = "block";
    document.getElementById("step-6").style.display = "block";
    document.getElementById("step-7").style.display = "block";

}

function showStepOne() {

    disableAllSteps();
    document.getElementById("step-1").style.display = "block";
}

function showStepTow() {

    disableAllSteps();
    document.getElementById("step-2").style.display = "block";
}

function showStepThree() {

    disableAllSteps();
    document.getElementById("step-3").style.display = "block";
}

function showStepFour() {

    disableAllSteps();
    document.getElementById("step-4").style.display = "block";
}

function showStepFive() {
    disableAllSteps();
    document.getElementById("step-5").style.display = "block";
}

function showStepSix() {
    disableAllSteps();
    document.getElementById("step-6").style.display = "block";

}

function showStepSeven() {
    LO.summerySet();
    document.getElementById("step-7").style.display = "block";
}

function defaultColourForSteps() {

    document.getElementById('wstep').style.backgroundColor = "#34495E";
    document.getElementById('wstep2').style.backgroundColor = "#34495E";
    document.getElementById('wstep3').style.backgroundColor = "#34495E";
    document.getElementById('wstep4').style.backgroundColor = "#34495E";
    document.getElementById('wstep5').style.backgroundColor = "#34495E";
    document.getElementById('wstep6').style.backgroundColor = "#34495E";
    document.getElementById('wstep7').style.backgroundColor = "#34495E";
}

jsreportInits = function () {
    LO.collect_purchasing_cost();
    LO.land_preperation_cost();
    LO.media_cost();
    LO.resale_cost();

    var Local_Authority = "✘";
    var Tea_Board = "✘";
    var Rubber_Board = "✘";
    var Coconut_Board = "✘";
    var Street_Line = "✘";
    var Title_Report = "✘";
    var Perimeter_Plan = "✘";
    var nbro = "✘";
    var uda = "✘";
    var Enviromental = "✘";
    var Municipal_Council = "✘";
    var Pradeshiya_Sabha = "✘";
    if ($('#check_local_visiting').is(':checked')){Local_Authority = "✔"};
    if ($('#check_approval_tea').is(':checked')){Tea_Board = "✔"};
    if ($('#check_approval_rubber').is(':checked')){Rubber_Board = "✔"};
    if ($('#check_approval_coconut').is(':checked')){Coconut_Board = "✔"};
    if ($('#check_street_line').is(':checked')){Street_Line = "✔"};
    if ($('#check_title_report').is(':checked')){Title_Report = "✔"};
    if ($('#check_perimeter_plan').is(':checked')){Perimeter_Plan = "✔"};
    if ($('#check_NBRO').is(':checked')){nbro = "✔"};
    if ($('#check_UDA').is(':checked')){uda = "✔"};
    if ($('#check_enviromental').is(':checked')){Enviromental = "✔"};
    if ($('#check_muncipal').is(':checked')){Municipal_Council = "✔"};
    if ($('#check_pradeshiya_sabha').is(':checked')){Pradeshiya_Sabha = "✔"};

    var data = {

        "land": {
            "name": $('#txtLandName').val(),
            "area": document.getElementById("area").value,
            "auth-area": $('#txtLocalAuthorityArea').val(),
            "auth": $('#txtLocalAuthority').val(),
            "lo_nic": $('#txtOwnerNIC').val(),
            "lo_name": $('#txtOwnerName').val(),
            "lo_contact": $('#txtOwnerContact').val(),
            "lo_address": document.getElementById("txtOwnerAddress").value,
            "lo_location": document.getElementById("txtLocation").value,
            "ex_A": $('#txtA').val(),
            "ex_R": $('#txtR').val(),
            "ex_P": $('#txtP').val(),
            "TotalInPurchase": $('#txtTotalInPurchase').val(),
            "Roadways": $('#txtRoadways').val(),
            "Reservation": $('#txtReservation').val(),
            "SellableArea": $('#txtSellableArea').val(),
            "OriginalPrice": $('#txtOriginalPrice').val(),
            "NegotiatedPrice": $('#txtNegotiatedPrice').val(),
            "PriceAndCommission": $('#txtPriceAndCommission').val()
        },
        "document": {
            "Local_Authority":Local_Authority,
            "Tea_Board": Tea_Board,
            "Rubber_Board": Rubber_Board,
            "Coconut_Board": Coconut_Board,
            "Street_Line": Street_Line,
            "Title_Report": Title_Report,
            "Perimeter_Plan": Perimeter_Plan,
            "nbro": nbro,
            "uda": uda,
            "Enviromental": Enviromental,
            "Municipal_Council": Municipal_Council,
            "Pradeshiya_Sabha": Pradeshiya_Sabha
        },
        "Introducer": {
            "NIC": $('#txtBrokerNIC').val(),
            "Name": $('#txtBrokerName').val(),
            "Address": $('#txtBrokerAddress').val(),
            "Contact": $('#txtBrokerContact').val(),
            "Commission": $('#txtBrokerCommission').val(),
            "Remarks": $('#txtBrokerRemarks').val(),
        },
        "Purchasing": {
            "Price": $.session.get("1.1.1_price"),
            "Extracts": $.session.get("1.1.2_extracts"),
            "Valuation_fee": $.session.get("1.1.3_valuation"),
            "Title_Insurance": $.session.get("1.1.4_title_Insurance"),
            "Title_Report": $.session.get("1.1.5_title_Report"),
            "Stamp_fees": $.session.get("1.1.6_stamp_fees"),
            "Legal_fees": $.session.get("1.1.7_legle_fees"),
            "Sub_Total": $('#txtPurSubTotal').val(),
        },
        "Surveying": {
            "Perimeter": $.session.get("1.2.1_perimeter"),
            "Blocking_Out": $.session.get("1.2.2_blocking_out"),
            "Block_Plan": $.session.get("1.2.3_block_Plan"),
            "Sub_Total": $('#txtSurSESubTotal').val(),
        },
        "Approval": {
            "uda": $.session.get("1.3.1_UDA"),
            "nbro": $.session.get("1.3.2_NBRO"),
            "Perasari_Charges": $.session.get("1.3.3_perasari_charges"),
            "Town_Planner": $.session.get("1.3.4_town_planer"),
            "Sub_Total": $('#txtAppSubTotal').val(),
        },
        "purchasing_Other": {
            "Broker_Charge": $.session.get("1.4.1_Broker_charge"),
            "Sub_Total": $('#txtOEBrokerSubTotal').val(),
        },
        "Pur_Expense": {
            "cost1_desc1": $("#cost1_desc1").val(),
            "cost1_ex1": $("#cost1_ex1").val(),
            "cost1_desc2": $("#cost1_desc2").val(),
            "cost1_ex2": $("#cost1_ex2").val(),
            "cost1_desc3": $("#cost1_desc3").val(),
            "cost1_ex3": $("#cost1_ex3").val(),
            "cost1_desc4": $("#cost1_desc4").val(),
            "cost1_ex4": $("#cost1_ex4").val(),
            "cost1_desc5": $("#cost1_desc5").val(),
            "cost1_ex5": $("#cost1_ex5").val(),
            "cost1_desc6": $("#cost1_desc6").val(),
            "cost1_ex6": $("#cost1_ex6").val(),
        },
        //////////////////////////
        "land_prepreation": {
            "creating": $.session.get("2.1.1_cleaning"),
            "jcb": $.session.get("2.1.2_jcb"),
            "dozer": $.session.get("2.1.3_dozer"),
            "tipper": $.session.get("2.1.4_transport"),
            "drilling": $.session.get("2.1.5_drilling"),
            "finishing": $.session.get("2.1.6_finishing_the_land"),
            "Concrete_Poles": $.session.get("2.1.7_concrete_poles"),
            "Wooden_Poles": $.session.get("2.1.8_wooden_poles"),
            "Labour_Charges": $.session.get("2.1.9_labour_charges"),
            "Staff_Welfare": $.session.get("2.1.10_staff_welfare"),
            "Labour_Welfare": $.session.get("2.1.11_labour_welfare"),
            "sub": $("#txtLPCSubTotal").val(),
        },
        "land_prepreation_Construction": {
            "side_drains": $.session.get("2.2.1_side_drains"),
            "Culverts": $.session.get("2.2.2_culverts"),
            "Concerting": $.session.get("2.2.3_concerting"),
            "Tarring": $.session.get("2.2.4_tarring"),
            "Barbwired": $.session.get("2.2.5_barbwired"),
            "Parapet_Wall": $.session.get("2.2.6_parapet"),
            "Water_Project": $.session.get("2.2.7_water"),
            "Project_Officer": $.session.get("2.2.8_project_office"),
            "sub": $("#txtCCSubTotal").val(),
        },
        "land_prepreation_PI": {
            "Main_Electricity": $.session.get("2.3.1_main_electricity"),
            "Main_Water_Supply": $.session.get("2.3.2_main_water_supply"),
            "sub": $("#txtPISubTotal").val(),
        },
        "land_prepreation_Traveling": {
            "Project_Manager": $.session.get("2.4.1_project_manager"),
            "Senior_Manager": $.session.get("2.4.2_senior_manager"),
            "Sales_Manager": $.session.get("2.4.3_sales_manager"),
            "Project_Officer1": $.session.get("2.4.4_project_officer1"),
            "sub": $("#txtTESubTotal").val(),
        },
        "land_prepreation_Telephone": {
            "Project_Manager": $.session.get("2.5.1_project_manager"),
            "Senior_Manager": $.session.get("2.5.2_senior_manager"),
            "Sales_Manager": $.session.get("2.5.3_sales_manager"),
            "Project_Officer1": $.session.get("2.5.4_project_officer1"),
            "Project_Officer2": $.session.get("2.5.5_project_officer2"),
            "sub": $("#txtTELSubTotal").val(),
        },
        "land_prepreation_Other": {
            "Land_Name_Board": $.session.get("2.6.1_land_name_bord"),
            "Project_Maintenance": $.session.get("2.6.2_project_maintenance"),
            "Entertainment": $.session.get("2.6.3_entertainment"),
            "Unforseen": $.session.get("2.6.4_unforseen"),
            "Re_Sale": $.session.get("2.6.5_resale"),
            "sub": $("#txtOESubTotal").val(),
        },
        "land_prepreation_Extra": {
            "desc1": $("#dev_other_txt1").val(),
            "cost1": $("#dev_other1").val(),
            "desc2": $("#dev_other_txt2").val(),
            "cost2": $("#dev_other2").val(),
            "desc3": $("#dev_other_txt3").val(),
            "cost3": $("#dev_other3").val(),
            "desc4": $("#dev_other_txt4").val(),
            "cost4": $("#dev_other4").val(),
            "desc5": $("#dev_other_txt5").val(),
            "cost5": $("#dev_other5").val(),
            "desc6": $("#dev_other_txt6").val(),
            "cost6": $("#dev_other6").val(),
            "sub": $("#devEx").val(),
        },
        /////////////////////////////////

        "Media": {
            "Recording_Radio": $.session.get("3.1.1_recording_radio"),
            "Broadcasting_Radio": $.session.get("3.1.2_broadcasting_radio"),
            "Artwork_Press": $.session.get("3.1.3_artwork_press"),
            "Paper_Advertisments": $.session.get("3.1.4_paper_advertisment"),
            "Artwork_TV": $.session.get("3.1.5_artwork_tv"),
            "Recording_TV": $.session.get("3.1.6_recording_tv"),
            "Telecasting_TV": $.session.get("3.1.7_telecasting_tv"),
            "Internet": $.session.get("3.1.8_internet"),
            "sub": $('#txt_media_expenses_SubTotal').val(),
        },
        "Media_Banner": {
            "artwork": $.session.get("3.2.1_artwork"),
            "printing": $.session.get("3.2.2_printing"),
            "approval_and_hanging": $.session.get("3.2.3_approval_and_hanging"),
            "Hoardings": $.session.get("3.2.4_hoardings"),
            "P_P_Boards": $.session.get("3.2.5_pp_boards"),
            "Posters": $.session.get("3.2.6_poster"),
            "Stickers": $.session.get("3.2.7_stickers"),
            "Day_Cards": $.session.get("3.2.8_day_cards"),
            "Facility_Board": $.session.get("3.2.9_facility_board"),
            "sub": $('#txtMEBSubTotal').val(),
        },
        "Media_Mobile_Unit": {
            "Artwork": $.session.get("3.3.1_artwork"),
            "Recordings": $.session.get("3.3.2_recording"),
            "Production": $.session.get("3.3.3_production"),
            "Operation_Expenses": $.session.get("3.3.4_operation_expenses"),
            "Safari_Vehicles": $.session.get("3.3.5_safari_expenses"),
            "Sub": $('#txtPICSubTotal').val(),
        },
        "Media_Leaflet": {
            "Artwork": $.session.get("3.4.1_artwork"),
            "Printing": $.session.get("3.4.2_printing"),
            "Distribution": $.session.get("3.4.3_distribution"),
            "sub": $('#txtMELeafletSubTotal').val(),
        },
        "Media_other": {
            "Sale_Initiation": $.session.get("3.5.1_sales_initiation"),
            "Unforseen_Expenses": $.session.get("3.5.2_unforseen_expenses"),
            "General_Advertising": $.session.get("3.5.3_general_advertising"),
            "sub": $('#txtMEOSubTotal').val(),
        },
        "Media_Extra": {
            "desc1": $("#ME2").val(),
            "cost1": $("#txtme2").val(),
            "desc2": $("#ME3").val(),
            "cost2": $("#txtme3").val(),
            "desc3": $("#ME1").val(),
            "cost3": $("#txtme1").val(),
            "desc4": $("#ME4").val(),
            "cost4": $("#txtme4").val(),
            "desc5": $("#ME5").val(),
            "cost5": $("#txtme5").val(),
            "desc6": $("#ME6").val(),
            "cost6": $("#txtme6").val(),
            "sub": $("#txtMESubTotal").val(),
        },
        /////////////////////////////////
        "Resale1": {
            "banner": $.session.get("4.1.1_banner"),
            "banner_approval": $.session.get("4.1.2_banner_approvals"),
            "banner_hanging": $.session.get("4.1.3_banner_hanging"),
            "leaflet_printing": $.session.get("4.1.4_leaflet_printing"),
            "leaflet_distribution": $.session.get("4.1.5_leaflet_distribution"),
            "paper_advertistment": $.session.get("4.1.6_paper_advertisment"),
            "sub": $('#txtRCSubtotal').val(),
        },
        "Resale2": {
            "banner": $.session.get("5.1.1_banner"),
            "banner_approval": $.session.get("5.1.2_banner_approvals"),
            "banner_hanging": $.session.get("5.1.3_banner_hanging"),
            "leaflet_printing": $.session.get("5.1.4_leaflet_printing"),
            "leaflet_distribution": $.session.get("5.1.5_leaflet_distribution"),
            "paper_advertistment": $.session.get("5.1.6_paper_advertisment"),
            "sub": $('#txtRC2Subtotal').val(),
        },
        "Resale_Extra": {
            "desc1": $("#txtreex1").val(),
            "cost1": $("#reex1").val(),
            "desc2": $("#txtreex2").val(),
            "cost2": $("#reex2").val(),
            "desc3": $("#txtreex3").val(),
            "cost3": $("#reex3").val(),
            "desc4": $("#txtreex4").val(),
            "cost4": $("#reex4").val(),
            "desc5": $("#txtreex5").val(),
            "cost5": $("#reex5").val(),
            "desc6": $("#txtreex6").val(),
            "cost6": $("#reex6").val(),
            "sub": $("#resale_ex").val(),
        },
        "sum": {
            "Resale_01_Expenses": $("#txtResaleExpenses").val(),
            "Resale_01_Cost": $("#txtResaleCostPerch").val(),
            "Resale_02_Expenses": $("#txtResale02Expenses").val(),
            "Resale_02_Cost": $("#txtResale02CostPerch").val(),
            "Other_Expenses": $("#txtResaleOtherExpenses").val(),
            "Other_Cost": $("#txtResaleOtherCosts").val(),
            "Total_Cost": $("#txtProject").val(),
            "Cost_Of_Capital": $("#txtCostOfCapital").val(),
            "Description": $("#txtResaleDescription").val(),
            "Total_Cost_of_Project": $("#txtTotalCostOfProject2").val(),
            "Total_Cost_perch": $("#txtCostPerch2").val(),

        },
        "Profitability": {
            "Cash_Flow_Period": $("#txtSPCashflow").val(),
            "Total_Sales": $("#txtSPTotalSale").val(),
            "Tax_Levies": $("#txtSPTax").val(),
            "Net_Proceeds": $("#txtSPNetProceeds").val(),
            "Total_Cost": $("#txtSPTotalCost").val(),
            "Gross_Profit": $("#txtSPGrossProfit").val(),
            "Incentives": $("#txtSPIncentives").val(),
            "Net_Profit": $("#txtSPNetProfit").val(),
            "ROI": $("#txtSPROI").val(),
            "Profit_Ratio": $("#txtSPProfitRatio").val(),
        },
        "Financial_Overview": {
            "Cash_Flow_Period": document.getElementById("txtSPCashflow").innerText,
            "purchasing_costs": document.getElementById("sum_purchasing_costs").innerText,
            "Development_Cost": document.getElementById("sum_development_cost").innerText,
            "Advertising_Expenses": document.getElementById("sum_advertising_expenses").innerText,
            "Resale_01_expenses": document.getElementById("sum_resale_01").innerText,
            "Resale_02_expenses": document.getElementById("sum_resale_02").innerText,
            "Cost_Of_Money": document.getElementById("sum_cost_of_money").innerText,
            "Taxes": document.getElementById("sum_tax").innerText,
            "Incentives": document.getElementById("sum_incentives").innerText,
            "Total_Costs": document.getElementById("sum_total").innerText,

            "Sale_Price": document.getElementById("sum_sales_price").innerText,
            "Total_Cost": document.getElementById("sum_tot_cost").innerText,
            "Net_Profit": document.getElementById("sum_net_profit").innerText,
            "ROI": document.getElementById("sum_roi").innerText,

            "Prepared_By": $("#txtSumCashFolwPeriod").val(),


        },
        "purchaseData": [
            {
                "no_of_purchase": "1",
                "cost_per_purch": "5000",
                "sub_cost": "5000",
            },
            {
                "no_of_purchase": "1",
                "cost_per_purch": "5000",
                "sub_cost": "5000",
            }
        ],
        "tbl_foreign": [
            {
                "no": "1",
                "Developer": "5000",
                "Project_Name": "5000",
                "Commenced_Date": "1",
                "No_of_Lots": "5000",
                "Unsold_Lots": "5000",
                "Remarks": "5000",
                "Area": "5000",
            },
            {
                "no": "1",
                "Developer": "5000",
                "Project_Name": "5000",
                "Commenced_Date": "1",
                "No_of_Lots": "5000",
                "Unsold_Lots": "5000",
                "Remarks": "5000",
                "Area": "5000",
            }
        ],
        "tbl_local_project": [
            {
                "no": "1",
                "Project_Name": "5000",
                "Commenced_Date": "1",
                "No_of_Lots": "5000",
                "Unsold_Lots": "5000",
            },
            {
                "no": "1",
                "Project_Name": "5000",
                "Commenced_Date": "1",
                "No_of_Lots": "5000",
                "Unsold_Lots": "5000",
            }
        ],
        "other_doc": []
    };

    for(var i = 0 ; i < other.length;i++){
        data["other_doc"].push({"no": "OD-"+(i+1), "doc": other[i]});
    }


    var tab = document.getElementById('sales_tbl');
    var l = tab.rows.length;
    var d = {};
    var ss = '';
    var x = '';
    var y = '';
    var tot = 0;
    for (var i = 1; i < l; i++) {
        var tr = tab.rows[i];

        var cll = tr.cells[0];
        x = cll.innerText;

        var cll = tr.cells[1];
        y = cll.innerText;

        var cll = tr.cells[2];
        ss = cll.innerText;

        data["purchaseData"].push({"no_of_purchase": x, "cost_per_purch": parseFloat(y), "sub_cost": parseFloat(ss)});
    }

    var tab = document.getElementById('tbl_foreign_proj');
    var l = tab.rows.length;
    var d = {};
    var ss = '';
    var x = '';
    var y = '';
    var rr = '';
    var cc = '';
    var gg = '';
    var hh = '';
    var ff = '';
    var tot = 0;
    for (var i = 1; i < l; i++) {
        var tr = tab.rows[i];

        var cll = tr.cells[0];
        x = cll.innerText;

        var cll = tr.cells[1];
        y = cll.innerText;

        var cll = tr.cells[2];
        ss = cll.innerText;

        var cll = tr.cells[3];
        rr = cll.innerText;

        var cll = tr.cells[4];
        cc = cll.innerText;

        var cll = tr.cells[5];
        ff = cll.innerText;

        var cll = tr.cells[6];
        gg = cll.innerText;

        var cll = tr.cells[7];
        hh = cll.innerText;

        data["tbl_foreign"].push({"no": x, "Developer": y, "Project_Name": ss,"Commenced_Date": rr, "No_of_Lots": cc, "Unsold_Lots": ff,"Remarks": gg, "Area": hh});
    }

    var tab = document.getElementById('tbl_local_project');
    var l = tab.rows.length;
    var d = {};
    var v = '';
    var b = '';
    var n = '';
    var m = '';
    var k = '';
    for (var i = 1; i < l; i++) {
        var tr = tab.rows[i];

        var cll = tr.cells[0];
        v = cll.innerText;

        var cll = tr.cells[1];
        b = cll.innerText;

        var cll = tr.cells[2];
        n = cll.innerText;

        var cll = tr.cells[3];
        m = cll.innerText;

        var cll = tr.cells[4];
        k = cll.innerText;


        data["tbl_local_project"].push({"no": v, "Project_Name": b, "Commenced_Date": n,"No_of_Lots": m, "Unsold_Lots": k});
    }



    // console.log($('#check_local_visiting').is(':checked'));
    var request = {
        template: {
            name: 'LAND'
        },
        data: data
    };
    jsreport.serverUrl = "https://akvasoft.jsreportonline.net";
    jsreport.render($("#placeholder"), request);
};

// $('#print').click(function () {
//     alert("ok");
//     jsreportInits();
// });



