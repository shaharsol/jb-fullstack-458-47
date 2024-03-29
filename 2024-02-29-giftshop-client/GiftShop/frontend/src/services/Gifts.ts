import axios from "axios";
import Gift from "../models/Gift";
import appConfig from "../utils/AppConfig";


class Gifts {

    public async getByAudience(audienceId: number): Promise<Gift[]> {
        const response = await axios.get<Gift[]>(`${appConfig.giftsByAudienceUrl}/${audienceId}`);
        const gifts = response.data;
        return gifts;
    }

    public async add(gift: Gift): Promise<Gift> {
        const response = await axios.post<Gift>(appConfig.giftsUrl, gift);
        const addedGift = response.data;
        return addedGift;
    }

    public async remove(id: number): Promise<void> {
        console.log(id)
        await axios.delete(`${appConfig.giftsUrl}/${id}`);
    }


}

// singleton
const gifts = new Gifts();
export default gifts;