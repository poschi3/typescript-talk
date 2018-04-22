namespace k4cg.webserver {
    export interface Status {
        temp: number;
        isOpen: boolean;
    }
}

namespace k4cg.mqtt {
    export interface Status {
        channel: string;
        temp: number;
    }
}

let wsStatus: k4cg.webserver.Status = {
    temp: 23,
    isOpen: true
};

let mqttStatus: k4cg.mqtt.Status = {
    channel: "k4cg",
    temp: 23
}
