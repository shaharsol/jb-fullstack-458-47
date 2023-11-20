export default async function rest(method: string, endpoint: string, data?: object) {
    const options = {
        method,
    }
    const response = await fetch(endpoint, options);
    const json = await response.json();
    return json;
}