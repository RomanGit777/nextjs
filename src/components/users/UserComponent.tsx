import Link from "next/link";
import {IUser} from "@/models/IUser";

interface UserComponentProps {
    user: IUser
}

export const UserComponent = ({user}: UserComponentProps) => {
    return (
        <div>
            <Link href={{pathname: '/users/' + user.id.toString(), query: {data: JSON.stringify(user)}}}>{user.id} {user.name}</Link>
        </div>
    );
};