import {UserComponents} from "@/components/users/UserComponents";
import {getAllUsers} from "@/services/usersService";

export const UsersComponents = async () => {
    const users = await getAllUsers();
    return (
        <>
            {users.map((user) => <UserComponents key={user.id} user={user}/> )}

        </>
    );
};