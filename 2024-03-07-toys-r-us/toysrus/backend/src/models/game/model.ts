import DTO from './dto';

export default interface Model {
    getAllForAudience (audienceId: number): Promise<DTO[]>;
    getCheaperThan (price: number): Promise<DTO[]>;
    add (game: DTO): Promise<DTO>;
    remove( id: number): Promise<boolean>;
}