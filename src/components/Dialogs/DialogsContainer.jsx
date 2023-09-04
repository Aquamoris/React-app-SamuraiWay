import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = () => {
    // ! Обязательно { на следующей строчке после <StoreContext.Consumer>
    return <StoreContext.Consumer>
        { (store) => {
            let dialogsPage = store.getState().dialogsPage;

            let onSendMessageClick = () => {
                store.dispatch(sendMessageCreator())
            }

            let onNewMessageChange = (body) => {
                store.dispatch(updateNewMessageBodyCreator(body))
            }

            return (
                <Dialogs updateNewMessageBody={onNewMessageChange}
                         sendMessage={onSendMessageClick}
                         dialogsPage={dialogsPage}/>
            )
        }
    }
    </StoreContext.Consumer>

}

export default DialogsContainer;