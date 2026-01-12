import {FC} from "react";
import {IUser} from "@/models/IUser";
import {SearchParams} from "next/dist/server/request/search-params";

type Props = { searchParams: Promise<SearchParams> };
const UserIdPage: FC<Props> = async ({searchParams}) => {
    const {data} = await searchParams;
    let obj = null;
    if (typeof data === 'string') {
        obj = JSON.parse(data) as IUser;
    }
    return (
        <div>
            {obj && <div>{obj.id}{obj.name}</div>}
        </div>
    );
};
export default UserIdPage;