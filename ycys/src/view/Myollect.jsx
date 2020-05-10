import React, { Component } from 'react'
import axios from 'axios'
import style from '../assets/css/Myollect.module.css'
export default class Myollect extends Component {
    constructor(){
        super()
        this.state={
            list:[],
            img:null
        }
    }
    render() {
        return (
                <div className={style.page}>
                    {
                        this.state.list.map(v=>(
                            <div className={style.mnoitem} key={v.mno}>
                            <div className={style.mnoitem_img_w}>
                                <img src={v.image} alt=""/>
                            </div>
                            <div className={style.mnoitem_info}>
                                <div className={style.mnoitem_intr}>
                                    <div className={style._intr_name}>{v.name}</div>
                                    <div className={style.mno_features}>{v.location}
                                        <span className={style.feature_mask}></span>
                                    </div>
                        <div><span className={style._mno}>¥</span><span className={style._mno_price}>{v.price_min}/晚</span></div>
                                </div>
                            </div>
                        </div>
                        ))
                    }
                    {/* <div className={style.mnoitem}>
                        <div className={style.mnoitem_img_w}></div>
                        <div className={style.mnoitem_info}>
                            <div className={style.mnoitem_intr}>
                                <div className={style._intr_name}>语自在·老杭州墙门文化精品民宿</div>
                                <div className={style.mno_features}>语自在·老杭州墙门文化精品民宿
                                    <span className={style.feature_mask}></span>
                                </div>
                                <div><span className={style._mno}>¥</span><span className={style._mno_price}>1308/晚</span></div>
                            </div>
                        </div>
                    </div> */}
                    <div className={style._end}><span className={style._end_icon}></span>The end<span className={style._end_icon}></span></div>
            </div>
        )
    }
  async componentWillMount(){
        // https://api.yitianyishu.com/customer/collect-master?page=1&limit=9&_=1588481378055//原本数据不可调用
        // const data = await axios.get('/meisu/customer/collect-master?page=1&limit=9&_=1588481378055')//借用首页的数据
        const {data} = await axios.get('/meisu/master/list?page=1&limit=3&is_star=1&_=1588486941564')
        this.setState({
            list:data.data.list
        })
        console.log('收藏',this.state.list);
    }
}
