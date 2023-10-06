import React from 'react';
import style from "./Users.module.css";
import userPhoto from "../../assets/images/user.webp";
import axios from "axios";

class Users extends React.Component {

    constructor(props) {
        super(props);
        // Убираем if, тк constructor вызывается ровно один раз
        axios
            .get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                this.props.setUsers(response.data.items);
            });
    }

    render() {
        return (
            <div>
                {
                    this.props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img className={style.userPhoto} src={u.photos.small ? u.photos.small : userPhoto} alt="avatar"/>
                        </div>
                        <div>
                            { u.followed
                                ? <button onClick={() => { this.props.unfollowUser(u.id)} }>Unfollow</button>
                                : <button onClick={() => { this.props.followUser(u.id)} }>Follow</button> }
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
    }
}
export default Users;