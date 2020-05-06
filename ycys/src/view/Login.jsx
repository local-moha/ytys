import React, { Component } from 'react';
import style from '../assets/css/login.module.css'


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            getcode: '获取验证码',
            phoneNum: '',
            code: '',
            login:localStorage.login || null
        }
    }
    render() {
        return (
            <div className={style.login}>
                <div className={style.loginBox}>
                    <div className={style.input_w}>
                        <i className={style.icon_user}></i><input type="text" placeholder="请输入手机号" onChange={this.changePhone.bind(this)} value={this.state.phoneNum} />
                    </div>
                    <div className={style.input_w}>
                        <i className={style.icon_code}></i><input placeholder="请输入短信验证码" type="text" onChange={this.changeCode.bind(this)} value={this.state.code} />
                        <div className={style.authcode} onClick={this.getcode.bind(this)}>{this.state.getcode}</div>
                    </div>
                    <div className={style.button} onClick={this.login.bind(this)}>登录</div>
                    <div className={style.alt}>未注册过的用户将直接注册<a href="./usernotes.html" className={style.note}>用户须知</a></div>
                </div>
            </div>
        );
    }
    changePhone(e) {
        this.setState({

            phoneNum: e.target.value,
        })
    }
    changeCode(e){
        this.setState({
            password: e.target.value,
        })
    }
    async getcode() {
        // console.log(this);
        if(!this.state.phoneNum){
            const reg = /^1[3456789]\d{9}$/
            if(reg.test(this.state.phoneNum)){

                const codeInfo = await this.$axios.post('/api/sendCode', {
                    phoneNum:this.state.phoneNum,
                })
                console.log(codeInfo.code);
            }else{
                alert('请输入正确电话号码')
            }
        }
        
    };
    async login(){
        if(this.state.phoneNum&&this.state.code){
            const data =  await this.$axios.post('/api/login',{
                 phoneNum:this.state.phoneNum,
                 code:this.state.code
             })
             console.log(data);
             localStorage.login = data.phoneNum
        }
    }
}



export default Login;