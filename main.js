const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        backgroundColor: "#fff",
        fullscreenable: true,
        fullscreen: true,
        simpleFullscreen: true,
        // frame: false,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            preload: path.join(__dirname, 'preload.js')
        }
    })

    win.loadFile('index.html')
    win.setFullScreen(true)
}

app.whenReady().then(() => {
    createWindow()
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin')
        app.quit()
})

ipcMain.handle('do-unlock', async(event, someArgument) => {
    app.quit()
})