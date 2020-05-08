import React, { Component } from 'react'
import { connect } from 'react-redux'
import templateCreator from '../store/actionCreator/getCoupon'
import style from '../assets/css/getCoupon.module.css'
export class GetCoupon extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hasGet: false
        }
    }
    render() {
        const { template } = this.props.template;
        const hasGet = localStorage.hasgetCoupon
        console.log(template);
        return (
            <div className={style.page}>
                <img src="https://wechat.yitianyishu.com/minsu/static/image/home_image_coupon@2x.png" className={style.top} />
                <div className={style.coupon_list}>
                    {
                        template ? template.map(v => (
                            <div key={v.template_id} className={hasGet ? `${style.coupon_get} ${style.coupon}` : style.coupon}>
                                <div className={style.coupon_l}>
                                    <span className={style.fz14}>￥</span>
                                    {v.discount / 1}
                                </div>
                                <div className={style.coupon_r}>
                                    <div className={style.coupon_tit}>{v.name}</div>
                                    <div className={style.coupon_use_price}>满{v.amount}可用</div>
                                </div>
                            </div>
                        )) : ""
                    }
                </div>
                <div className={style.bottom}>
                    <div className={hasGet ? `${style.hasGetCoupon} ${style.btn_submit}` : style.btn_submit} onClick={() => {
                        if (hasGet) {
                            this.props.history.push("/");
                        } else {
                            localStorage.hasgetCoupon = true;
                            return this.setState({ hasGet: true });
                        }
                    }}>{hasGet ? "去使用" : "立即领取"}</div>
                </div>

            </div>
        )
    }
    componentDidMount() {
        this.props.getCouponList()
    }
}

const mapStateToProps = ({ template }) => ({
    template
})

const mapDispatchToProps = (dispatch) => ({
    getCouponList() {
        dispatch(templateCreator.asyncGetCoupon())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(GetCoupon)
