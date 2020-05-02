import React, { Component } from 'react'
import style from '../assets/css/myNav.module.css'
export default class MyNav extends Component {
    render() {
        return (
            <div className={style.nav_list}>
                <div className={`${style.nav_item_home} ${style.nav_item} ${style.nav_item_active}`}>
                    <span>美宿</span>
                </div>
                <div className={`${style.nav_item_hotel} ${style.nav_item}`}>
                    <span>酒店</span>
                </div>
                <div className={`${style.nav_item_service} ${style.nav_item}`}>
                    <span>客服</span>
                </div>
                <div className={`${style.nav_item_account} ${style.nav_item}`}>
                    <span>我的</span>
                </div>
            </div>

        )
    }
}
