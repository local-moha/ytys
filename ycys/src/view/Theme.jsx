import React, { Component } from 'react'
import { connect } from 'react-redux'
import themeDataCreator from '../store/actionCreator/theme'
import { getThemeId, date2Data, orderDate } from '../filters'
import style from '../assets/css/theme.module.css'
import BtnGoHome from '../components/BtnGoHome'
import Calender from '../components/CalenderJsx'
export class Theme extends Component {
    constructor(props) {
        super(props)
        this.state = {
            active: 0,
            listActive: [],
        }
        this.listInit = [];
        this.banner_id = getThemeId(this.props.location.search);
    }
    render() {
        const { banner, destination } = this.props.theme.themeData;
        this.listInit = destination ? destination[0].list : []
        console.log(this.props.theme);
        return (
            // <div></div>
            <div className={style.page}>
                <div className={style.top} style={{
                    backgroundImage: `url(${banner ? banner.theme_image.big : ""})`
                }}>
                    <div className={`${style.dateselect} ${style.filter_time}`}>
                        {/* 日期的公共组件 */}
                        <Calender></Calender>
                    </div>
                </div>
                <div className={`${style.city_list} ${style.navlist}`}>
                    {
                        destination ? destination.map((item, index) => (
                            <div key={index} className={`${style.city_li} ${this.state.active === index ? style.active : ""}`} onClick={() => {
                                this.setState({
                                    active: index,
                                    listActive: item.list
                                })
                            }}>
                                {
                                    item.destination_name
                                }
                            </div>
                        )) : ""
                    }
                </div>
                <div className={"content"}>
                    {
                        this.state.listActive.length > 0 ? this.showContent(this.state.listActive) : this.showContent(this.listInit)
                    }

                </div>
                <BtnGoHome {...this.props}></BtnGoHome>
                {/* 吸顶的 */}
                {/* <div className={style}></div> */}
            </div>
        )
    }
    showContent(hotelList) {
        // console.log(hotelList);
        return hotelList.map(v => (
            <div key={v.mno} className={style.mnoitem} onClick={() => {
                this.props.history.push("/meisu/mno_detail.html?mno=" + v.mno)
            }}>
                <div className={style.mnoitem_img_w}>
                    <div className={`${style.mnoitem_img} ${style.bg_image}`} style={{
                        backgroundImage: `url(${v.image.big})`
                    }} ></div>
                </div>
                <div className={"mnoitem_info"}>
                    <div className={style.mnoitem_intr}>
                        <div className={style.quick_pay}>
                            闪订
                        </div>
                        <div className={style.intr_name}>
                            {v.name}
                        </div>
                    </div>
                    <div className={style.mno_feature_w}>
                        <div className={style.mno_feature}>
                            <div className={style.feature_location}>
                                {v.city_name + v.area_name}
                            </div>
                            {
                                v.features.map(feature => (
                                    <div key={feature} className={style.feature_mnoitem}>
                                        {"#" + feature}
                                    </div>
                                ))
                            }
                        </div>
                        <div className={style.feature_mask}></div>
                    </div>
                    <div className={style.mno_price}>
                        <span>¥</span>
                        {v.price_min + "/晚"}
                    </div>
                </div>
            </div>
        ))
    }
    componentDidMount() {
        let start_date = date2Data(orderDate(Date.now()));
        let end_date = date2Data(orderDate(Date.now() + 1000 * 60 * 60 * 24))
        if (localStorage.orderDate) {
            start_date = date2Data(JSON.parse(localStorage.orderDate).start_date)
            end_date = date2Data(JSON.parse(localStorage.orderDate).end_date)
        }
        this.props.getThemeDataList(this.banner_id, start_date, end_date);
    }
}

const mapStateToProps = ({ theme }) => ({
    theme
})

const mapDispatchToProps = (dispatch) => ({
    getThemeDataList(banner_id, start_date, end_date) {
        dispatch(themeDataCreator.asyncGetThemeData({ banner_id, start_date, end_date }))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Theme)
