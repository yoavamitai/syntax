import { BrowserWindow } from '@electron/remote'
import { contextBridge } from 'electron'

if (!process.contextIsolated) {
  throw new Error('contentIsolation must be enabled in the BrowserWindow')
}

try {
  contextBridge.exposeInMainWorld('context', {
    // TODO: Add preload funtions
    closeWindow() {
      BrowserWindow.getFocusedWindow()?.close()
    },

    minimizeWindow() {
      BrowserWindow.getFocusedWindow()?.minimize()
    },

    toggleMaximizeWindow() {
      const maximizedState = BrowserWindow.getFocusedWindow()?.isMaximized()
      console.log(maximizedState)
      if (!maximizedState) {
        BrowserWindow.getFocusedWindow()?.maximize()
      } else {
        BrowserWindow.getFocusedWindow()?.restore()
      }
    }
  })
} catch (error) {
  console.error(error)
}
