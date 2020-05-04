import React, { Component } from 'react'
import style from '../assets/css/myNav.module.css'
export default class MyNav extends Component {
    render() {
        // console.log(this.props);
        return (
            <div className={style.nav_list}>
                <div className={
                    (this.props.path === "/index/index.html") ? `${style.active} ${style.home_active}` : `${style.nav_item} ${style.nav_item_home}`
                } onClick={() => {
                    this.props.history.push("/index/index.html")
                }}>
                    <span>美宿</span>
                </div>
                <div className={(this.props.path === "/index/superhotel_home.html") ? `${style.active} ${style.hotel_active}` : `${style.nav_item} ${style.nav_item_hotel}`} onClick={() => {
                    // this.props.history.push("/index/superhotel_home.html")
                }}>
                    <span>酒店</span>
                </div>
                <div className={(this.props.path === "/index/server.html") ? `${style.active} ${style.service_active}` : `${style.nav_item} ${style.nav_item_service}`} onClick={() => {
                    // this.props.history.push("/index/server.html")
                }}>
                    <span>客服</span>
                </div>
                <div className={(this.props.path === "/index/person.html") ? `${style.active} ${style.account_active}` : `${style.nav_item} ${style.nav_item_account}`
                } onClick={() => {
                    this.props.history.push("/index/person.html")
                }}>
                    <span>我的</span>
                </div>
            </div>

        )
    }
}
