import { UploadedFile } from "express-fileupload";

export default interface DTO {
    id: number,
    name: string,
    price: number,
    stock: number,
    image: UploadedFile,
    imageName: string,
}