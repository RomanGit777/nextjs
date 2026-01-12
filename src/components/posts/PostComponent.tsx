import {IPost} from "@/models/IPost";
import Link from "next/link";

interface PostComponentProps {
    post: IPost
}

export const PostComponent = ({post}: PostComponentProps) => {
    return (
        <div>
            <Link href={{pathname: '/posts/'+ post.id, query: {data: JSON.stringify(post)}}}>{post.id} {post.title}</Link>
        </div>
    );
};