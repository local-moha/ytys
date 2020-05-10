import React, { Component } from 'react'
import style from '../assets/css/MyCoupon.module.css'
import axios from 'axios'
export default class MyCoupon extends Component {
    constructor(){
        super()
        this.ele=null
        this.navTwo=null
        this.navThere=null
        this.toggle_btn=null
        this.state={
            ele:'one',
            isShow:false
        }
    }
   async componentDidMount(){
        // https://api.yitianyishu.com/customer/voucher?product_no=&status=&order_type=3&_=1588576346348
        const data =await axios.get('/meisu/customer/voucher?product_no=&status=&order_type=3&_=1588576346348')//获取不到数据
        console.log('优惠券',data);
    }
    decideRenderingOne(){
        this.setState({ele:'one'})
        this.navOne.style.color='red'
        this.navOne.style.fontWeight='900'
        this.navThere.style.color='#000'
        this.navTwo.style.color='#000'
        this.navTwo.style.fontWeight='100'
        this.navThere.style.fontWeight='100'
    }
    decideRenderingTwo(){
        this.setState({ele:'two'})
        this.navTwo.style.color='red'
        this.navTwo.style.fontWeight='900'

        this.navOne.style.color='#000'
        this.navThere.style.color='#000'
        this.navOne.style.color='#000'
        this.navOne.style.fontWeight='100'
        this.navThere.style.fontWeight='100'
    }
    decideRenderingThere(){
        this.setState({ele:'two'})
        this.navThere.style.fontWeight='900'
        this.navThere.style.color='red'

        this.navOne.style.color='#000'
        this.navTwo.style.color='#000'
        this.navOne.style.fontWeight='100'
        this.navTwo.style.fontWeight='100'
    }
    toggle(){
        this.setState({isShow:!this.state.isShow});
        if(this.state.isShow==true){
        this.toggle_btn.style.background='url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAADa0lEQVRYR+2Xy2tTQRTGvzMZq5aKTwrWJnOloKLiA4M0fSyq4rJU/Au0FKSoKC58oaILRRQVFDeCdSO6KZYuxceiIRGJC6WICsVMUhWqKBJptdzMkYEESq03t/UqQXJ3Ieee+c2Z+b57DqHMHypzPlQA//SEKhWsVNCrAtlsdp0xZicztwJYBWBRIf4zgFdENCCE6A2Hwy9mWskZ3UGt9SYA55l5q5+FieghgMNKqWd+4ifGTAuQmaXW+jIRdTOzAPBFCNEHoF8I8bKqquq9TT4+Pl5njFkNoN0Y0wFgIREZZr6ulDpIRK5fUN+AWuuFzNwLoA3AGBFdcV33fENDw1evxYaGhuZLKQ8DOMDMcwE8JqKdSqkvfiB9ARYqd9/CEdEwgI7pHlfhWvQxc72FVEpt91NJX4DpdPoqgL0WTgjRGA6H3/nZ/eSYbDa7zBjzpAB5zXGcfaXylAQs7PwpM/8gotbpVm4ygM3HzANENBvA5lL5/AA+sGolonNKqWOlduznf631WWY+atWtlNrm9Y4noPW5fD7/3Ko1n88vLyUIP3A2xgonFAq9teoOhULrvXzSE1BrfZqZTwLocRxnt18AP3GZTOamMWYXEZ1RSp363TuegOl0+pFVrhBiRyQSsX4X2JPJZDqMMfesoh3H2TJTQGu8S6WUK+vr698UkySTSWu2NWNjYxfa2tq+e1HH4/E6KeUe13Vvt7S0vC7GDg8Pr3Bd1/7+4DhO3UwB7eKzq6ur59XW1n6bAPgJwGL7vWXmzqampsRUCyQSiU4AF4loAYBLsVjsUDFuZGSkZnR0NAfgh+M4cwIFjMfjUSnlLWZeAyBPRFellMej0eioXSiZTDoAbgAoKrTfGNPV3Nw8EjTglEdsFxkcHKzK5XInbBMAYJYVJxF1EdFaY8xZADUAPhLR/sbGxruTKxTUEZcUSSKR2CiEuMnMGyZCENEdKeX+aDRqr8MvTyAiKdqMEKInEon81mZSqdQs13WPMPNxABaoOxaL9XuJJxCbma5Rp1KpJblc7lspZQdm1LYCWuvy/dQVAG33HGizAGDA2lcgzYKFLOt2ywKWfcNaOOrybfmLdjHV0ASgTwgx5dBkjGm348E/GZomelrZjp2TjbdsB/fAmkIfiUrOJD5y/NWQCuCflrdSwf++gj8BZFYHR2jjdJQAAAAASUVORK5CYII=) no-repeat 0/20px 20px'
        }else{
        this.toggle_btn.style.background='url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAADd0lEQVRYR+2XT2gUVxzHv7+3Q3SLQfRW7aUU2iLJzAuGIqKUVGkIZE2KsHftIUUsWHqQ1KKo+O9QWlC8qYfeFqShm81B1BzqQSSSmUkq1oseGgUPikRYxZnfT36wkXTZzE6yQYayc53ve+/zfu99v+89QsY/yjgf2oCtrlC7gu0KJlVgZmbGFZG9zLwTwOdEtFH1IvIMwH1jzF9EdLW7uztcaSVXtAfDMNwqIudEZFeagYnoBhEddl33bhr9Ys2yAEXECYLgVyI6ICIGwHNjzBiAP5n5nuM4j7XzKIo2GWO2ANjDzMMANhARi8hFz/N+IKIoLWhqwDAMNzDzVQB9AKoi8lscx+d6e3tfJA02NTW1PpfLHSaiQwDyACaNMXtd132eBjIVYK1y1xSOiP4louHlLldtW4yJyEcK6Xne12kqmQrQ9/3zAA4qnIhss9bOpZl9vcb3/c1EdLsGecFa+32zfpoC1mZ+R0ReG2N2Lrdy9QDaHzOru9cQ0RfN+msKGATBdXWriJzp6en5qdmM0/yfnp4+TUSj6m7P83YntUkE1JyL4zhQt0ZR9HEzQ6SBU40ax3Gch+ruXC7nJeVkImAYhseZ+SiAK9ba/UkAk5OTa+fn539UTWdn5y99fX2vkvRhGF5m5n3GmBOu6x5bSpsI6Pv+TXWuMeYb13U17xp+4+Pj20Xkkp4mNcEDx3G+HRgYuLVUmzAMh5n5D3W0tfarlQJq8H4I4DNr7YP6Tsrl8gdEdEpE1I05AH/rSQegCwADuFitVkeLxeLLBo7+FMA/AJ5YazetCDAIglcissZxnM6urq7/DDIxMfFlFEWXiOgTInqjR1+1Wj2pA+XzeTXTKIAOInokIiOFQkFz9N03Ozu7LoqieSJ67Xne2lUFrFQqPzPzcQB63PnMvH9oaGh68SCVSqU7juPLRNRbq+qRQqFwZkGzKoC+7zdc4nK5fB3ADl3eubm5syMjI28aVaBUKuXy+bwa5xgR/T44OPjdgs73/daXeCmT6N7r6OhY19/f/zRNtJRKpXyxWKwu1q6KSRZixhhzxXXdxJhJA1oH2HrMZD6odcaZPuoUMPOXBYXM9HVLATN/Ya0tdXav/Avx0OjRBGDMGNPw0cTMewC8n0dTXYZl89lZH8aZfbgv99RoRd/0TdJK56vRtg3YahXbFfzfV/AttmcmR9D/wnsAAAAASUVORK5CYII=) no-repeat 0/20px 20px'
        }
    }
    render() {
        const isRender=(
            <div className={style.coupon_list}>
                    <div className={style.coupon}>
                    <div className={style.c_coupon}>
                        <div className={style._coupon_bg}>
                            <div className={style._coupon_l}>
                                <span>¥</span>
                                <span className={style.price}>258</span>
                            </div>
                            <div className={style._coupon_r}>
                                <div className={style._coupon_tit}>新人专享福利</div>
                                <div className={style.c_coupon__condition}>满3000元使用</div>
                                <div className={style._coupon_date}>2020.05.03至2020.06.02</div>
                                <div className={style._coupon_use_btn}>去使用</div>
                            </div>
                        </div>
                        <div className={style._coupon_rule} onClick={this.toggle.bind(this)}>
                            <span className={style._coupn_rule_tit}>使用规则</span>
                            <span className={style._coupon_toggle_btn} ref={(e)=>{this.toggle_btn=e}}></span>
                        </div>
                    </div>
                    {this.state.isShow?<div ref={(e)=>{this.ele=e}} className={style._coupon_total_rule}>新用户专享福利，满3000可用，自领取之后30天内有效，民宿预订通用，法定节假日不可用</div>:''}
                </div>
                </div>
        )
        const Render=<div className={style.nodata}>暂无优惠券</div>
        return (
            <div className={style.page}>
                <div className={style._nav}>
                    <div className={style._nav_left}><span ref={(e)=>this.navOne=e} className={style.active} onClick={this.decideRenderingOne.bind(this)}>未使用</span></div>
                    <div className={style._nav_center} ref={(e)=>this.navTwo=e} onClick={this.decideRenderingTwo.bind(this)}><span>已使用</span></div>
                    <div className={style._nav_rigth} ref={(e)=>this.navThere=e} onClick={this.decideRenderingThere.bind(this)}><span>已过期</span></div>
                    <div className={style._nav_bor_w}></div>
                </div>
                <div className={style.coupon_code_btn} onClick={()=>{this.props.history.push("/minsu/exchangeCoupon.html")}}>输入兑换码</div>
                {
                    // isRender,
                    this.state.ele==='one'?isRender:Render
                    // this.state.ele==='one'?isRender:'暂无'
                }
                {/* <div className={style.coupon_list}>
                    <div className={style.coupon}>
                    <div className={style.c_coupon}>
                        <div className={style._coupon_bg}>
                            <div className={style._coupon_l}>
                                <span>¥</span>
                                <span className={style.price}>258</span>
                            </div>
                            <div className={style._coupon_r}>
                                <div className={style._coupon_tit}>新人专享福利</div>
                                <div className={style.c_coupon__condition}>满3000元使用</div>
                                <div className={style._coupon_date}>2020.05.03至2020.06.02</div>
                                <div className={style._coupon_use_btn}>去使用</div>
                            </div>
                        </div>
                        <div className={style._coupon_rule}>
                            <span className={style._coupn_rule_tit}>使用规则</span>
                            <span className={style._coupon_toggle_btn}></span>
                        </div>
                    </div>
                    <div className={style._coupon_total_rule}>新用户专享福利，满3000可用，自领取之后30天内有效，民宿预订通用，法定节假日不可用</div>
                </div>
                </div> */}
            </div>
        )
    }
}
