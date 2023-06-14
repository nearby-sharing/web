---
title: "Discovery"
layout: ~/layouts/MarkdownLayout.astro
---

## Bluetooth (BLe Beacon)

### Public Beacon
| Type | Name | Description |
| - | - | - |
| `uint8` | ScenarioType | Must be `1` |
| `uint8` | DeviceType | enum |
| `uint8` | VersionAndFlags | `value >> 5 == 1` |
| `uint8` | _Reserved_ | ?? |
| `uint8[6]` | MacAddress | Rfcomm connection |
| `string` | DeviceName | Display-Name for discovery |

[See `CdpAdvertiseOptions`](https://github.com/ShortDevelopment/Nearby-Sharing-Windows/blob/c499d39cb121f49431ae43aa932957dc604bf6ea/ShortDev.Microsoft.ConnectedDevices/Transports/CdpAdvertiseOptions.cs)