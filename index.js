const { ipcRenderer } = require('electron')
var child = require('child_process').execFile;

function doUnlock() {
    ipcRenderer.invoke('do-unlock').then((result) => {})
}

function ITKiosk() {

    var executablePath = "C:\\ITKiosk\\KioskClient.exe";
    var parameters = [];

    child(executablePath, parameters, function(err, data) {
        console.log(err)
        console.log(data.toString());
    });
}