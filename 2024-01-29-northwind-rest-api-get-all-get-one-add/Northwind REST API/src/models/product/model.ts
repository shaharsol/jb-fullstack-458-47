import DTO from "./dto";

export default interface Model {
    getAll(): Promise<DTO[]>;
    getOne(id: number): Promise<DTO>;
    add(product: DTO): Promise<DTO>;
}