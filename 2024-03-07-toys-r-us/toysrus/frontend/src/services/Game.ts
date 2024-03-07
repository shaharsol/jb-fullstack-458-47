import axios from "axios";
import Model from "../models/Game";
import appConfig from "../utils/AppConfig";


class Game {

    public async getAllForAudience(audienceId: number): Promise<Model[]> {

        const response = await axios.get<Model[]>(`${appConfig.gamesUrl}/audience/${audienceId}`);

        const games = response.data;

        return games;
    }

    public async getCheaperThan(price: number): Promise<Model[]> {

        const response = await axios.get<Model[]>(`${appConfig.gamesUrl}/cheaper-than/${price}`);

        const games = response.data;

        return games;
    }


    public async add(game: Model): Promise<Model> {

        const response = await axios.post<Model>(appConfig.gamesUrl, game);

        const addedGame = response.data;

        return addedGame;
    }

    public async remove(id: number): Promise<void> {

        await axios.delete(`${appConfig.gamesUrl}/${id}`);

    }

}

// singleton
const game = new Game();
export default game;