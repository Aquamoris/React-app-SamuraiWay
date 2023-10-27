import React, {useState} from 'react';

const ProfileStatus = (props) => {
    const [status, setStatus] = useState(props.status);
    const [editMode, setEditMode] = useState(false);

    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateUserStatus(status);
    }

    const onInputChange = (e) => {
        setStatus(e.currentTarget.value);
    }

    return (
        <div>
            {editMode
                ? <div>
                    <input onChange={onInputChange} autoFocus={true} onBlur={deactivateEditMode} value={status}/>
                </div>
                : <div>
                    <span onDoubleClick={ activateEditMode }>Status: {status || '------'}</span>
                </div>}
        </div>

    );
};

export default ProfileStatus;