import {getAllUsers} from "@/services/api.services";
import {UserComponent} from "@/components/users/UserComponent";


export const UsersComponent = async() => {
    const users = await getAllUsers();

    return (
        <div>{users.map(user => (<UserComponent key={user.id} user={user} />))}</div>
    );
};