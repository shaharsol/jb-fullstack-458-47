import DTO from './dto';

export default interface Model {
    loremIpsum(loremIpsum: DTO): Promise<DTO>;
}