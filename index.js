const { ipcRenderer } = require('electron')
var child = require('child_process').execFile;
var $ = require("jquery");

function doUnlock() {
    $(document.body).fadeOut(500)
    setTimeout(function() {
        ipcRenderer.invoke('do-unlock')
    }, 500)

}

function ITKiosk() {
    var executablePath = "C:\\ITKiosk\\KioskClient.exe";
    var parameters = [];
    child(executablePath, parameters, function(err, data) {
        console.log(err)
        console.log(data.toString());
    });
}

function chrome(arg) {
    var executablePath = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
    if (arg == "YT")
        var parameters = ["youtube.com", "--profile-directory=Default"];
	else if  (arg == "nba")
		var parameters = ["--app-id=pdgimjookceomihkhmfdmnohlmkafadb", "--profile-directory=Default"];
    else
        var parameters = ["--profile-directory=Default"];
    child(executablePath, parameters, function(err, data) {
        console.log(err)
        console.log(data.toString());
    });
}

function explorer() {
    var executablePath = "C:\\Windows\\explorer.exe";
    var parameters = ["file://"];
    child(executablePath, parameters, function(err, data) {
        console.log(err)
        console.log(data.toString());
    });
}

function meet() {
    var executablePath = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
    var parameters = ["meet.google.com/dju-eaxi-vne", "--profile-directory=Profile 1","--start-fullscreen"];
    child(executablePath, parameters, function(err, data) {
        console.log(err)
        console.log(data.toString());
    });
}

function cast() {
    var executablePath = "C:\\Program Files (x86)\\DearMob\\5KPlayer\\5KPlayer.exe";
    var parameters = [];
    child(executablePath, parameters, function(err, data) {
        console.log(err)
        console.log(data.toString());
    });
}

function whiteboard() {
    var executablePath = "C:\\Program Files\\EPSON Projector\\Easy Interactive Tools Ver.5\\EIN_TTW.exe";
    var parameters = [];
    child(executablePath, parameters, function(err, data) {
        console.log(err)
        console.log(data.toString());
    });
}

function switchLang(lang) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var y = document.getElementsByClassName("language")
            for (var j = 0; j < y.length; j++) {
                y[j].classList.remove("selected")
            }
            document.getElementById(lang).classList.add("selected")
            reinitialise(JSON.parse(xhttp.responseText)[lang])

        }
    };
    xhttp.open("GET", "lang.json", true);
    xhttp.send();

}

function toggleFeature(element) {
    var featureId = element.id

    if (featureId == "FEATURE_DARK") {

    } else if (featureId == "FEATURE_TUTORIAL") {
        var x = document.getElementsByClassName("buttonAlt secondaryAlt")

        if (element.dataset.state == "off") {
            for (var i = 0; i < x.length; i++) {
                $(x[i]).slideDown(300)
            }
        } else {
            for (var i = 0; i < x.length; i++) {
                $(x[i]).slideUp(300)
            }
        }
    }

    if (element.dataset.state == "off") {
        element.classList.add("selectedFree")
        element.dataset.state = "on"
    } else {
        element.classList.remove("selectedFree")
        element.dataset.state = "off"
    }
}

function reinitialise(singleLangJSON) {
    $(document.body).fadeOut(300)
    setTimeout(function() {
        $("#HEADER_TITLE").html(singleLangJSON.title)
        $("#MAIN_WINDOWS").html(singleLangJSON.buttons.unlock.main)
        $("#SUB_WINDOWS").html(singleLangJSON.buttons.unlock.secondary[0])
        $("#MAIN_ITKIOSK").html(singleLangJSON.buttons.ITKiosk.main)
        $("#SUB_ITKIOSK_1").html(singleLangJSON.buttons.ITKiosk.secondary[0])
        $("#SUB_ITKIOSK_2").html(singleLangJSON.buttons.ITKiosk.secondary[1])
        $("#MAIN_YOUTUBE").html(singleLangJSON.buttons.youtube.main)
        $("#SUB_YOUTUBE_1").html(singleLangJSON.buttons.youtube.secondary[0])
        $("#SUB_YOUTUBE_2").html(singleLangJSON.buttons.youtube.secondary[1])
        $("#MAIN_EXPLORER").html(singleLangJSON.buttons.explorer.main)
        $("#SUB_EXPLORER_1").html(singleLangJSON.buttons.explorer.secondary[0])
        $("#SUB_EXPLORER_2").html(singleLangJSON.buttons.explorer.secondary[1])
        $("#MAIN_CAST").html(singleLangJSON.buttons.cast.main)
        $("#SUB_CAST_1").html(singleLangJSON.buttons.cast.secondary[0])
        $("#SUB_CAST_2").html(singleLangJSON.buttons.cast.secondary[1])
        $("#MAIN_CHROME").html(singleLangJSON.buttons.chrome.main)
        $("#SUB_CHROME_1").html(singleLangJSON.buttons.chrome.secondary[0])
        $("#SUB_CHROME_2").html(singleLangJSON.buttons.chrome.secondary[1])
        $("#MAIN_MEET").html(singleLangJSON.buttons.meet.main)
        $("#SUB_MEET_1").html(singleLangJSON.buttons.meet.secondary[0])
        $("#SUB_MEET_2").html(singleLangJSON.buttons.meet.secondary[1])
        $("#MAIN_WHITEBOARD").html(singleLangJSON.buttons.whiteboard.main)
        $("#SUB_WHITEBOARD_1").html(singleLangJSON.buttons.whiteboard.secondary[0])
        $("#SUB_WHITEBOARD_2").html(singleLangJSON.buttons.whiteboard.secondary[1])
        $("#FEATURE_DARK").html(singleLangJSON.toggles[0])
        $("#FEATURE_TUTORIAL").html(singleLangJSON.toggles[1])
        $(document.body).fadeIn(300)
    }, 300)

}