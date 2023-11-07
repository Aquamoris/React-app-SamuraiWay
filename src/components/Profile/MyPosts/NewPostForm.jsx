import React from 'react';
import {useFormik} from "formik";

const NewPostForm = (props) => {
    const formik = useFormik({
        initialValues: {
            postText: ''
        },
        onSubmit: values => {
            if (values.postText) {
                props.onAddPost(values.postText);
            }
        }
    })

    return (
        <form onSubmit={formik.handleSubmit}>
            <div>
                <input
                    id='postText'
                    name='postText'
                    type='text'
                    onChange={formik.handleChange}
                    value={formik.values.postText}
                    placeholder='Learning React!'
                />
            </div>
            <div>
                <button type='submit'>Add</button>
            </div>
        </form>
    );
};

export default NewPostForm;