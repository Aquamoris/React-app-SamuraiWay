import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USERS_PROFILE = 'SET_USERS_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';

let initialState =  {
    posts: [
        {id: 1, message: 'Hi! How are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post!', likesCount: 15},
        {id: 3, message: 'Wow!', likesCount: 177},
        {id: 4, message: 'Really!', likesCount: 3}
    ],
    profile: null,
    status: ''
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                posts: [...state.posts, {id: state.posts.length+1, message: action.newPostText, likesCount: 0}]
            };
        }
        case DELETE_POST: {
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.postId)
            };
        }
        case SET_USERS_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        default:
            return state;
    }
}

export const addPost = (newPostText) => ({ type: ADD_POST, newPostText });

export const setUsersProfile = (profile) =>
    ({ type: SET_USERS_PROFILE, profile });
export const setStatus = (status) =>
    ({ type: SET_STATUS, status });

export const deletePost = (postId) =>
    ({type: DELETE_POST, postId})


export const getUserProfile = (userId) => {
    return (dispatch) => {
        usersAPI.getProfile(userId)
            .then(data => dispatch(setUsersProfile(data)));
    }
}

export const getUserStatus = (status) => {
    return (dispatch) => {
        profileAPI.getUserStatus(status)
            .then(data => dispatch(setStatus(data)));
    }
}

export const updateUserStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateUserStatus(status)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setStatus(status));
                }
            });
    }
}

export default profileReducer;