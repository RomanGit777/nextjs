import {FC} from "react";
import {SearchParams} from "next/dist/server/request/search-params";
import {IPost} from "@/models/IPost";
type PostPageProps = {
    searchParams: Promise<SearchParams>;
}
const PostPage: FC<PostPageProps> = async ({searchParams}) => {
    const {data} = await searchParams;
    let obj = null;
    if (typeof data === 'string') {
        obj = JSON.parse(data) as IPost;
    }

    return (
        <div>
            {obj && <div>{obj.id} {obj.title}</div> }
        </div>
    );
};
export default PostPage;