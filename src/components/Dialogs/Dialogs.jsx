import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d =>
        (<DialogItem name={d.name} id={d.id} sex={d.sex}/>))
    let messagesElements = state.messages.map(m =>
        (<Message message={m.message} sender={m.sender}/>))

    let newMessageBody = state.newMessageBody;

    let sendMessage = () => {
        props.sendMessage();
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
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