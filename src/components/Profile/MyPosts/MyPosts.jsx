import React from "react";
import Post from './Post/Post';
import s from './MyPosts.module.css';

const MyPosts = (props) => {
    let postsElements  = props.allPosts.map(p => <Post message={p.message} likes={p.likesCount} />)

    let newPostElement = React.createRef();
    let addPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={s.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea onChange={ onPostChange } ref={newPostElement} value={props.newPostText} />
                </div>
                <div>
                    <button onClick={ addPost }>Add</button>
                </div>
            </div>
            <div className={s.posts}>
                { postsElements }
            </div>
        </div>
    );
}

export default MyPosts;