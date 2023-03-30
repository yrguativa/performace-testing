import http from 'k6/http';

export const options = {
    vus: 1,
    duration: '10m'
}

export default function () {
    let response = http.get('https://api.escuelajs.co/api/v1/products');
}