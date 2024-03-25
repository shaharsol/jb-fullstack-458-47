class AppConfig {
    public productsUrl = 'http://localhost:8082/api/products';
    public employeesUrl = 'http://localhost:8082/api/employees';
    public signupUrl = 'http://localhost:8082/api/register';
    public loginUrl = 'http://localhost:8082/api/login';
    public categoriesUrl = 'http://localhost:8082/api/categories';
    public successNotificationDuration = 2000;
    public errorNotificationDuration = 6000;
}

const appConfig = new AppConfig();
export default appConfig;