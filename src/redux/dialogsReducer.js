const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState =  {
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
};
const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            return {
                ...state,
                messages: [ ...state.messages, {id: 6, message: action.newMessage, sender: 'me'} ]
            };
        default:
            return state;
    }
}

export const sendMessage = (newMessage) => ({ type: SEND_MESSAGE, newMessage });

export default dialogsReducer;