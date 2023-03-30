import http from "k6/http";
import { Trend } from "k6/metrics";

export const options = {
    vus: 100,
    duration: "30s",
};

const categoriesRrend = new Trend("waiting_time_categories");
const usersTrend = new Trend("waiting_time_users");
const productsTrend = new Trend("waiting_time_products");

export default function () {
    let categoriesResponse = http.get("https://api.escuelajs.co/api/v1/categories");
    categoriesRrend.add(categoriesResponse.timings.waiting);

    let usersResponse = http.get("https://api.escuelajs.co/api/v1/users");
    usersTrend.add(usersResponse.timings.waiting);

    let productsResponse = http.get("https://api.escuelajs.co/api/v1/products");
    productsTrend.add(productsResponse.timings.waiting);
}