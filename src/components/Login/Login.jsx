import React from 'react';
import LoginForm from "./LoginForm";
import {connect} from "react-redux";
import {login} from "../../redux/authReducer";
import {Navigate} from "react-router-dom";

const Login = ({isAuth, login}) => {

    if (isAuth) return <Navigate to='/profile' />

    return (
        <div>
            <h1>Login</h1>
            <LoginForm
                login={login}
            />
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {login})(Login);