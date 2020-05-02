import React, { Component } from 'react'
import style from '../assets/css/home.module.css'
import axios from 'axios'
export default class Home extends Component {
    async componentDidMount() {
        // axios.interceptors.request.use(config => {
        //     console.log(config);
        //     config.url = "/meisu" + config.url;
        //     // config.headers.authority = "api.yitianyishu.com"
        //     return config
        // })
        // axios.interceptors.response.use(data => {
        //     console.log(data);
        //     return data
        // })

        // const { data } = await axios.get("/meisu/wechat/jsapi", {
        //     params: {
        //         url: "https//wechat.yitianyishu.com/minsu/index.html",
        //         _: Date.now()
        //     }
        // })
        // console.log(data);
        const { data } = await axios.get("/meisu/site/carousel?_=" + Date.now())
        console.log(data);
        // const { data } = await axios.get("/meisu/banner/theme?_=1588344428998")
        // console.log(data);

    }
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
                        <div className={style.swiper_w}>
                            轮播图
                        </div>
                        {/* className={style.} */}
                        <div className={style.search_box}>
                            <div className={style.location_item}>
                                <div className={style.location_address}>武汉</div>
                                <div className={style.current_location}>
                                    定位到当前
                                </div>
                            </div>
                            <div className={style.join_item}>
                                <div className={`${style.jitem_item} ${style.fl}`}>
                                    <div className={style.jitem_action}>入住</div>
                                    <div className={style.jitem_date}>5月1日</div>
                                </div>
                                <div className={style.jitem_duaring}>共1晚</div>
                                <div className={`${style.jitem_item} ${style.fr}`}>
                                    <div className={style.jitem_action}>离开</div>
                                    <div className={style.jitem_date}>5月2日</div>
                                </div>
                            </div>
                            <div className={style.search_item}>
                                <div className={style.search_input}>
                                    景点/民宿/关键字
                                </div>
                                <div className={style.search_btn}>
                                    搜索
                                </div>
                            </div>
                        </div>
                        <div className={style.couponItem}>
                            您有1000元优惠券尚未领取
                            <div className={style.go_coupon}>立即领取></div>
                        </div>
                        <div className={style.entry_w}>
                            <div className={`${style.entry} ${style.stock_entry}`}>特价房券</div>
                            <div className={`${style.entry} ${style.sale_entry}`}>限时抢购</div>
                            <div className={`${style.entry} ${style.super_entry}`}>超值套餐</div>
                            <div className={`${style.entry} ${style.cutrpice_entry}`}>砍价服务</div>
                        </div>
                        <div className={style.recommend_item}>
                            <div className={style.ovh} style={{ marginBottom: "16px" }}>
                                <div className={`${style.large_box} ${style.fl} ${style.bgImg1}`} >
                                    <div className={style.re_info}>
                                        <div className={style.re_tit}>亲子度假</div>
                                        <div className={style.re_intr}>熊孩子的天堂</div>
                                    </div>
                                </div>
                                <div className={`${style.small_box} ${style.fr} ${style.bgImg2}`}>
                                    <div className={style.re_info}>
                                        <div className={style.re_tit}>网红美宿</div>
                                        <div className={style.re_intr}>抖音小红书种草</div>
                                    </div>
                                </div>
                            </div>
                            <div className={style.ovh} >
                                <div className={`${style.small_box} ${style.fl} ${style.bgImg3}`}>
                                    <div className={style.re_info}>
                                        <div className={style.re_tit}>泳池精选</div>
                                        <div className={style.re_intr}>清凉一夏</div>
                                    </div>
                                </div>
                                <div className={`${style.large_box} ${style.fr} ${style.bgImg4}`}>
                                    <div className={style.re_info}>
                                        <div className={style.re_tit}>温泉精选</div>
                                        <div className={style.re_intr}>温泉美宿陪你过冬</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={style.lowprice}></div>
                    <div className={style.content}>
                        <div className={style.item}>
                            <div className={style.item_tit}>
                                <div className={style.item_type}>超值套餐</div>
                                <div className={style.item_info}>家庭出游、公司团建、朋友聚会完全方案</div>
                                <div className={style.item_more}>MORE></div>
                            </div>
                            <div className={style.item_con} id={style.super}>
                                <div className={style.superTypeList}>
                                    <div className={style.type_home}>家庭亲子</div>
                                    <div className={style.type_team}>团聚轰趴</div>
                                    <div className={style.type_lover}>情侣双人</div>
                                </div>
                                <div className={style.super_scroll}>
                                    <div className={style.super_list} style={{ width: "3450px" }}>
                                        <div className={`${style.super_item} ${style.team_item}`}>
                                            <div className={style.team_img_w}>
                                                <div className={`${style.team_img} ${style.bg_img}`} style={{ backgroundImage: "url('https://img.yitianyishu.com/team/index/56fb1a8949dc301f93a0661d4e16dca7-750_480.jpg')" }}></div>
                                                <div className={style.team_timebox}>
                                                    <div className={style.team_icon} style={{ background: "rgb(5,229,128)" }}></div>
                                                    进行中 剩余4天0小时49分
                                                </div>
                                            </div>
                                            <div className={style.team_info}>
                                                <div className={style.team_name}>
                                                    江苏7店通用，限抢200套|南京、常州、溧阳、无锡四地通兑，度假之选一网打尽！2天1晚度假套餐【江南古韵/网红泡泡屋//轻奢美宿任选其一入住一晚+双早+民宿特色体验】周末暑期可用，有效期到年底！
                                                </div>
                                                <div className={style.team_intr}>
                                                    <div className={style.team_address}>
                                                        常州金坛区
                                                    </div>
                                                    <div className={style.team_type}>
                                                        家庭亲子
                                                    </div>
                                                    <div className={style.team_peoplenum}>
                                                        适合2-3人
                                                    </div>
                                                </div>
                                                <div className={style.team_price}>
                                                    <span className={style.fz12}>¥</span>
                                                    <span className={style.fz18}>588</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={style.item} id={style.desc}>
                            <div className={style.item_tit}>
                                <div className={style.item_type}>目的地</div>
                                <div className={style.item_info}>去你想去的地方，发生一段故事</div>
                                <div className={style.item_more}>MORE></div>
                            </div>
                            <div className={`${style.item_con} ${style.desc_con}`}>
                                <div className={style.desc_box}>
                                    <div className={style.dest_list} style={{ width: "550px" }}>
                                        <div className={style.dest_item} style={{ backgroundImage: "url('http://img2.yitianyishu.com/18-9-3/21343835.jpg-220_220.jpg')" }}>
                                            <div className={style.dest_layer}>
                                                <div className={style.dest_info}>杭州</div>
                                            </div>
                                        </div>
                                        <div className={style.dest_item} style={{ backgroundImage: "url('http://img2.yitianyishu.com/18-9-3/21343835.jpg-220_220.jpg')" }}>
                                            <div className={style.dest_layer}>
                                                <div className={style.dest_info}>杭州</div>
                                            </div>
                                        </div>
                                        <div className={style.dest_item} style={{ backgroundImage: "url('http://img2.yitianyishu.com/18-9-3/21343835.jpg-220_220.jpg')" }}>
                                            <div className={style.dest_layer}>
                                                <div className={style.dest_info}>杭州</div>
                                            </div>
                                        </div>
                                        <div className={style.dest_item} style={{ backgroundImage: "url('http://img2.yitianyishu.com/18-9-3/21343835.jpg-220_220.jpg')" }}>
                                            <div className={style.dest_layer}>
                                                <div className={style.dest_info}>杭州</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={style.dest_list}>
                                        <div className={style.dest_item} style={{ backgroundImage: "url('http://img2.yitianyishu.com/18-9-3/21343835.jpg-220_220.jpg')" }}>
                                            <div className={style.dest_layer}>
                                                <div className={style.dest_info}>湖州</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        )
    }


}
