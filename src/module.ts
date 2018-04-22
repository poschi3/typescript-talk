import { Status as WsStatus } from "./webserver";
import { Status as MqttStatus } from "./mqtt";

let wsStatus: WsStatus = {
    temp: 23,
    isOpen: true
};

let mqttStatus: MqttStatus = {
    channel: "k4cg",
    temp: 23
}
