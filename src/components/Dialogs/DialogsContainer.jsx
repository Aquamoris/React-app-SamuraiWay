import React from "react";
import {sendMessage, updateNewMessageBody} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

const DialogsContainer = withAuthRedirect(connect(mapStateToProps, { updateNewMessageBody, sendMessage })(Dialogs));

export default DialogsContainer;