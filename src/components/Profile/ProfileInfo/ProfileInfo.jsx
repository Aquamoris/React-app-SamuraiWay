import React from "react";
import s from './ProfileInfo.module.css'
const ProfileInfo = () => {
    return (
        <div className={s.content}>
            <div>
                <img className={s.content_image}
                    src="https://images.unsplash.com/photo-1602257529448-b4b806e1aa41?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2693&q=80"
                    alt=""/>
            </div>
            <div className={s.descriptionBlock}>
                ava + name
            </div>
        </div>
    );
}

export default ProfileInfo;