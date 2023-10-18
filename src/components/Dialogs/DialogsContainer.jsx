import React from "react";
import {sendMessage, updateNewMessageBody} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}

const DialogsContainer = connect(mapStateToProps, { updateNewMessageBody, sendMessage })(Dialogs);

export default DialogsContainer;