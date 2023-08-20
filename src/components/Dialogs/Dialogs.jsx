import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogsReducer";

const Dialogs = (props) => {
    let dialogsElements = props.state.dialogs.map(d =>
        (<DialogItem name={d.name} id={d.id} sex={d.sex}/>))
    let messagesElements = props.state.messages.map(m =>
        (<Message message={m.message} sender={m.sender}/>))

    let newMessageBody = props.state.newMessageBody;

    let sendMessage = () => {
        props.dispatch(sendMessageCreator())
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.dispatch(updateNewMessageBodyCreator(body))
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                { messagesElements }
                <div className={s.newMessage}>
                    <div>
                        <textarea onChange={ onNewMessageChange }
                                  value={ newMessageBody }
                                  placeholder='Enter your message'></textarea>
                    </div>
                    <div>
                        <button onClick={ sendMessage }>Отправить</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;