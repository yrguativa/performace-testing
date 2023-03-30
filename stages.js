import http from 'k6/http';
import { sleep } from 'k6';

// export const options = {
//     vus: 10,
//     duration: '10s'
// }

export const options = {
    stages: [
        {
            duration: '10s',
            target: 10
        },
        {
            duration: '10s',
            target: 10
        }
    ]
}


export default function () {
    let response = http.get('https://api.escuelajs.co/api/v1/products');

    sleep(1);
}