import DTO from './dto';

export default interface Model {
    getAll(): Promise<DTO[]>;
}