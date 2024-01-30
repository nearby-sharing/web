---
title: "Enable logging"
layout: ~/layouts/MarkdownLayout.astro
---

## Android
Logging is currently enabled by default.

The logs can be found in `Internal Storage` > `Android/media/de.shortdev.nearby_sharing_windows/logs`

## Windows
Windows 10 / 11 has the Connected-Devices-Platform build-in:

Service: `CDPSvc`   
Settings directory: `%LOCALAPPDATA%\ConnectedDevicesPlatform\`    
Settings directory: `C:\Windows\ServiceProfiles\LocalService\AppData\Local\ConnectedDevicesPlatform`    

### Enable Logging
 1. Create `.\CDPGlobalSettings.cdp.override` with this content:
```json
{
   "TraceLog.EnabledHandlerTypes" : 255,
   "TraceLog.Level" : 100
}
```
 2. Run in powershell
```powershell
Get-Service *cdp* | Restart-Service
```
 3. See output at `.\CDPTraces.log`   

### Trace via pipe
```
\\\\.\\pipe\\CDPInOut
```
