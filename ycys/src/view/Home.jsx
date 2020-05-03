import React, { Component } from 'react'
import { connect } from 'react-redux'
import homeCreator from '../store/actionCreator/home'
import style from '../assets/css/home.module.css'
import MyNav from '../components/MyNav'
import Swiper from '../components/Swiper'
import { date } from '../filters/index'

export class Home extends Component {
    render() {
        // console.log(this.props.home);
        const { themeList, superList, hotCityList, carouselList } = this.props.home;
        // console.log(carouselList);
        const destOne = [];
        const destTwo = [];
        return (
            <div className={style.page}>
                {/* <div className={style.appdownload_bar}>
                    <div className={style.appdownload_avatar}></div>
                    <div className={style.appdownload_word}>五一端午可用低至3折人均200+ </div>
                    <div className={style.appdownload_close}></div>
                    <div className={style.appdownload_btn}>立即抢购</div>
                </div> */}
                <div className={style.header_top}>
                    <div className={style.swiper_w}>
                        <Swiper carouselList={carouselList}></Swiper>
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
                            <div className={style.search_input} onClick={() => { this.props.history.push("/meisu/search.html") }}>
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
                            <div className={`${style.large_box} ${style.fl}`} style={{ backgroundImage: `url(${themeList.length > 0 ? themeList[0].image.middle : ""})` }}>
                                <div className={style.re_info}>
                                    <div className={style.re_tit}>{themeList.length > 0 ? themeList[0].title : ""}</div>
                                    <div className={style.re_intr}>{themeList.length > 0 ? themeList[0].subtitle : ""}</div>
                                </div>
                            </div>
                            <div className={`${style.small_box} ${style.fr}`} style={{ backgroundImage: `url(${themeList.length > 0 ? themeList[1].image.middle : ""})` }}>
                                <div className={style.re_info}>
                                    <div className={style.re_tit}>{themeList.length > 0 ? themeList[1].title : ""}</div>
                                    <div className={style.re_intr}>{themeList.length > 0 ? themeList[1].subtitle : ""}</div>
                                </div>
                            </div>
                        </div>
                        <div className={style.ovh} >
                            <div className={`${style.small_box} ${style.fl}`} style={{ backgroundImage: `url(${themeList.length > 0 ? themeList[2].image.middle : ""})` }}>
                                <div className={style.re_info}>
                                    <div className={style.re_tit}>{themeList.length > 0 ? themeList[2].title : ""}</div>
                                    <div className={style.re_intr}>{themeList.length > 0 ? themeList[2].subtitle : ""}</div>
                                </div>
                            </div>
                            <div className={`${style.large_box} ${style.fr}`} style={{ backgroundImage: `url(${themeList.length > 0 ? themeList[3].image.middle : ""})` }}>
                                <div className={style.re_info}>
                                    <div className={style.re_tit}>{themeList.length > 0 ? themeList[3].title : ""}</div>
                                    <div className={style.re_intr}>{themeList.length > 0 ? themeList[3].subtitle : ""}</div>
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
                                    {
                                        superList ? superList.map(v => (
                                            <div key={v.team_id} className={`${style.super_item} ${style.team_item}`}>
                                                <div className={style.team_img_w}>
                                                    <div className={`${style.team_img} ${style.bg_img}`} style={{ backgroundImage: `url(${v.image_url_list.middle})` }}></div>
                                                    <div className={style.team_timebox}>
                                                        <div className={style.team_icon} style={{ background: "rgb(5,229,128)" }}></div>
                                                        进行中 剩余{date(v.end_time / 1 - v.start_time / 1)}
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
                                    hotCityList ? hotCityList.forEach((v, i) => {
                                        if (i % 2 === 0) {
                                            destOne.push(v)
                                        } else {
                                            destTwo.push(v)
                                        }
                                    }) : ""
                                }
                                <div className={style.dest_list} style={{ width: "550px" }}>
                                    {
                                        destOne.map(v => (
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
                                <div className={style.dest_list} style={{ width: "550px" }}>
                                    {
                                        destTwo.map(v => (
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
                            </div>
                        </div>
                    </div>
                </div>
                <MyNav></MyNav>
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
