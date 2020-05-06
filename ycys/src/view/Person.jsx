import React, { Component } from 'react'
import style from '../assets/css/Person.module.css'
import MyNav from '../components/MyNav'
export default class Person extends Component {
    componentDidMount() {
        // console.log("我的",this.props)
    }
    render() {
        return (
            <div>
                <div className={style.page}>
                    <div className={style.header}>
                        <img src="https://wechat.yitianyishu.com/minsu/static/image/account_image_bg@2x.png" className={style.header_bg} alt="" />
                        <div className={style.header_con}>
                            <img className={style.avatar} src="https://cdn.yitianyishu.com/js/dist/images/lazy.png" alt="" />
                            <div className={style.nickname}>177****4970</div>
                        </div>
                    </div>
                    <div className={style.order_w}>
                        <div className={style.total_order}>全部订单</div>
                        <div className={style.needpay_order}>待支付</div>
                        <div className={style.order_num}>代入住</div>
                    </div>
                </div>
                <MyNav {...this.props}></MyNav>
            </div>
        )
    }
    componentWillMount() {
        console.log(2222);

    }
}
