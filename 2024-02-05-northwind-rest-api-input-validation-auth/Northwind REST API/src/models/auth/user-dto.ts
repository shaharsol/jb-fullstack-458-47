import CredentialsDTO from './credentials-dto';

export default interface DTO extends CredentialsDTO{
    id: number;
    firstName: string;
    lastName: string;
    roleId: number;
}

export enum Roles {
    USER = 1,
    ADMIN = 2
}