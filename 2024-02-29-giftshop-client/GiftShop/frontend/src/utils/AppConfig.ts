class AppConfig {
    public baseUrl = 'http://localhost:8082/api';
    public audienceUrl = `${this.baseUrl}/audiences`;
    public giftsUrl = `${this.baseUrl}/gifts`;
    public giftsByAudienceUrl = `${this.baseUrl}/gifts/audience`;
    public successNotificationDuration = 2000;
    public errorNotificationDuration = 6000;
}

const appConfig = new AppConfig();
export default appConfig;