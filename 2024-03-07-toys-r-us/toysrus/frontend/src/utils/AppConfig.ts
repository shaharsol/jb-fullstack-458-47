class AppConfig {
    public baseUrl = 'http://localhost:8082/api';
    public loremIpsumUrl = `${this.baseUrl}/lorem-ipsum`;
    public successNotificationDuration = 2000;
    public errorNotificationDuration = 6000;
}

const appConfig = new AppConfig();
export default appConfig;