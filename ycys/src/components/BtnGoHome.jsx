import React, { Component } from 'react'
import style from '../assets/css/btnGoHome.module.css'
export default class BtnGoHome extends Component {
    render() {
        return (
            <div className={style.btn_go_home} onClick={() => {
                this.props.history.push("/")
            }}></div>
        )
    }
}
