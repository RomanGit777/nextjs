import {SearchParams} from "next/dist/server/request/search-params";
import {FC} from "react";
import {IComments} from "@/models/IComments";

type CommentPageProps = {searchParams: Promise<SearchParams>}
const CommentPage: FC<CommentPageProps> = async ({searchParams}) => {
    const {data} = await searchParams;
    let obj = null;
    if (typeof data === 'string') {
        obj = JSON.parse(data) as IComments;
    }
    return (
        <div>{obj && <div>{obj.id} {obj.name}</div> }</div>
    );
};
export default CommentPage;