import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import AddMessageForm from "./AddMessageForm";

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d =>
        (<DialogItem name={d.name} id={d.id} key={d.id} sex={d.sex}/>))
    let messagesElements = state.messages.map(m =>
        (<Message message={m.message} sender={m.sender} key={m.id}/>))

    let sendMessage = (newMessage) => {
        props.sendMessage(newMessage);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                { messagesElements }
                <AddMessageForm
                    sendMessage={sendMessage}
                />
            </div>
        </div>
    );
}

export default Dialogs;