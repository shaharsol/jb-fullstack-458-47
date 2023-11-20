import HttpMethods from "../enums/http-methods.js";

export default async function rest(method: HttpMethods, endpoint: string, data?: object) {
    const options = {
        method, // GET, POST, DELETE, UPDATE
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' },
    }
    const response = await fetch(endpoint, options);
    const json = await response.json();
    return json;
}