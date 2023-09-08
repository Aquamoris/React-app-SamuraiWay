const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState =  {
    posts: [
        {id: 1, message: 'Hi! How are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post!', likesCount: 15},
        {id: 3, message: 'Wow!', likesCount: 177},
        {id: 4, message: 'Really!', likesCount: 3}
    ],
    newPostText: 'Learning React!'
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) { // Reducer стал чистой функцией – Pure function
        case ADD_POST: { // Для области видимости разных stateCopy через let, после будет рефакторинг
            let newPost = {
                id: 6,
                message: state.newPostText,
                likesCount: 0
            }
            let stateCopy = {...state};
            stateCopy.posts = [...state.posts]; // Обязательна глубокая копия после поверхностной
            stateCopy.posts.push(newPost);
            stateCopy.newPostText = '';
            return stateCopy;
        }
        case UPDATE_NEW_POST_TEXT: {
            let stateCopy = {...state}
            stateCopy.newPostText = action.newText;
            return stateCopy;
        }
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostActionCreator = (text) =>
    ({ type: UPDATE_NEW_POST_TEXT, newText: text });

export default profileReducer;