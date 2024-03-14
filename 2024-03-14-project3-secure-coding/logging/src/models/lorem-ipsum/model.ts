import DTO from './dto';
import Pagination from './pagination';

export default interface Model {
    loremIpsum(loremIpsum: DTO): Promise<DTO>;
    list(pagination: Pagination): Promise<DTO[]>;
}