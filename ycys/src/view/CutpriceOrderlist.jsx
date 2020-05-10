import React, { Component } from 'react'
import style from '../assets/css/CutpriceOrderlist.module.css'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'

export default class Cutprice_orderlist extends Component {
    constructor(){
        super();
        this.ele=null;
        this.ele2=null;
    }
    lo(){
        console.log(this.ele);
        this.ele.style.color='red'
        this.ele2.style.color='#000'
    }
    lo2(){
        console.log(this.ele2);
        this.ele2.style.color='red'
        this.ele.style.color='#000'
    }
    render() {
        return (
            <div className={style.page}>
                    <div className={style.nav_bar}>
                        <div className={style.nav_left} ref={e=>this.ele=e} onClick={this.lo.bind(this)}>进行中</div>
                        <div className={style.nav_rigth} ref={e2=>this.ele2=e2} onClick={this.lo2.bind(this)}>已结束</div>
                    </div>
                </div>
        )
    }
}
