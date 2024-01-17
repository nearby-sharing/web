# Test in android emulator
## Stop Cdp Service (Windows only)
```powershell
Get-Service *cdp* | Stop-Service
```

## Free Udp socket (Windows only)
```cs
[LibraryImport("sbservicetrigger.dll")]
private static partial nint ServiceTriggerEnumerateTransferredSockets([MarshalAs(UnmanagedType.LPWStr)] string serviceName, out nint data);

[LibraryImport("sbservicetrigger.dll")]
private static partial nint ServiceTriggerRetrieveSockets([MarshalAs(UnmanagedType.LPWStr)] string serviceName, nint socket, out nint data);

public static void FreeSockets()
{
    ServiceTriggerEnumerateTransferredSockets("CDPSvc", out var socketEnumeration);
    ServiceTriggerRetrieveSockets("CDPSvc", socketEnumeration + 20, out _);
}
```

## Connect to emulator console
```shell
telnet localhost 5554
```

## Add redirects
```shell
redir add tcp:5040:5040
redir add udp:5050:5050
```