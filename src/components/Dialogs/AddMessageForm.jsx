import React from 'react';
import s from "./Dialogs.module.css";
import {useFormik} from "formik";

const AddMessageForm = (props) => {
    const formik = useFormik({
        initialValues: {
            newMessage: '',
        },
        onSubmit: values => {
            if (values.newMessage) {
                props.sendMessage(values.newMessage);
            }
        }
    })

    return (
        <form className={s.newMessage} onSubmit={formik.handleSubmit}>
            <div>
                    <textarea
                        name='newMessage'
                        value={formik.values.newMessage}
                        onChange={formik.handleChange}
                        placeholder='New message'>
                    </textarea>
            </div>
            <div>
                <button type='submit'>Отправить</button>
            </div>
        </form>
    );
};

export default AddMessageForm;