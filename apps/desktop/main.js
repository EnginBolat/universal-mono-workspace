const { app, BrowserWindow } = require('electron')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600
  })

  win.loadFile("src/index.html")
}

const electronReload = require('electron-reload');
electronReload(__dirname);

if (module.hot) {
  module.hot.accept();
}

app.whenReady().then(() => {
  createWindow()
})