import React, { Component } from 'react';
import style from '../assets/css/login.module.css'

class Login extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className={style.login}>
                <div>
                    <div><input type="text"/></div>
                    <div><input type="password"/></div>
                    <div><button></button></div>
                    <div><span>未注册过的用户将直接注册</span><a href="#">用户须知</a></div>
                </div>
            </div>
        );
    }
}

Login.propTypes = {

};

export default Login;