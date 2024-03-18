class AppConfig {
    
}

class DevelopmentConfig extends AppConfig {
    public isDevelopment = true;
    public isProduction = false;
    public host = "localhost";
    public user = "root";
    public password = "";
    public database = "northwind";
    public port = 4000;
}

class ProductionConfig extends AppConfig {
    public isDevelopment = false;
    public isProduction = true;
    public host = "";
    public user = "";
    public password = "";
    public database = "";
    public port = 4000;
}

const appConfig = (process.env.NODE_ENV === "production") ? new ProductionConfig() : new DevelopmentConfig();

export default appConfig;