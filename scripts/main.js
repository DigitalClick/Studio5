document.addEventListener("deviceready", onDeviceReady, false);

//Activate :active state
document.addEventListener("touchstart", function () {
}, false);

function onDeviceReady() {
    var app;
    navigator.splashscreen.hide();
    app = new Application();
    app.run();
}

function Application() {
}

Application.prototype = {

    run: function () {
        var that = this,
            openExternalInAppBrowser = document.getElementById("openExternalInAppBrowser");
        openExternalInAppBrowser.addEventListener("click", that.openExternalInAppBrowser);
        window.open("https://GoDigital.Accenture.com/Studio5/", "_blank", "toolbar=no,location=no");
        //openLocal = document.getElementById("openLocal"),
        //openExternalPDF = document.getElementById("openExternalPDF"),
        //openExternalInSystemBrowser = document.getElementById("openExternalInSystemBrowser");

        //openLocal.addEventListener("click", that.openLocal);
        //openExternalPDF.addEventListener("click", that.openExternalPDF);
        //openExternalInSystemBrowser.addEventListener("click", that.openExternalInSystemBrowser);
    },

    //openLocal: function() {
    //	window.open("img/ice.png", "_blank");
    //},

    openExternalInAppBrowser: function () {
        window.open("https://GoDigital.Accenture.com/Studio5/", "_blank", "toolbar=no,location=no");
    },

    //openExternalPDF:  function () {
    //	if (window.navigator.simulator === true) {
    //		alert("Not Supported in Simulator.");
    //	} else {
    //           window.open("https://GoDigital.Accenture.com/Studio5/", "_blank");
    //	}
    //},

    //openExternalInSystemBrowser:function () {
    //       window.open("https://GoDigital.Accenture.com/Studio5/", "_system");
    //}
}