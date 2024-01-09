import appConfig from "./AppConfig";

function getAbsoluteImageSrc(src: string | undefined): string {
    const originalUrl = new URL(src || '');
    return `${appConfig.apiBaseUrl}${originalUrl.pathname}`;
}

export default getAbsoluteImageSrc;