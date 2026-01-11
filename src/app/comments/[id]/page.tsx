import { getComment } from "@/services/comments";

type CommentPageProps = {
    params: { id: string };
};

const CommentPage = async ({ params }: CommentPageProps) => {
    const comment = await getComment(params.id);

    return (
        <div>
            {comment.id} {comment.body}
        </div>
    );
};

export default CommentPage;
