import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    let dialogsElements = props.state.dialogs.map(d =>
        (<DialogItem name={d.name} id={d.id} sex={d.sex}/>))
    let messagesElements = props.state.messages.map(m =>
        (<Message message={m.message} sender={m.sender}/>))

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                { messagesElements }
                <div className={s.newMessage}>
                    <textarea></textarea>
                    <button>Отправить</button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;