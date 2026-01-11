import {IUser} from "@/models/IUser";
import {IPost} from "@/models/IPost";

export const getAllUsers = (): Promise<IUser[]> => {
    return fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json());
}
export const getAllPosts = (): Promise<IPost[]> => {
    return fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json());
}