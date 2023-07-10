import React from "react";
import s from './../Dialogs.module.css'

const Message = (props) => {
    let classMessage;
    props.sender === 'me' ? classMessage = s.fromMe : classMessage = s.fromCompanion;
    return (
        <div className={classMessage}>{props.message}</div>
    );
}

export default Message;