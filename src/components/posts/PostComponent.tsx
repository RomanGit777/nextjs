import {IPost} from "@/models/IPost";
import Link from "next/link";

interface PostComponentProps {
    post: IPost
}

export const PostComponent = ({post}: PostComponentProps) => {
    return (
        <div><Link href={'/posts/'+post.id}>{post.id} {post.title}</Link></div>
    );
};