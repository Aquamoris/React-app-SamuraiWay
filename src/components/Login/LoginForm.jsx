import React from 'react';
import style from './Login.module.css';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import YupPassword from "yup-password";
YupPassword(Yup)

const LoginForm = (props) => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            remember: false
        },
        validationSchema: Yup.object().shape({
            email: Yup.string()
                .required('Email is required')
                .email('Invalid email address'),
            password: Yup.string()
                .required('Password is required')
        }),
        onSubmit: values => {
            props.login(values.email, values.password, values.remember);
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <div>
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                />
                <div className={style.error}>{formik.touched.email && formik.errors.email}</div>
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input
                    id="password"
                    name="password"
                    type="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                />
                <div className={style.error}>{formik.touched.password && formik.errors.password}</div>
            </div>
            <div>
                <label htmlFor="remember">Remember me</label>
                <input
                    id="remember"
                    name="remember"
                    type="checkbox"
                    onChange={formik.handleChange}
                    value={formik.values.remember}
                />
            </div>

            <button type="submit">Submit</button>
        </form>
    );
};

export default LoginForm;