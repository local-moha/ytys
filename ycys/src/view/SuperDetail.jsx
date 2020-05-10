import React, { Component } from 'react'
import axios from 'axios'
import style from '../assets/css/SuperDetail.module.css'
import { Carousel } from 'zarm';

export default class SuperDetail extends Component {
    constructor(){
        super();
        this.state={
            data:[],
            image_detail:[],
            rules:[],
            notice:[],
            tips:[]
        }
    }
   async componentWillMount(){
        const itemId = this.props.match.params.id
       const id= itemId.split('=')[1]
        const {data} = await axios.get('/meisu/team/team/detail?team_id='+id+'&_=1588771786311')
        console.log(111,data.data);
        this.setState({
            data:data.data,
            image_detail:data.data.image_detail,
            rules:data.data.rules,
            notice:data.data.notice,
            tips:data.data.tips
        })
        // console.log(222,this.state.data);     
    }
    render() {
        console.log(4444,this.state.data);
        // const img=this.state.image_detail
        const contentRender = () => {
            return this.state.image_detail.map((item, i) => {
              return (
                <div className="carousel__item__pic" key={+i}>
                  <img src={item} alt="" draggable={false} />
                </div>
              );
            });
          }
        return ( 
            <div className={style.page}>
                <div className={style.swipe_w}>
                    <Carousel
                       showPagination
                    height='160'
                        autoPlay
                        loop
                        direction="left"
                        onChangeEnd={(index) => {
                        console.log(`onChangeEnd: ${index}`);
                        }}
                    >
                        {contentRender()}
                    </Carousel>
                </div>
                <div className={style.header_info}>
                    <div className={style.super_tit}>{this.state.data.title}</div>
                    <div className={style.super_intr}>
                    <div className={style.super_address}>{this.state.data.city_name}</div>
                    <div className={style.super_peoplenum}>适合{this.state.data.num}人</div>
                    </div>
                    <div className={style.item_tit}>套餐内容</div>
                    <div className={style.bor_bottom}></div>
                    <div className={style.super_content}>
                    <div dangerouslySetInnerHTML={{__html:this.state.data.content}}></div>
                    </div>
                </div>
                <div className={style.detail_container}>
                        <div className={style.switch_header}>
                            <div className={style.header_inner}>
                                <div className={style.switch_btn}>套餐详情</div>
                                <div className={style.switch_btn}>购买须知</div>
                                <div className={style.switch_btn}>位置信息</div>
                                <div className={style.switch_btn}>如何使用</div>
                            </div>
                        </div>
                </div>
                <div className={style.detail_content}>
                    <div dangerouslySetInnerHTML={{__html:this.state.data.detail}}></div>
                </div>
                <div className={style.js_rule}>
                    <div className={style.ruleitem}>
                        <div className={style.ruleitem__tit}>购买须知</div>
                        <div className={style.ruleitem__content}>
                            {
                                this.state.notice.map((v,i)=>(
                                    <div className={style.c_rulelist__item} key={i}>
                                        <div className={style.c_rulelist__key}>{v.key}</div>
                                <div className={style.c_rulelist__val}>{v.value}</div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className={style.js_rule}>
                    <div className={style.ruleitem}>
                        <div className={style.ruleitem__tit}>退改规则</div>
                        <div className={style.ruleitem__content}>
                            {
                                this.state.rules.map((v,i)=>(
                                    <div className={style.c_rulelist__item} key={i}>
                                        <div className={style.c_rulelist__key1}>{v.key}</div>
                                <div className={style.c_rulelist__val}>{v.value}</div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className={style.js_rule}>
                    <div className={style.ruleitem}>
                        <div className={style.ruleitem__tit}>退改规则</div>
                        <div className={style.ruleitem__content}>
                            {
                                this.state.tips.map((v,i)=>(
                                    <div className={style.c_rulelist__item} key={i}>
                                        <div className={style.c_rulelist__key}>{v.key}</div>
                                <div className={style.c_rulelist__val}>{v.value}</div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className={style.address_content}>
                    <div className={style.tit}>
                        <div className={style.tit_word}>位置信息</div>
                        <div className={style.tit_more}>MORE></div>
                    </div>
                </div>
                <div className={style.tit_content}>
                        <div className={style._addresss_detail}>{this.state.data.location}</div>
                        <img src="https://apis.map.qq.com/ws/staticmap/v2/?center=29.5992580000,119.0250310000&scale=2&zoom=13&size=335*128&maptype=roadmap&markers=size:large|color:0xFFCCFF|label:k|29.5992580000,119.0250310000&key=GZ7BZ-JOPRQ-JNG5D-GMISX-47FDZ-YEFDO" alt=""/>
                </div>
                <div className={style.use_content}>
                    <div className={style.tit}>如何使用</div>
                    {/* <div className={style.howtosue}></div> */}
                </div>
                <div className={style.howtosue}>            
                    1.
                    若您已经确认出行日期，请联系客服确认房态，客服帮您预约完后再购买套餐，拨打客服热线：
                    <span className={style.howtosue__red}>0571-85285660</span>
                    或套餐右下方的在线客服联系客服。
                    <div>
                    2.
                        若您未确认出行日期，由于部分套餐售卖有时间限制（比如3-7天），到期会下线，您可先购买好套餐，后续确定好出行日期，联系客服预约。拨打客服热线： <span className={style.howtosue__red}>0571-85285660</span>
                        </div>
                </div>
            </div>
        )
    }
}
