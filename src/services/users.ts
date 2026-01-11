import {IUser} from "@/models/IUser";
import {baseUrl} from "@/services/base";

export const getUsers = async (): Promise<IUser[]> => {
    const users= await fetch(baseUrl+'/users').then(res => res.json())
    return users;
}