import React, { Component } from 'react'
import style from '../assets/css/nav.module.css';
import {
    NavLink,  //导航链接
} from "react-router-dom";
export default class Nav extends Component {
    render() {
        return (
            <div>
                <div className={style.nav_list}>
                    <NavLink to={""} className={`${style.nav_item_home} ${style.nav_item}`} activeClassName={style.nav_item_active } to={""}>
                        <span>美宿</span>
                    </NavLink>
                    <NavLink className={`${style.nav_item_hotel} ${style.nav_item}`} activeClassName={style.nav_item_active } to={"/superhotel_home.html"} exact >
                        <span>酒店</span>
                    </NavLink>
                    <NavLink to={""} className={`${style.nav_item_service} ${style.nav_item}`} activeClassName={style.nav_item_active } to={""}>
                        <span>客服</span>
                    </NavLink>
                    <NavLink to={""} className={`${style.nav_item_account} ${style.nav_item}`} activeClassName={style.nav_item_active } to={""}>
                        <span>我的</span>
                    </NavLink>
                </div>
            </div>

        )
    }
}