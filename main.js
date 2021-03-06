const { app, BrowserWindow } = require("electron");
const path = require("path");
const url = require("url");

let window;

function createWindow() {
  window = new BrowserWindow({ width: 1280, height: 720 });
  window.loadURL("http:localhost:3000");

  window.webContents.openDevTools();

  window.on("closed", () => {
    window = null;
  });
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (window === null) {
    createWindow();
  }
});
