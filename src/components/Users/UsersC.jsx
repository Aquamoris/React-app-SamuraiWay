import React from 'react';
import style from "./Users.module.css";
import userPhoto from "../../assets/images/user.webp";
import axios from "axios";

class Users extends React.Component {
    componentDidMount() {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount)
            });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
            });
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        let pages = [];

        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return (
            <div>
                {
                    pages.map(p => (
                        <span
                            className={this.props.currentPage === p ? style.selectedPage + ' ' + style.page : style.page}
                            onClick={() => {
                                this.onPageChanged(p);
                            }}
                        >{p}</span>
                    ))
                }
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