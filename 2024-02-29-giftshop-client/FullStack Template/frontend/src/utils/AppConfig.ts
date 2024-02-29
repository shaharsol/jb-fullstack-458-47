class AppConfig {
    public loremIpsumUrl = 'http://localhost:8082/api/lorem-ipsum';
    public successNotificationDuration = 2000;
    public errorNotificationDuration = 6000;
}

const appConfig = new AppConfig();
export default appConfig;