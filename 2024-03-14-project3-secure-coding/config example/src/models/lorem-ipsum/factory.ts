import Model from "./model";
import loremIpsum from "./mysql";

export default function getModel(): Model {
    return loremIpsum;
}