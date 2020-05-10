import React, { Component } from 'react'
import style from '../assets/css/home.module.css'
export default class Home extends Component {

    componentWillMount(){
        console.log("首页")
    };
    render() {
        return (
            <div>
                <div className={style.page}>
                    <div className={style.appdownload_bar}>
                        <div className={style.appdownload_avatar}></div>
                        <div className={style.appdownload_word}>五一端午可用低至3折人均200+ </div>
                        <div className={style.appdownload_close}></div>
                        <div className={style.appdownload_btn}>立即抢购</div>
                    </div>
                    <div className={style.header_top}>
                        {/* className={style.} */}
                        <div className={style.swiper_w}>轮播图</div>
                        <div className={style.search_box}>日历</div>
                        <div className={style.couponItem}>优惠券</div>
                        <div className={style.entry_w}>特价房券等</div>
                        <div className={style.recommend_item}>亲子度假等</div>
                    </div>
                    <div className={style.lowprice}></div>
                    <div className={style.content}>
                        <div></div>
                        <div></div>
                    </div>

                </div>

            </div>
        )
    }
    // <div className={style.page}>
    //     <div className="appdownload-bar">
    //         <div className="appdownload-avatar"></div>
    //         <div className="appdownload-word"></div>
    //         <div className="appdownload-close"></div>
    //         <div className="appdownload-btn"></div>
    //     </div>
    //     <div className="header-top">
    //         <div className="swiper-w"></div>
    //         <div className="search-box"></div>
    //         <div className="couponItem"></div>
    //         <div className="entry-w"></div>
    //         <div className="recommend-item"></div>
    //     </div>
    //     <div className="lowprice"></div>
    //     <div className="content">
    //         <div className="item"></div>
    //         <div className="item" id="desc"></div>
    //     </div>

    // </div>
    componentDidMount() {

    }
}
