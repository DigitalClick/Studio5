document.addEventListener("deviceready", onDeviceReady, false);

//Activate :active state
document.addEventListener("touchstart", function() {
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

	run: function() {
		var that = this,
			openLocal = document.getElementById("openLocal"),
			openExternalInAppBrowser = document.getElementById("openExternalInAppBrowser"),
			openExternalPDF = document.getElementById("openExternalPDF"),
			openExternalInSystemBrowser = document.getElementById("openExternalInSystemBrowser");

			openLocal.addEventListener("click", that.openLocal);
			openExternalInAppBrowser.addEventListener("click", that.openExternalInAppBrowser);
			openExternalPDF.addEventListener("click", that.openExternalPDF);
			openExternalInSystemBrowser.addEventListener("click", that.openExternalInSystemBrowser);
	},

	openLocal: function() {
		window.open("img/ice.png", "_blank");
	},
 
	openExternalInAppBrowser:  function () {
        window.open("https://GoDigital.Accenture.com/Studio5/", "_blank");
	},
    //openExternalInAppBrowserGoDigital: function () {
    //    window.open("https://GoDigital.Accenture.com/Studio5/", "_blank");
    //},
	openExternalPDF:  function () {
		if (window.navigator.simulator === true) {
			alert("Not Supported in Simulator.");
		} else {
			window.open("http://www.telerik.com/whitepapers/appbuilder/approaching-mobile-understanding-the-three-ways-to-build-mobile-apps", "_blank");
		}
	},

	openExternalInSystemBrowser:function () {
		window.open("http://wiki.apache.org/cordova/InAppBrowser", "_system");
	}
}