import React from "react";
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";

const MyPostsContainer = () => {
    return (
        // ! Обязательно { на следующей строчке после <StoreContext.Consumer>
        <StoreContext.Consumer>
            { (store) => {
                let addPost = () => {
                    store.dispatch(addPostActionCreator());
                }

                let onPostChange = (text) => {
                    let action = updateNewPostActionCreator(text);
                    store.dispatch(action);
                }

                return (<MyPosts updateNewPostText={onPostChange}
                         addPost={addPost}
                         posts={store.getState().profilePage.posts}
                         newPostText={store.getState().profilePage.newPostText}/>)
            }
        }
        </StoreContext.Consumer>
    );
}

export default MyPostsContainer;