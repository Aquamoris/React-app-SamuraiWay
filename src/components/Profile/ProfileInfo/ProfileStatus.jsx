import React, {useState} from 'react';

const ProfileStatus = (props) => {

    const [editMode, setEditMode] = useState(false);

    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
    }

    return (
        <div>
            {editMode
                ? <div>
                    <input autoFocus={true} onBlur={deactivateEditMode} value={props.status}/>
                </div>
                : <div>
                    <span onDoubleClick={ activateEditMode }>{props.status}</span>
                </div>}
        </div>

    );
};

export default ProfileStatus;