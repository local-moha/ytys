import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getThemeId, date2Data, orderDate } from '../filters'
import mno_detailCreator from '../store/actionCreator/mno_detail'
import Calender from '../components/CalenderJsx'
import Swiper from '../components/Swiper_mno'
import BtnGoHome from '../components/BtnGoHome'

import style from '../assets/css/mno_detail.module.css'
export class Mno_detail extends Component {
    constructor(props) {
        super(props);
        this.mno = getThemeId(this.props.location.search);
        this.state = {

        }
    }
    //轮播图
    setSwiper(masterData) {
        const { image_out_list, image_public_list } = masterData;
        const swiperList = (masterData.mno) ? [...image_out_list, ...image_public_list] : [];
        return (
            <div id={style.swiper}>
                <Swiper swiperList={swiperList}></Swiper>
            </div>
        )
    }
    setRoom(roomList) {
        let roomTitleInfo = <div></div>
        let roomListInfo = <div></div>
        if (roomList.length > 0) {
            roomTitleInfo = (
                <div className={style.rt_top}>
                    <div className={style.rt_tit}>房型</div>
                    <div className={style.rt_num}>{`(${roomList.length}套房型)`}</div>
                </div>
            )
            roomListInfo = roomList.map((v, i) => (
                <div key={i} className={style.rt_item}>
                    <div className={style.rt_img_w}>
                        <div className={style.rt_img} style={{
                            backgroundImage: `url(${v.image_master.small})`
                        }} ></div>
                        <div className={style.rt_img_num}>{v.image_slave_list.length}</div>
                    </div>
                    <div className={style.rt_info}>
                        <div className={style.rt_name}>{v.name}</div>
                        <div className={style.rt_food}></div>
                        <div className={style.rt_area}>{v.room_area}</div>
                        <div className={style.rt_bed}>{v.bed_style}</div>
                        <div className={style.rt_people}>{`宜住${v.max_people}人`}</div>
                        <div className={style.rt_price}>{`¥${v.price_min}起`}</div>
                        <div className={style.rt_order_btn}>立即预定</div>
                    </div>
                </div>
            ))
        }


        return (
            <div id={style.roomtype}>
                {roomTitleInfo}
                <div className={style.rt_list}>
                    {roomListInfo}
                </div>
                <div className={style.rt_showall}></div>
                <div className={style.rt_hide}></div>
            </div>
        )
    }
    render() {
        const { commentData, roomList, masterData, relateData } = this.props.mno_detail
        console.log(masterData);
        return (
            <div className={style.page}>
                <div className={style.container_top}>
                    {
                        /* 轮播图 */
                        this.setSwiper(masterData)
                    }
                    <div className={style.mno_intr}>
                        <div className={style.mno_tit_w}>
                            <div className={style.mno_tit}></div>
                        </div>
                        {/* <div className={style.mno_stock}></div> */}
                        <div className={style.mno_story}>
                            <div className={style.story_top}>
                                <div className={`${style.story_active} ${style.story_tit}`}></div>
                                <div className={style.story_tit}></div>
                            </div>
                            <div className={style.story_con}>
                                <div className={`${style.story} ${style.story_show}`}>

                                </div>
                                <div className={style.showstory_btn}></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.mno_activity} style={{
                    backgroundImage: `url(https://img.yitianyishu.com/master/out/88361dd8ae6840925d6b1b51715445aa)`
                }}></div>
                <div className={style.datePicker}>
                    {/* 日期选择器 */}
                    <Calender></Calender>
                </div>
                {/* 客房列表 */}
                {
                    this.setRoom(roomList)
                }
                {/* <div id={style.roomtype}>
                    <div className={style.rt_top}>
                        <div className={style.rt_tit}>房型</div>
                        <div className={style.rt_num}></div>
                    </div>
                    <div className={style.rt_list}>
                        <div className={style.rt_item}>
                            <div className={style.rt_img_w}>
                                <div className={style.rt_img}></div>
                                <div className={style.rt_img_num}></div>
                            </div>
                            <div className={style.rt_info}>
                                <div className={style.rt_name}></div>
                                <div className={style.rt_food}></div>
                                <div className={style.rt_area}></div>
                                <div className={style.rt_bed}></div>
                                <div className={style.rt_people}></div>
                                <div className={style.rt_price}></div>
                                <div className={style.rt_order_btn}></div>
                            </div>
                        </div>
                    </div>
                    <div className={style.rt_showall}></div>
                    <div className={style.rt_hide}></div>
                </div> */}
                {/* 房客评论 */}
                <div id={style.comment}>
                    <div className={style.comment_top}>
                        <div className={style.comment_tit}></div>
                        <div className={style.comment_num}></div>
                        <div className={style.comment_more}></div>
                    </div>
                    <div className={style.comment_item}>
                        <div className={style.cc_top}>
                            <img src="" alt="" className={style.cc_avatar} />
                            <div className={style.cc_name}></div>
                            <div className={style.cc_date}></div>
                            <div className={style.cc_mnoname}></div>
                        </div>
                        <div className={"cc_conent"}>
                            <div className={style.cc_word_out}>
                                <div className={"cc_word_in"}></div>
                                <div className={style._wordshowbtn}></div>
                            </div>
                            <div className={style.cc_imglist}></div>
                        </div>
                    </div>
                </div>
                <div id={style.location}>
                    <div className={style.location_top}>
                        <div className={`${style.title} ${style.fl}`}></div>
                        <div className={style.more}>MORE</div>
                    </div>
                    <div className={style.location_address}></div>
                    <div className={style.map_w}>
                        <img src="" alt="" id={style.map} />
                    </div>
                </div>
                <div className={style.needknow}>
                    <div className={style.title}>入住须知</div>
                    <div className={style.nk_con}>
                        <div className={style.nk_tit}></div>
                    </div>
                </div>
                <div className={style.mno_article}>
                    <div className={style.title}></div>
                    <div className={style.article_box}>
                        <div className={style.article_shadow}></div>
                        <div className={style.article_title}></div>
                    </div>
                </div>
                <div className={style.around_wapper}>
                    <div className={style.title}></div>
                    <div className={style.around_listwapper}>
                        <div className={style.around_list}>
                            <div className={style.around_img}></div>
                            <div className={style.around_info}>
                                <div className={style.around_line}>
                                    <div className={style.around_name}></div>
                                    <div className={style.around_price}></div>
                                </div>
                                <div className={style.around_features}>
                                    <div className={style.around_feature}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.end}>
                    <span className={style._end_icon}></span>
                    The end
                    <span className={style._end_icon}></span>
                </div>
                <div className={`${style.c_footer} ${style.footer}`}>
                    <div className={style.c_footer_collect}>
                        <div className={`${style.c_footer_collectIcon} ${style.c_footer_collect_unactive}`}></div>
                        <div className={style.c_footer_collectNum}></div>
                    </div>
                    <div className={style.c_footer_myorder}>
                        <div className={style.c_footer_myorderIcon} ></div>
                        <div className={style.c_footer_myorderWord}>订单</div>
                    </div>
                    <div className={style.c_footer_server}>
                        <div className={style.c_footer_serverIcon}> </div>
                        <div className={style.c_footer_serverWord}>客服</div>
                    </div>
                    <div className={style.c_footer_orderbtn}>
                        立即执行
                    </div>
                </div>
                <BtnGoHome></BtnGoHome>
            </div>
        )
    }
    componentDidMount() {
        // console.log(this);
        // console.log(this.props);
        let start_date = date2Data(orderDate(Date.now()));
        let end_date = date2Data(orderDate(Date.now() + 1000 * 60 * 60 * 24))
        if (localStorage.orderDate) {
            start_date = date2Data(JSON.parse(localStorage.orderDate).start_date)
            end_date = date2Data(JSON.parse(localStorage.orderDate).end_date)
        }
        this.props.getCommentData(this.mno);
        this.props.getRoomList(this.mno, start_date, end_date);
        this.props.getMasterData(this.mno);
        this.props.getRelateData(this.mno);
    }
}

const mapStateToProps = ({ mno_detail }) => ({
    mno_detail
})

const mapDispatchToProps = (dispatch) => ({
    getCommentData(mno) {
        dispatch(mno_detailCreator.asyncGetCommentData({ mno }))
    },
    getRoomList(mno, start_date, end_date) {
        dispatch(mno_detailCreator.asyncGetRoomList({ mno, start_date, end_date }))
    },
    getMasterData(mno) {
        dispatch(mno_detailCreator.asyncGetMasterData(mno))
    },
    getRelateData(mno) {
        dispatch(mno_detailCreator.asyncGetRelateData(mno))
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(Mno_detail)
