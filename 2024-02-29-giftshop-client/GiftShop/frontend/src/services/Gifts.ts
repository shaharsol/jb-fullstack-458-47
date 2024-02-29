import axios from "axios";
import Gift from "../models/Gift";
import appConfig from "../utils/AppConfig";


class Gifts {

    public async getByAudience(audienceId: number): Promise<Gift[]> {

        const response = await axios.get<Gift[]>(`${appConfig.giftsByAudienceUrl}/${audienceId}`);

        const gifts = response.data;

        return gifts;
    }


}

// singleton
const gifts = new Gifts();
export default gifts;