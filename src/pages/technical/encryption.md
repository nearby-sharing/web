---
title: "Encryption"
layout: ~/layouts/MarkdownLayout.astro
---

## 0. Derive shared secret
`sharedSecret: uint8[64]`   
...

## 1. Initialization Vector (IV)

| Algorithm | Key | Padding |
| - | - | - |
| AES CBC | `sharedSecret[16..32]` | None |

### Content
| Type | Name |
| - | - |
| `uint64` | SessionId |
| `uint32` | SequenceNumber |
| `uint16` | FragmentIndex |
| `uint16` | FragmentCount |

## 2. Encrypt message payload

| Algorithm | Key | Padding |
| - | - | - |
| AES CBC | `sharedSecret[0..16]` | PKCS7 |

### Content
| Type | Name |
| - | - |
| `uint32` | PayloadSize |
| `uint8[PayloadSize]` | RawPayload |

## 3. Adjust header
 - Add `SessionEncrypted` and `HasHMAC` flags
 - Adjust message length to encrypted payload

## 4. Calc `HMAC`

| Algorithm | Key |
| - | - |
| Sha256 | `sharedSecret[32..64]` |

 - Append `HMAC`
 - Increase message length by Hmac-Size.
