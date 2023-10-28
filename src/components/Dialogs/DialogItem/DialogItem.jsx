import React from "react";
import {NavLink} from "react-router-dom";
import s from './../Dialogs.module.css'

const DialogItem = (props) => {
    const path = "/dialogs/" + props.id;

    let imgAvatar;
    props.sex === 'm' ?
        imgAvatar = 'https://i.etsystatic.com/13064317/r/il/87fd7d/4823128416/il_fullxfull.4823128416_2di3.jpg' :
        imgAvatar = 'https://i.etsystatic.com/11611398/r/il/fdc91d/4007095768/il_fullxfull.4007095768_fsns.jpg';

    return (
        <div className={s.dialog}>
            <img src={imgAvatar} alt='ava'/>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}

export default DialogItem;