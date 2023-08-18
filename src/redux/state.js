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
            ]
        }
    },

    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 6,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            }

            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText; //Разные actionы имеют разные свойства
            this._callSubscriber(this._state);
        }
    }

}
export default storage;