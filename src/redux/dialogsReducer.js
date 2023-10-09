const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

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
    newMessageBody: '',
};
const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = state.newMessageBody;

            return {
                ...state,
                newMessageBody: '',
                messages: [ ...state.messages, {id: 6, message: body, sender: 'me'} ]
            };
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            };
        default:
            return state;
    }
}

export const sendMessage = () => ({ type: SEND_MESSAGE });

export const updateNewMessageBody = (body) =>
    ({ type: UPDATE_NEW_MESSAGE_BODY, body: body });

export default dialogsReducer;