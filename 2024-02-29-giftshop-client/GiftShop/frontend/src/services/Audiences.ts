import axios from "axios";
import Audience from "../models/Audience";
import appConfig from "../utils/AppConfig";


class Audiences {

    public async getAll(): Promise<Audience[]> {

        const response = await axios.get<Audience[]>(appConfig.audienceUrl);

        const audiences = response.data;

        return audiences;
    }


}

// singleton
const audiences = new Audiences();
export default audiences;