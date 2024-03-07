import axios from "axios";
import LoremIpsumModel from "../models/LoremIpsum";
import appConfig from "../utils/AppConfig";


class LoremIpsum {

    public async getAll(): Promise<LoremIpsumModel[]> {

        const response = await axios.get<LoremIpsumModel[]>(appConfig.loremIpsumUrl);

        const loremIpsums = response.data;

        return loremIpsums;
    }

    public async add(loremIpsum: LoremIpsumModel): Promise<LoremIpsumModel> {

        const response = await axios.post<LoremIpsumModel>(appConfig.loremIpsumUrl, loremIpsum);

        const addedLoremIpsum = response.data;

        return addedLoremIpsum;
    }


}

// singleton
const loremIpsum = new LoremIpsum();
export default loremIpsum;