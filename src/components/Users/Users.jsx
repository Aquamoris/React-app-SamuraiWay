import React from 'react';
import style from "./Users.module.css";
import userPhoto from "../../assets/images/user.webp";
import { Link } from 'react-router-dom';
import axios from "axios";

const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            {
                pages.map(p => (
                    <span
                        className={props.currentPage === p ? style.selectedPage + ' ' + style.page : style.page}
                        onClick={() => {
                            props.onPageChanged(p);
                        }}
                    >{p}</span>
                ))
            }
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <Link to={'/profile/' + u.id}>
                                <img className={style.userPhoto} src={u.photos.small ? u.photos.small : userPhoto} alt="avatar"/>
                            </Link>
                        </div>
                        <div>
                            { u.followed
                                ? <button onClick={() => {

                                    axios
                                        .delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                            withCredentials: true,
                                            headers: {
                                                "API-KEY": "932c6beb-48e7-4801-a0a3-2ad7ddba21dd"
                                            }
                                        })
                                        .then(response => {
                                            if (response.data.resultCode === 0) {
                                                props.unfollowUser(u.id);
                                            }
                                        })

                                }}>Unfollow</button>
                                : <button onClick={() => {

                                    axios
                                        .post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                            withCredentials: true,
                                            headers: {
                                                "API-KEY": "932c6beb-48e7-4801-a0a3-2ad7ddba21dd"
                                            }
                                        })
                                        .then(response => {
                                            if (response.data.resultCode === 0) {
                                                props.followUser(u.id);
                                            }
                                        })

                                }}>Follow</button> }
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{'u.location.country'}</div>
                            <div>{'u.location.city'}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    );
};

export default Users;