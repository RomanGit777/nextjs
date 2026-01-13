import {IUser} from "@/models/IUser";

interface UserComponentsProps {
    user: IUser
}

export const UserComponents = ({user}: UserComponentsProps) => {
    return (
        <div style={}>
            <p>Name: {user.name}</p>
            <p>User Name: {user.username}</p>
        </div>
    );
};