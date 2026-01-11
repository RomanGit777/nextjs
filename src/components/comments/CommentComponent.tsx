import {IComments} from "@/models/IComments";
import Link from "next/link";

interface CommentComponentProps {
    comment: IComments
}

export const CommentComponent = ({comment}: CommentComponentProps) => {
    return (
        <div><Link href={'/comments/'+comment.id}>{comment.id}{comment.name}</Link></div>
    );
};