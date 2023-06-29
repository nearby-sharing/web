---
title: "Patch CDPSvc"
layout: ~/layouts/MarkdownLayout.astro
---

```c++
((void*(*)(int))kernelbase!malloc)(8)
```

## Enable Transport
```c++
??$GetInstanceThrowIfNull@VISharedSettingsManager@shared@@@SharedInstanceManager@shared@@SA?AV?$shared_ptr@VISharedSettingsManager@shared@@@std@@H@Z
*((void**(*)(void**))0x123)
```

```c++
void *(__stdcall *GetGlobalSettings)(shared::SharedSettingsManager *this, shared::SharedGlobalSettings **result);
*((void**(*)(void*, void**))(0x123 + 16)
```

```c++
shared::SharedGlobalSettings::GetTransportEnabled
((void*(*)(void*, int, bool*)0x123 + 336)0x00007fffc3808280)
/* Rfcomm */4
/* BLeGatt */6
```

```c++
shared::SharedGlobalSettingsBase::SetTransportEnabled
((int(*)(void*, int, bool))0x123 + 968)
```

## Initialize Transport
```c++
??$GetInstanceThrowIfNull@VITransportManager@cdp@@@CDPInstanceManager@cdp@@SA?AV?$shared_ptr@VITransportManager@cdp@@@std@@H@Z
?InitializeTransports@TransportManager@cdp@@AEAAXXZ
```
