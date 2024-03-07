import axios from "axios";
import Model from "../models/Audience";
import appConfig from "../utils/AppConfig";


class Audience {

    public async getAll(): Promise<Model[]> {

        const response = await axios.get<Model[]>(appConfig.audienceUrl);

        const audiences = response.data;

        return audiences;
    }

}

// singleton
const audience = new Audience();
export default audience;