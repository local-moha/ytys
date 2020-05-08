import React, { Component } from 'react'
import axios from 'axios'

export default class Superhotel_day extends Component {
    constructor(props){
        super(props)
        this.state={
            list:[],
            list1:[],
            _:1588734886816,
            style: {display:"none"},
        }
    }
    showhide() {
		if(this.state.style.display==="none"){
			this.setState({style:{display:"block"}})
		}else{
			this.setState({style:{display:"none"}})
		}
    }
    render() {
        return (
            <div data-v-e21570da="" className="page" style={{display:"block"}}>
                <img data-v-e21570da="" src="https://wechat.yitianyishu.com/minsu/img/ww@2x.2df422bd.png" className="top-img" />
                <div data-v-e21570da="" className="city-list navlist">
                    {this.state.list.map(v=>(
                        <div key={v.city_code} data-v-e21570da="" className="city-li active">{v.city_name}</div>
                    ))}
                </div>
                {this.state.list.map(v=>(
                    <div data-v-e21570da="" className="city-part">
                        <div key={v.city_code} data-v-e21570da="" className="city-name" data-src="" lazy="loaded" style={{backgroundImage: `url(${v.image_url})`}}>{v.city_name}</div> 
                        <div data-v-e21570da="" className="city-hotel-list">
                            {v.list.map(v=>(
                                <div key={v.sale_id} data-v-e21570da="" className="city-hotel-li">
                                    <div data-v-e21570da="" className="hotel-name">{v.name}</div>
                                    <div data-v-e21570da="" className="hotel-price">
                                        <div data-v-e21570da="" className="price-low">
                                            <span data-v-e21570da="">特价</span>
                                            ¥{v.price}
                                        </div>
                                        <div data-v-e21570da="" className="price-high">某程价¥{v.other_price}</div>
                                    </div>
                                    <div data-v-e21570da="" className="hotel-address">{v.location}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
                <div data-v-e21570da="" className="footer-word">↓优惠预订更多全球星级酒店，请联系田墅妹↓</div>
                <div data-v-e21570da="" className="footer">
                    <div data-v-e21570da="" className="footer-btn-w">
                        <div data-v-587f0178="" data-v-e21570da="" className="_btn-default _btn-red _btn-large">
                          <span data-v-e21570da="" data-v-587f0178="" className="btn-word" onClick={this.showhide.bind(this)}>我要预订</span>
                        </div>
                    </div>
                </div>
                <div data-v-084011fd="" data-v-e21570da="" className="_serivce-box-w" style={this.state.style}>
                    <div data-v-084011fd="" className="_serivce-box" style={this.state.style}>
                        <div data-v-084011fd="" className="_serivce-online">在线客服</div>
                        <div data-v-084011fd="" className="_serivce-tel">客服电话：0571-85285660</div>
                        <div data-v-084011fd="" className="_serivce-cancel" onClick={this.showhide.bind(this)}>取消</div>
                    </div>
                </div>
                <div data-v-e21570da="" className="city-list stick-top" style={{display: "none"}}>
                    {this.state.list.map(v=>(
                        <div key={v.city_code} data-v-e21570da="" className="city-li active">{v.city_name}</div>
                    ))}
                </div>
            </div>
        )
    }
    //今日特价
    async specialOffer(){
        const {data}=await axios.get("/minsu/sale/index",{
            params:{
                _:this.state._
            }
        })

        console.log(222,data.data.list)
        this.setState({
            list:data.data.list,
        })
        
    }
    async componentDidMount(){
        this.specialOffer();
    }
}
