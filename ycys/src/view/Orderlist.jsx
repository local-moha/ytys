import React, { Component } from 'react'
import style from '../assets/css/Orderlist.module.css'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'

export default class Orderlist extends Component {
    constructor(){
        super()
        this.flag=true
        this.ele=null;
        this.ele2=null;
        this.state={
            flag:true,
            list:[]
        }
    }

    lo(){
        console.log(this.ele);
        this.setState({flag:true})
        this.ele.style.color='red'
        this.ele2.style.color='#000'
    }
    lo2(){
        console.log(this.ele2);
        this.setState({flag:false})
        this.ele2.style.color='red'
        this.ele.style.color='#000'
    }

    render() {
        const Mydiv =<div className={style.Mydiv}>暂无订单</div>
        const Render=(
            <div className={style.card}>
            <div className={style.card_top}>
                <div className={style.card_status} style={{color: 'red'}}>待确认</div>
                <div className={style.card_date}>2020-05-02 22:06:40</div>
            </div>
            <div className={style.card_con}>
                <div className={style.card_con_left}></div>
                <div className={style.card_con_rigth}>
                    <div className={style.room_name}>厦门简里</div>
                    <div className={style.room_title}>木子-海景大床房</div>
                </div>
            </div>
            <div className={style.card_bottom}>
                <div className={style.card_price}> 应付金额：
                    <span className={style.total_amount}>¥1278.00</span>
                </div>
            </div>
        </div>
        )
        const  ListRender=(
            <div className={style.card}>
            <div className={style.card_top}>
                <div className={style.card_status} style={{color: '#999'}}>已取消</div>
                <div className={style.card_date}>2020-05-02 22:06:40</div>
            </div>
            <div className={style.card_con}>
                <div className={style.card_con_left}></div>
                <div className={style.card_con_rigth}>
                    <div className={style.room_name}>厦门简里</div>
                    <div className={style.room_title}>木子-海景大床房</div>
                </div>
            </div>
            <div className={style.card_bottom}>
                <div className={style.card_price}> 应付金额：
                    <span className={style.total_amount}>¥1278.00</span>
                </div>
                <div className={style.card_delete}>删除订单</div>
            </div>
        </div>
        )
        return (
            <div>
                <div className={style.page}>
                    <div className={style.nav_bar}>
                        <div className={style.nav_left} ref={e=>this.ele=e} onClick={this.lo.bind(this)}>进行中</div>
                        <div className={style.nav_rigth} ref={e2=>this.ele2=e2} onClick={this.lo2.bind(this)}>已结束</div>
                    </div>
                </div>
                {
                    
                }
                <div className={style.status_w}>
                    {
                        this.state.flag ? (this.state.list.length>=1?Render:Mydiv):(this.state.list.length>=1?ListRender:Mydiv)
                    }
                    {/* <div className={style.card}>
                        <div className={style.card_top}>
                            <div className={style.card_status}>待确认</div>
                            <div className={style.card_date}>2020-05-02 22:06:40</div>
                        </div>
                        <div className={style.card_con}>
                            <div className={style.card_con_left}></div>
                            <div className={style.card_con_rigth}>
                                <div className={style.room_name}>厦门简里</div>
                                <div className={style.room_title}>木子-海景大床房</div>
                            </div>
                        </div>
                        <div className={style.card_bottom}>
                            <div className={style.card_price}> 应付金额：
                                <span className={style.total_amount}>¥1278.00</span>
                            </div>
                        </div>
                    </div> */}
                </div>
                {this.state.list.length>=1?<div className={style._end}><span className={style._end_icon}></span>The end<span className={style._end_icon}></span></div>:''}
            </div>
        )
    }
}
