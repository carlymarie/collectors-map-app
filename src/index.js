const { app, BrowserWindow, Menu } = require('electron')
require('update-electron-app')({
    repo: 'carlymarie/collectors-map-app',
    updateInterval: '1 hour',
    logger: require('electron-log')
})
if (require('electron-squirrel-startup')) app.quit()
// if first time install on windows, do not run application, rather
// let squirrel installer do its work
const setupEvents = require('../installers/setup-events')
if (setupEvents.handleSquirrelEvent()) {
    process.exit()
}
// Run create window function
app.on('ready', () => {
    // Create Browser Window
    const win = new BrowserWindow({
        width: 1280,
        height: 720
    })

    // Remove Menu
    Menu.setApplicationMenu(null)

    //win.webContents.openDevTools()
    win.loadURL('https://jeanropke.github.io/RDR2CollectorsMap/')
})
