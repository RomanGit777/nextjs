import {PostComponent} from "@/components/posts/PostComponent";
import {getAllPosts} from "@/services/api.services";

export const PostsComponent = async () => {
    const posts = await getAllPosts();
    return (
        <>{posts.map((post) => <PostComponent key={post.id} post={post}/>)}</>
    );
};