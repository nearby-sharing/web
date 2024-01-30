---
title: "Technical"
layout: ~/layouts/MarkdownLayout.astro
---

## Discovery
The sender discovers capable devices via a bluetooth-low-enery (BLE) [beacon](/technical/discovery).

## Connection
The sender connects to the mac-address (specified in beacon) via `Rfcomm`. If a user entered the wrong address, the connection will fail but the receiving device can still be found as the beacon is visible anyway.

In order to connect two devices via the `cdp`-protocol the [connect messages](/technical/msgorder) have to be exchanged.
During a successful connection the [encryption](/technical/encryption) is established.

## Transport-Upgrade
After the connection is established the implementations exchange a list of possible alternative transports (e.g. `WiFi` or `WiFiDirect`) and try to upgrade to the faster transports (i.e. `WiFi`).
