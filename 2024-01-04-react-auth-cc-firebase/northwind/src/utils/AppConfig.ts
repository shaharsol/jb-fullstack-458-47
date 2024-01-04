class AppConfig {
    public productsUrl = 'http://localhost:3030/api/products';
    public employeesUrl = 'http://localhost:3030/api/employees';
    public signupUrl = 'http://localhost:3030/api/register';
    public loginUrl = 'http://localhost:3030/api/login';
    public categoriesUrl = 'http://localhost:3030/api/categories';
    public successNotificationDuration = 2000;
    public errorNotificationDuration = 6000;
}

const appConfig = new AppConfig();
export default appConfig;