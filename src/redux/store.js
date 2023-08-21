import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";

let storage = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi! How are you?', likesCount: 12},
                {id: 2, message: 'It\'s my first post!', likesCount: 15},
                {id: 3, message: 'Wow!', likesCount: 177},
                {id: 4, message: 'Really!', likesCount: 3}
            ],
            newPostText: 'Learning React!'
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name:'Дима', sex:'m'},
                {id: 2, name:'Саша', sex:'m'},
                {id: 3, name:'Виктор', sex:'m'},
                {id: 4, name:'Света', sex:'w'},
                {id: 5, name:'Валерий', sex:'m'}
            ],
            messages: [
                {id: 1, message:'Hi!', sender: 'me'},
                {id: 2, message:'How are you?', sender: 'companion'},
                {id: 3, message:'Yo', sender: 'me'},
                {id: 4, message:'Yo', sender: 'me'},
                {id: 5, message:'Yo', sender: 'companion'}
            ],
            newMessageBody: '',
        },
        sidebar: {},
    },

    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._callSubscriber(this._state);
    }
}

export default storage;