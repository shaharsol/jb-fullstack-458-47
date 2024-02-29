import axios from "axios";
import LoremIpsum from "../models/LoremIpsum";
import appConfig from "../utils/AppConfig";


class Products {

    public async loremIpsum(): Promise<LoremIpsum[]> {

        const response = await axios.get<LoremIpsum[]>(appConfig.loremIpsumUrl);

        const loremIpsums = response.data;

        return loremIpsums;
    }


}

// singleton
const loremIpsum = new LoremIpsum();
export default loremIpsum;