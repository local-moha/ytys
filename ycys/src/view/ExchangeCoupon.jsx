import React, { Component } from 'react'
import style from '../assets/css/ExchangeCoupon.module.css'
import { Toast, Cell, Button, Icon } from 'zarm';
export default class ExchangeCoupon extends Component {
    constructor(){
        super()
        this.ele=null
    }
    
    render() {
        
        return (
            <div className={style.page}>
                <input className={style.coupon_code_btn} placeholder='输入兑换码' ref={(e)=>{this.ele=e}}/>
                <span className={style.chear_btn} onClick={()=>{this.ele.value=''}}></span>
                <div className={style._btn_large} onClick={()=>{if(this.ele.value.length<1){
                    Toast.show('请输入兑换码');
                }else{
                    Toast.show('优惠券不存在');
                }
                }}>
                <Button className={style.po}></Button>
                兑换</div>
                {/* <div className={style._btn_large} onClick={()=>{if(this.ele.value.length<1){
                    alert('请输入兑换码')
                }else{
                    alert('优惠券不存在')
                }
                }}>兑换</div> */}
            </div>
        )
    }
}
