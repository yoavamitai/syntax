import { contextBridge } from 'electron'

if (!process.contextIsolated) {
  throw new Error('contentIsolation must be enabled in the BrowserWindow')
}

try {
  contextBridge.exposeInMainWorld('context', {
    // TODO: Add preload funtions
  })
} catch (error) {
  console.error(error)
}
