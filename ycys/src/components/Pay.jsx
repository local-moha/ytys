import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import style from '../assets/css/pay.module.css'
class Pay extends Component {
    constructor(props) {
        super(props);

    }

   

    render() {
        return (
            <div className={style.footer}>
                <Link className={style.btn_myorder} to={'/order_list.html'}>我的订单</Link>
                <Link className={style.btn_server} to={''}>客服</Link>
                <Link className={style.btn_money} to={''}>赚佣金</Link>
                <Link className={style.btn_buy} to={''}>立即购买</Link>
            </div>
        );
    }
}

Pay.propTypes = {

};

export default Pay;