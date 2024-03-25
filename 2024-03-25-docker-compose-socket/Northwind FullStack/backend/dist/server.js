"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
process.env['NODE_CONFIG_DIR'] = path_1.default.resolve(__dirname, 'config');
const config_1 = __importDefault(require("config"));
const app_1 = __importDefault(require("./app"));
app_1.default.listen(config_1.default.get('app.port'), () => {
    console.log(`${config_1.default.get('app.name')} is running on localhost:${config_1.default.get('app.port')}`);
});
