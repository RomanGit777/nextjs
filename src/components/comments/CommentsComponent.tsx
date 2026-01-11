import {CommentComponent} from "@/components/comments/CommentComponent";
import {getAllComments} from "@/services/api.services";

export const CommentsComponent = async () => {
   const comments = await getAllComments();
    return (
        <>{comments.map(comment => <CommentComponent key={comment.id} comment={comment}/>)}</>
    );
};