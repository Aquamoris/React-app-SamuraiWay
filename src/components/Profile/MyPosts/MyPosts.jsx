import React from "react";
import Post from './Post/Post';
import s from './MyPosts.module.css';
import NewPostForm from "./NewPostForm";

const MyPosts = React.memo((props) => {
    console.log('RENDER YO');
    let postsElements  = props.posts.map(p => <Post key={p.id} message={p.message} likes={p.likesCount} />)

    let onAddPost = (newPost) => {
        props.addPost(newPost);
    }

    return (
        <div className={s.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <NewPostForm
                    onAddPost={onAddPost}
                />
            </div>
            <div className={s.posts}>
                { postsElements }
            </div>
        </div>
    );
});

export default MyPosts;