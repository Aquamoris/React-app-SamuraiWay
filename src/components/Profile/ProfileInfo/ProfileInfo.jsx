import React from "react";
import s from './ProfileInfo.module.css'
import Preloader from '../../common/Preloader/Preloader'
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div className={s.content}>
            {/*<div>*/}
            {/*    <img className={s.content_image}*/}
            {/*        src="https://images.unsplash.com/photo-1602257529448-b4b806e1aa41?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2693&q=80"*/}
            {/*        alt=""/>*/}
            {/*</div>*/}
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large} alt="" />
                <div>Fullname: {props.profile.fullName}</div>
                <ProfileStatus status={props.status} updateUserStatus={props.updateUserStatus}/>
                <div>{props.profile.aboutMe}</div>
            </div>
        </div>
    );
}

export default ProfileInfo;