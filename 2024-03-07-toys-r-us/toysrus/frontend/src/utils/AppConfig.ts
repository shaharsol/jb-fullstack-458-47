class AppConfig {
    public baseUrl = 'http://localhost:8080/api';
    public audienceUrl = `${this.baseUrl}/audiences`;
    public gamesUrl = `${this.baseUrl}/games`;
    public successNotificationDuration = 2000;
    public errorNotificationDuration = 6000;
}

const appConfig = new AppConfig();
export default appConfig;