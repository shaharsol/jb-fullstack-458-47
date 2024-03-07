import Model from "./model";
import game from "./mysql";

export default function getModel(): Model {
    return game;
}