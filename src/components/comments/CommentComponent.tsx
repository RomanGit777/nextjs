import {IComments} from "@/models/IComments";
import Link from "next/link";

interface CommentComponentProps {
    comment: IComments
}

export const CommentComponent = ({comment}: CommentComponentProps) => {
    return (
        <div>
            <Link href={{pathname: '/comments/'+comment.id, query: {data: JSON.stringify(comment)}}}>{comment.id}{comment.name}</Link>
        </div>
    );
};