import DTO from './dto';

export default interface Model {
    getAllByAudience(audienceId: number): Promise<DTO[]>;
    add(gift: DTO): Promise<DTO>;
}