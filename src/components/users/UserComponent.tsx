import Link from "next/link";
import {IUser} from "@/models/IUser";

interface UserComponentProps {
    user: IUser
}

export const UserComponent = ({user}: UserComponentProps) => {
    return (
        <div> <Link href={'/users/' + user.id}>{user.name} {user.email}</Link> </div>
    );
};