import { check } from "k6";
import http from "k6/http";

export const options = {
    vus: 20,
    duration: "15s",
    thresholds: {
        //http_req_duration: ["p(95)<500"],
        http_req_failed: ["rate<0.35"],

        /**
         *  Cuando pasado 10s se cumple la condición ( el percentil 95 > 200 ms) se aborta el test
         *  de lo contrario se continua
         */
        http_req_duration: [
            {
                threshold: "p(95)<200",
                abortonFail: true,
                delayAbortEval: "10s"
            }
        ],
    },
};

export default function () {
    const response = http.get(
        `https://api.escuelajs.co/api/v1/products/${Math.floor(Math.random() * 300)}`
    );
    check(response, {
        "status is 200": (r) => r.status === 200,
        "transaction is below 500ms": (r) => r.timings.duration < 500,
    });
}