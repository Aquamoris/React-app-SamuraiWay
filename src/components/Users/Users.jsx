import React from 'react';
import style from './Users.module.css';

const Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                photoUrl: 'https://cdn.popcake.tv/wp-content/uploads/2020/07/66623801_215088636120287_3722387074360083737_n.jpg',
                followed: true,
                fullName: 'Dmitry K',
                status: 'I`m a boss',
                location: {city: 'Minsk', country: 'Belarus'}
            },
            {
                id: 2,
                photoUrl: 'https://cdn.popcake.tv/wp-content/uploads/2020/07/66623801_215088636120287_3722387074360083737_n.jpg',
                followed: false,
                fullName: 'Sasha A',
                status: 'I`m a boss too',
                location: {city: 'Moscow', country: 'Russia'}
            },
            {
                id: 3,
                photoUrl: 'https://cdn.popcake.tv/wp-content/uploads/2020/07/66623801_215088636120287_3722387074360083737_n.jpg',
                followed: false,
                fullName: 'Sergey P',
                status: 'I`m a boss too',
                location: {city: 'Vladivostok', country: 'Russia'}
            },
            {
                id: 4,
                photoUrl: 'https://cdn.popcake.tv/wp-content/uploads/2020/07/66623801_215088636120287_3722387074360083737_n.jpg',
                followed: true,
                fullName: 'Andrew T',
                status: 'I`m a boss too',
                location: {city: 'Vladivostok', country: 'Russia'}
            },
        ])
    }

    return (
        <div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img className={style.userPhoto} src={u.photoUrl} alt="avatar"/>
                        </div>
                        <div>
                            { u.followed
                                ? <button onClick={() => { props.unfollowUser(u.id)} }>Unfollow</button>
                                : <button onClick={() => { props.followUser(u.id)} }>Follow</button> }
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    );
}

export default Users;