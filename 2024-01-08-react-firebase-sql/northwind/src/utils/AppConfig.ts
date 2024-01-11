class AppConfig {
    public productsUrl = 'https://3.85.27.152/api/products';
    public employeesUrl = 'http://3.85.27.152/api/employees';
    public signupUrl = 'http://3.85.27.152/api/register';
    public loginUrl = 'http://3.85.27.152/api/login';
    public categoriesUrl = 'http://3.85.27.152/api/categories';
    public successNotificationDuration = 2000;
    public errorNotificationDuration = 6000;
}

const appConfig = new AppConfig();
export default appConfig;