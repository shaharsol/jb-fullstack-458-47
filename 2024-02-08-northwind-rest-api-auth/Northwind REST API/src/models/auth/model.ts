import CredentialsDTO from './credentials-dto';
import UserDTO from './user-dto';

export default interface Model {
    login(credentials: CredentialsDTO): Promise<UserDTO>;
    signup(user: UserDTO): Promise<UserDTO>;
}