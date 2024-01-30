---
title: "Discovery"
layout: ~/layouts/MarkdownLayout.astro
---

## Public Beacon
| Type | Name | Description |
| - | - | - |
| `uint8` | ScenarioType | Must be `1` |
| `uint8` | DeviceType | enum |
| `uint8` | VersionAndFlags | `value >> 5 == 1` |
| `uint8` | DeviceStatus | ignored |
| `uint8[6]` | MacAddress | Rfcomm connection |
| `string` | DeviceName | Display-Name for discovery |

[See `BLeBeacon.cs`](https://github.com/nearby-sharing/android/blob/ba8c66bd6f0a0d2ad8852969f01b427e75e653a2/ShortDev.Microsoft.ConnectedDevices/Transports/BLeBeacon.cs)
