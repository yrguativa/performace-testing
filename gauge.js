import http from "k6/http";
import { Gauge } from "k6/metrics";

export const options = {
    vus: 100,
    duration: "30s",
};

const waitingTime = new Gauge("last_call_time");

export default function () {
    const request = http.get("https://api.escuelajs.co/api/v1/products");

    waitingTime.add(request.timings.waiting);
    console.log(waitingTime.name);
}