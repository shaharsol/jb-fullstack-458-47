import appConfig from "./AppConfig";

function getAbsoluteImageSrc(src: string | undefined): string {
    // from the rest api
    // we will always get src as http://localhost:3030/something.jpg
    if (!src) return '';
    const originalUrl = new URL(src);
    return `${appConfig.apiBaseUrl}${originalUrl.pathname}`;
    // dev:
    // http://localhost:3030/something.jpg
    // prod:
    // https://murmuring-ocean-69355-1c3f77a1ae50.herokuapp.com/something.jpg
}

export default getAbsoluteImageSrc;