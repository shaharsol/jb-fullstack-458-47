class AppConfig {
    public productsUrl = 'http://localhost:3030/delay/api/products';
    public employeesUrl = 'http://localhost:3030/api/employees';
    public successNotificationDuration = 2000;
    public errorNotificationDuration = 6000;
}

const appConfig = new AppConfig();
export default appConfig;