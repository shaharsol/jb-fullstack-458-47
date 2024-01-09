class AppConfig {
    public apiBaseUrl = 'https://murmuring-ocean-69355-1c3f77a1ae50.herokuapp.com';
    public productsUrl = `${this.apiBaseUrl}/api/products`;
    public employeesUrl = `${this.apiBaseUrl}/api/employees`;
    public signupUrl = `${this.apiBaseUrl}/api/register`;
    public loginUrl = `${this.apiBaseUrl}/api/login`;
    public categoriesUrl = `${this.apiBaseUrl}/api/categories`;
    public successNotificationDuration = 2000;
    public errorNotificationDuration = 6000;
}

const appConfig = new AppConfig();
export default appConfig;