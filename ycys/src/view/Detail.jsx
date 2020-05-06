import React, { Component } from 'react';
import axios from 'axios';
import Carousel  from '../components/Carousel '
import style from '../assets/css/detail.module.css'
import filters from '../filters/index'
import Pay from '../components/Pay'
class Detail extends Component {
    constructor(props) {
        super(props);
        this.state={
            DistributionInfo:{},
            city_code:localStorage.city_code||1588581086488,
            active:false
        }
    }
    render() {
        // console.log(this.state.DistributionInfo);  
        const  {DistributionInfo} =this.state;
        let notice = []   
        let rules=[]   
        let tips=[] 
        let packages=[]
        if(DistributionInfo.detail){
            packages=[...[...DistributionInfo.packages]]
            console.log(packages);
            
            notice= DistributionInfo.notice
            rules=DistributionInfo.rules
            tips=DistributionInfo.tips
        };
        
        // console.log((DistributionInfo.packages));
        return (
            <div style={{background:'#f3f3f3'}}>
                <Carousel a={this.state.DistributionInfo.image_detail}></Carousel>
                <div className={`${style.on_sale} ${style.detail_sale}`}>
                    <div className={style.detail_price}>
                        <div className={style.price_now}>
                            <span style={{fontSize:'0.12rem'}}>￥</span>
                            <span className={style.price}>{packages.price}</span>
                            <s className={style.price_origin}>{packages.origin_price}</s>
                        </div>
                        <div className={style.remain_num}>{packages.origin_price}</div>
                    </div>
                    <div className={style.detail_countdown}>
                        <div className={style.cd_word}> 
                            距结束仅剩      
                        </div>
                        <div className={style.cd_word}> 
                                 {filters.lastDate(DistributionInfo.end_time)}
                        </div>
                    </div>
                </div>
                <div className={style.detail_info}>
                    <div className={style.detail_tit}>
                        {DistributionInfo.title}
                    </div>
                    <div className={style.type_chose}>
                        <div className={style.detail_tit}>套餐选择</div>
                        <div className={style.bor_bottom}></div>
                        <div className={style.item_roomlist}>
                            <div className={`${style.room_active} ${style.item_room}`} onClick={this.active.bind(this)}>
                            5折含餐春日度假套餐
                            </div>
                        </div>
                    </div>
                    <div className={style.detail_container}>
                        <div className={style.switch_header}>
                            <div className={style.header_inner}>
                                <div className={style.switch_btn}>
                                    <div className={style.sw_in}>套餐详情</div>
                                </div>
                                <div className={style.switch_btn}>
                                    <div className={style.sw_in}>
                                        购买须知
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div  className={style.imgbox} dangerouslySetInnerHTML = {{ __html:DistributionInfo.detail }} />
                <div className={style.part_content}>
                    <div className={style.rli_tit}>购买须知</div>
                    {
                        notice.map((v,index)=>(
                            <div className={style.c_rulelist} key={index}>
                                <div className={style.  c_rulelist_key}>{v.key}</div>
                                <div className={style.c_rulelist__val}>{v.value}</div>
                            </div>
                        )
                        )
                    }
                </div>
                <div className={style.part_content}>
                        <div className={style.rli_tit}>退订规则</div>
                        {
                             rules.map((v,index)=>(
                                <div className={style.c_rulelist} key={index}>
                                    <div className={style.  c_rulelist_key1}>{v.key}</div>
                                    <div className={style.c_rulelist__val1}>{v.value}</div>
                                </div>
                            )
                            )
                        }
                </div>
                <div className={style.part_content}>
                        <div className={style.rli_tit}>退订规则</div>
                        {
                             tips.map((v,index)=>(
                                <div className={style.c_rulelist} key={index}>
                                    <div className={style.  c_rulelist_key}>{v.key}</div>
                                    <div className={style.c_rulelist__val2}>{v.value}</div>
                                </div>
                            )
                            )
                        }
                </div>
                <div className={style.part_content} style={{marginBottom:'100px'}}>
                    <div className={style.part_tit}>关注我们</div>
                    <div >
                        <img className={style.fs_qrcode} src={DistributionInfo.mp_qrcode} alt=""/>
                    </div>
                    <div className={style.fs_con}>
                        <div className={style.fsc_word1}>更多特价套餐，关注一田一墅公众号</div>
                        <div className={style.fsc_word1}>出游/聚会/团建必备！</div>
                    </div>
                </div>
                <Pay></Pay>
            </div>
        );
    }
    async componentDidMount(){
       await this.saveDistribution()
    }
   async saveDistribution(){
        const data =await axios.get(`/minsu/distribution/index/detail${this.props.location.search}&_=${this.state.city_code}`)
        console.log(data.data.data);
        this.setState({
            DistributionInfo:data.data.data
        })
    }
    active(e){
        if(!this.state.isActive){
            e.target.className =`${style.item_room} ${style.active}`
        }else{
            e.target.className =style.item_room
        }
        this.setState({
            isActive:!this.state.isActive
        })
    }
}
export default Detail;