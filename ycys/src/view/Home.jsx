import React, { Component } from 'react'
import { connect } from 'react-redux'
import homeCreator from '../store/actionCreator/home'
import style from '../assets/css/home.module.css'
import MyNav from '../components/MyNav'
import Swiper from '../components/Swiper'
import { dateChoose, changeArr } from '../filters/index'
import Calender from '../components/CalenderJsx'

export class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render() {
        // console.log(this.props);
        const { themeList, superList, hotCityList, carouselList } = this.props.home;
        // console.log(carouselList);
        const newThemeList = changeArr(themeList, 2);
        const newHotCityList = changeArr(hotCityList, 5);
        return (
            <div className={style.page}>
                {/* <div className={style.appdownload_bar}>
                    <div className={style.appdownload_avatar}></div>
                    <div className={style.appdownload_word}>五一端午可用低至3折人均200+ </div>
                    <div className={style.appdownload_close}></div>
                    <div className={style.appdownload_btn}>立即抢购</div>
                </div> */}
                <div className={style.header_top}>
                    {/* 轮播图 */}
                    <div className={style.swiper_w}>
                        <Swiper carouselList={carouselList}></Swiper>
                    </div>
                    {/* 定位 */}
                    <div className={style.search_box}>
                        <div className={style.location_item}>
                            <div className={style.location_address}>武汉</div>
                            <div className={style.current_location}>
                                定位到当前
                            </div>
                        </div>
                        {/* 日期封成公共组件 */}
                        <Calender></Calender>
                        {/* <div className={style.join_item}>
                            <div className={`${style.jitem_item} ${style.fl}`}>
                                <div className={style.jitem_action}>入住</div>
                                <div className={style.jitem_date}>5月1日</div>
                            </div>
                            <div className={style.jitem_duaring}>共1晚</div>
                            <div className={`${style.jitem_item} ${style.fr}`}>
                                <div className={style.jitem_action}>离开</div>
                                <div className={style.jitem_date}>5月2日</div>
                            </div>
                        </div> */}
                        {/* 搜索 */}
                        <div className={style.search_item}>
                            <div className={style.search_input} onClick={() => {
                                this.props.history.push("/meisu/search.html")
                            }}>
                                景点/民宿/关键字
                            </div>
                            <div className={style.search_btn} onClick={() => {
                                // this.props.history.push("/meisu/mno_list.html")
                            }}>
                                搜索
                            </div>
                        </div>
                    </div>
                    <div className={style.couponItem} style={{
                        display: localStorage.hasgetCoupon ? "none" : "block"
                    }} onClick={() => {
                        this.props.history.push("/meisu/getCoupon.html")
                    }}>
                        您有1000元优惠券尚未领取
                            <div className={style.go_coupon}>立即领取></div>
                    </div>
                    <div className={style.entry_w}>
                        <div className={`${style.entry} ${style.stock_entry}`} onClick={() => {
                            //跳转特价房券./meisu/stock_list.html
                            this.props.history.push("/meisu/stock_list.html")
                        }}>特价房券</div>
                        <div className={`${style.entry} ${style.sale_entry}`} onClick={() => {
                            //跳转特价房券./meisu/stock_list.html
                            this.props.history.push("/distribution")
                        }}>限时抢购</div>
                        <div className={`${style.entry} ${style.super_entry}`}>超值套餐</div>
                        <div className={`${style.entry} ${style.cutrpice_entry}`}>砍价服务</div>
                    </div>
                    <div className={style.recommend_item}>
                        {
                            newThemeList.map((subList, index) => (
                                <div key={index} className={style.ovh} style={{
                                    marginBottom: (index ? 0 : "16px")
                                }}>
                                    {
                                        subList.map((v, i) => (
                                            <div key={v.banner_id} className={
                                                index ? (i ? (`${style.large_box} ${style.fr}`) : (`${style.small_box} ${style.fl}`)) : (i ? (`${style.small_box} ${style.fr}`) : `${style.large_box} ${style.fl}`)
                                            } style={{
                                                backgroundImage: `url(${v.image.middle})`
                                            }} onClick={() => {
                                                this.props.history.push("/meisu/theme.html?theme_id=" + v.banner_id)
                                            }}>
                                                <div className={style.re_info}>
                                                    <div className={style.re_tit}>
                                                        {v.title}
                                                    </div>
                                                    <div className={style.re_intr}>
                                                        {v.subtitle}
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            ))
                        }
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
                                    {
                                        // console.log(superList),
                                        superList ? superList.map(v => (
                                            <div key={v.team_id} className={`${style.super_item} ${style.team_item}`} onClick={() => {
                                                //跳转super_detail.html?team_id
                                                // this.props.history.push("/meisu/super_detail.html?team_id=" + v.team_id)
                                            }}>
                                                <div className={style.team_img_w}>
                                                    <div className={`${style.team_img} ${style.bg_img}`} style={{ backgroundImage: `url(${v.image_url_list.middle})` }}></div>
                                                    <div className={style.team_timebox}>
                                                        <div className={style.team_icon} style={{ background: "rgb(5,229,128)" }}></div>
                                                        进行中 剩余{dateChoose(v.end_time / 1 - v.start_time / 1)}
                                                    </div>
                                                </div>
                                                {/* 怎么是透明的 */}
                                                <div className={style.team_info}>
                                                    <div className={style.team_name}>
                                                        {v.title}
                                                    </div>
                                                    <div className={style.team_intr}>
                                                        <div className={style.team_address}>
                                                            {v.city_name + v.area_name}
                                                        </div>
                                                        <div className={style.team_type}>
                                                            {v.type_name}
                                                        </div>
                                                        <div className={style.team_peoplenum}>
                                                            适合{v.num}人
                                                            </div>
                                                    </div>
                                                    <div className={style.team_price}>
                                                        <span className={style.fz12}>¥</span>
                                                        <span className={style.fz18}>
                                                            {v.max_price}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        )) : ""
                                    }
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
                                {
                                    newHotCityList.map((subList, index) => (
                                        <div key={index} className={style.dest_list} style={{ width: "550px" }}>
                                            {
                                                subList.map(v => (
                                                    <div key={v.city_code} className={style.dest_item} style={{ backgroundImage: `url(${v.image_url_list.small})` }}>
                                                        <div className={style.dest_layer}>
                                                            <div className={style.dest_info}>
                                                                {v.city_name}
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <MyNav {...this.props}></MyNav>
            </div>

        )
    }
    componentDidMount() {
        this.props.getThemeList();
        this.props.getSuperList();
        this.props.getHotCityList();
        this.props.getCarouselList();
    }


}

const mapStateToProps = ({ home }) => ({
    home
})

const mapDispatchToProps = (dispatch) => ({
    getThemeList() {
        dispatch(homeCreator.asyncGetTheme())
    },
    getSuperList() {
        dispatch(homeCreator.asyncGetSuper())
    },
    getHotCityList() {
        dispatch(homeCreator.asyncGetHotCity())
    },
    getCarouselList() {
        dispatch(homeCreator.asyncGetCarousel())
    },

})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
