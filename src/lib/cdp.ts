// about://bluetooth-internals
// Gatt: BAD956B2-900A-45AD-B42F-

// WiFi-Direct Port: 5160
// CDPWiFiDirectNearshareMetadata

// Computer\HKEY_CURRENT_USER\SOFTWARE\Microsoft\Windows\CurrentVersion\CDP
// Computer\HKEY_LOCAL_MACHINE\SYSTEM\ControlSet001\Services\CDPSvc\Parameters

document
    .querySelector("#test")!
    .addEventListener("pointerup", function (event) {
        onButtonClick();
    });

(window as any).onButtonClick = onButtonClick;

async function onButtonClick() {
    await navigator.bluetooth.requestLEScan({
        filters: [
            {
                manufacturerData: [
                    {
                        companyIdentifier: 6, // Microsoft
                        dataPrefix: new Uint8Array([0x01]),
                    },
                ],
            },
        ],
        keepRepeatedDevices: true,
        optionalServices: ["BAD956B2-900A-45AD-B42F-B89A2A2579B5"],
    });
    console.log("Scan started");
    navigator.bluetooth.addEventListener(
        "advertisementreceived",
        (event) => {
            const data = event.manufacturerData.get(6);
            const beacon = Beacon.tryRead(data);
            if (beacon) {
                console.log({ event, beacon });

                handleDevice(event.device);
            }
        }
    );
}

async function handleDevice(device) {
    console.log({ device });
    await device.gatt.connect();
    const services = await device.gatt.getPrimaryService(
        "BAD956B2-900A-45AD-B42F-B89A2A2579B5"
    );
    console.log(services);
}

class Beacon {
    name = "";
    deviceType = 0;
    macAddress = "";

    /**
     * @param {DataView} data
     * @return {Beacon | null}
     */
    static tryRead(data) {
        if (!data) return null;

        const reader = new Reader(data);

        const scenarioType = reader.readByte();
        if (scenarioType != 1) return null;

        const deviceType = reader.readByte();

        const versionAndFlags = reader.readByte();
        if (versionAndFlags >> 5 != 1) return null; // wrong version

        const flags = versionAndFlags & 0x1f;
        if (flags >= 2) return null; // wrong flags

        /* Reserved */
        reader.readByte();

        const macAddress = MacAddress.fromBytes(
            reader.readBytes(6)
        );
        const name = Reader.bytesToString(reader.readToEnd());
        return {
            name,
            deviceType,
            macAddress,
        };
    }
}

class Reader {
    #buffer: DataView | null = null;
    #index = 0;

    constructor(buffer: DataView) {
        this.#buffer = buffer;
    }

    readByte() {
        const result = this.#buffer.getUint8(this.#index);
        this.#index++;
        return result;
    }

    readBytes(length: number): ArrayBuffer {
        const result = this.#buffer.buffer.slice(
            this.#index,
            this.#index + length
        );
        this.#index += length;
        return result;
    }

    readToEnd(): ArrayBuffer {
        const result = this.readBytes(
            this.#buffer.byteLength - this.#index
        );
        this.#index = this.#buffer.byteLength;
        return result;
    }

    static bytesToString(bytes: ArrayBuffer): string {
        return new TextDecoder().decode(bytes);
    }
}

class MacAddress {
    static fromBytes(bytes: ArrayBuffer): string {
        const reader = new Reader(new DataView(bytes));
        const segments = [];
        for (let i = 0; i < 6; i++) {
            segments.splice(
                0,
                0,
                reader.readByte().toString(16).padStart(2, "0")
            );
        }
        return segments.join(":");
    }
}