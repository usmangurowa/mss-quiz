import { ipcMain } from "electron";

export default (window: Electron.CrossProcessExports.BrowserWindow) => {
  ipcMain.on("quit", () => {
    window.close();
  });

  ipcMain.on("minimize", () => {
    window.minimize();
  });

  ipcMain.on("maximize", () => {
    if (!window.isMaximized()) {
      window.maximize();
    } else {
      window.unmaximize();
    }
  });
};
