import Model from "./model";
import user from "./mysql";

export default function getModel(): Model {
    return user;
}