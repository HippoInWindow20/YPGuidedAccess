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
        var parameters = ["youtube.com", "--profile-directory='Profile 1'"];
    else
        var parameters = ["--profile-directory='Profile 1'"];
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
    var parameters = ["meet.google.com/dju-eaxi-vne", "--profile-directory='Profile 1'"];
    child(executablePath, parameters, function(err, data) {
        console.log(err)
        console.log(data.toString());
    });
}