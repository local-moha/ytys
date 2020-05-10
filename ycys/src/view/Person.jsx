import React, { Component } from 'react'
import style from '../assets/css/Person.module.css'
import axios from 'axios'
export default class Person extends Component {
    constructor(){
        super()
        // console.log(66,this.props)
    }
    componentDidMount(){
        console.log("我的",this.props)
    }
    render() {
        return (
            <div>
                <div className={style.page}>
                    <div className={style.header}>
                        <img className={style.header_bg} src="https://wechat.yitianyishu.com/minsu/static/image/account_image_bg@2x.png" alt=""/>
                        <div className={style.header_con}>
                            <img className={style.avatar} src="https://cdn.yitianyishu.com/js/dist/images/lazy.png" alt=""/>
                            <div className={style.nickname}>177****4970</div>
                        </div>
                    </div>
                    <div className={style.order_w}>
                        <div className={style.myorder}>
                            <div className={style.total_order} onClick={()=>{this.props.history.push("/minsu/orderlist.html")}}>全部订单</div>
                            <div className={style.needpay_order} onClick={()=>{this.props.history.push("/minsu/orderlist.html")}}>待支付</div>
                            <div className={style.order_num} onClick={()=>{this.props.history.push("/minsu/orderlist.html")}}>待入住</div>
                        </div>
                        <div className={style.menu_li}>
                            <span className={style.menu_span} onClick={()=>{this.props.history.push("/minsu/cutprice_orderlist.html")}}>砍价订单</span>
                            <span className={style.arrow}></span>
                        </div>
                    </div>
                        
                    <div className={style.menu_list}>
                        <div className={style.my_collect}>
                            <span className={style.menu_span} onClick={()=>{this.props.history.push("/minsu/my_collect.html")}}>我的收藏</span>
                            <span className={style.arrow}></span>
                        </div>
                        <div className={style.my_coupon}>
                            <span className={style.menu_span} onClick={()=>{this.props.history.push("/minsu/my_coupon.html")}}>优惠券</span>
                            <span className={style.arrow}></span>
                        </div>
                        <div className={style.my_setting}>
                            <span className={style.menu_span}>设置</span>
                            <span className={style.arrow}></span>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
   async componentWillMount() {
        // console.log(2222,this.props);
        //https://api.yitianyishu.com/banner/theme?_=1588484821008
        // https://api.yitianyishu.com/order/index/index?status=10%2C20%2C25%2C28%2C30&page=1&limit=8&order_type=&_=1588484548439
        // const data = await axios.get('/meisu/banner/theme?_='+Date.now())
        //https://api.yitianyishu.com/order/index/index?status=10%2C20%2C25%2C28%2C30&page=1&limit=8&order_type=&_=1588484548439
        //https://api.yitianyishu.com/v2/site/hot-city?limit=10&_=1588485442381
        //https://api.yitianyishu.com/order/index/index?status=10%2C20%2C25%2C28%2C30&page=1&limit=8&order_type=&_=1588485539108
        //https://api.yitianyishu.com/master/list?page=1&limit=20&is_star=1&_=1588485620022
        //https://api.yitianyishu.com/customer/collect-master?page=1&limit=9&_=1588485825557
        //https://api.yitianyishu.com/customer/collect-master?page=1&limit=9&_=1588485825557
        //https://api.yitianyishu.com/voucher/list?template_id=Z4XEQE%2C0ZOTSW%2CYARQJ4%2CMB9PHT%2CBLSVE9&_=1588486422795
        //https://api.yitianyishu.com/customer/collect-master?page=1&limit=9&_=1588485825557
        //https://api.yitianyishu.com/master/list?page=1&limit=20&is_star=1&_=1588486941564

        const data = await axios.get('/meisu/master/list?page=1&limit=20&is_star=1&_=1588486941564')

        console.log(33,data);
    }
}
