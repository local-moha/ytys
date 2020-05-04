import React, { Component } from 'react'
import { connect } from 'react-redux'
import themeDataCreator from '../store/actionCreator/theme'
import { getThemeId } from '../filters'
import style from '../assets/css/theme.module.css'
import BtnGoHome from '../components/BtnGoHome'
export class Theme extends Component {
    constructor(props) {
        super(props)
        this.state = {
            active: 0,
            listActive: [],
        }
        this.listInit = []
    }
    render() {
        const { banner, destination } = this.props.theme.themeData;
        this.listInit = destination ? destination[0].list : []
        // console.log(this);
        return (
            <div className={style.page}>
                <div className={style.top} style={{
                    backgroundImage: `url(${banner ? banner.theme_image.big : ""})`
                }}>
                    <div className={`${style.dateselect} ${style.filter_time}`}>
                        {/* 日期的公共组件 */}
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
                alert("内个sei 你写的mno_detail.html好了没")
                // this.props.history.push("/meisu/mno_detail.html?mno=" + v.mno)
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
        const banner_id = getThemeId(this.props.location.search)
        this.props.getThemeDataList({ banner_id });
    }
}

const mapStateToProps = ({ theme }) => ({
    theme
})

const mapDispatchToProps = (dispatch) => ({
    getThemeDataList({ banner_id }) {
        dispatch(themeDataCreator.asyncGetThemeData({ banner_id }))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Theme)
