import axios from "axios";
import { CreateUserDto, UpdateUserDto } from "./dto";
import { CreateUserResponseEntity, UserEntity } from "./entities";


export class Users {

    private static SERVER_ENDPOINT = process.env.REACT_APP_API_ENDPOINT

    static async createUser(createUserDto: CreateUserDto) {
        const respone = await axios.post<CreateUserResponseEntity>(`${this.SERVER_ENDPOINT}/users`, createUserDto);

        return respone
    }

    static async updateUser(updateUserDto: UpdateUserDto) {
        const { id, successTaps } = updateUserDto;
        const respone = await axios.patch(`${this.SERVER_ENDPOINT}/users/${id}`, { successTaps });

        return respone
    }

    static async getUsers() {
        const respone = await axios.get<UserEntity[]>(`${this.SERVER_ENDPOINT}/users`)

        return respone;
    }
}