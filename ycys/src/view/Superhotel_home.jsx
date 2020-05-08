import React, { Component } from 'react';
import axios from "axios";
import Nav from "../components/Nav"
export default class Superhotel_home extends Component {
    constructor(props){
        super(props)
        this.state={
            page:0,
            limit:20,
            is_star:1,
            // _:1588345400094 ,
            list:[],
            sort:2,
            data:[],
            style: {display:"none"},
            list1:[],
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
            <div data-v-472c3908="" className="page" style={{display:"block"}}>
                <img data-v-472c3908="" src="https://wechat.yitianyishu.com/minsu/img/hotel.eb53288b.png" className="top-img" />
                <div data-v-472c3908="" className="top-btn">
                    <div data-v-472c3908="" className="swipe-hotel" onClick={()=>{this.props.history.push("/meisu/superhotel_day.html")}}>
                        <div data-v-472c3908="" className="ani-w">
                            {this.state.list1.map(v=>(
                                v.list.map(v=>(
                                    <div key={v.sale_id} data-v-472c3908="" className="ani-name">{v.name}</div>
                                ))
                            ))}
                        </div>
                    </div>
                </div>
                <div data-v-3954ad09="" data-v-472c3908="" className="_btnselect" >
                    <div data-v-1dcd9ab1="" data-v-3954ad09="" className="_arrow" onClick={this.showhide.bind(this)}>全部城市
                        <span data-v-1dcd9ab1="" className="_arrow-icon"></span>
                    </div>
                </div>
                <div data-v-13eda1d2="" data-v-472c3908="" className="_slidelist" style={this.state.style}>
                    <div data-v-13eda1d2="" className="_slide-content">
                        <div data-v-472c3908="" className="area-content">
                            <div data-v-472c3908="" className="area-item">全部城市（226）</div>
                            {this.state.data.map(v=>(
                                <div key={v.city_code}  data-v-472c3908="" className="area-item"     
                                >{v.city_name}({v.master_count})</div>
                            ))}
                        </div>
                    </div>
                    <div data-v-13eda1d2="" className="_slide-bottom">
                        <div data-v-13eda1d2="" className="_slide-close" onClick={this.showhide.bind(this)}></div>
                    </div>
                </div>
                <div data-v-472c3908="" className="hotel-list">
                    {this.state.list.map(v=>(
                        <div key={v.mno} data-v-472c3908="" className="hotel-li" onClick={()=>{this.props.history.push({pathname: `/meisu/super_detail.html?mon=${v.mno}`, state: {data: v}})}}>
                            <img data-v-472c3908="" src={v.image} className="hl-l" lazy="loaded" />
                            <div data-v-472c3908="" className="hl-r">
                                <div data-v-472c3908="" className="hl-name">{v.name}</div>
                                <div data-v-472c3908="" className="hl-address">{v.location}</div>
                                <div data-v-472c3908="" className="hl-price">
                                    <span data-v-472c3908="" className="fz12">¥</span>
                                    <span data-v-472c3908="" className="hl-price-min">{v.price_min}</span>
                                    <span data-v-472c3908="" className="fz12 grey">起</span>
                                </div>
                            </div>
                        </div>
                    ))}
                    <input type="button" value={"加载更多"} ref={"btn"} onClick={this.hotelList.bind(this)}/>
                </div>
                <Nav></Nav>
            </div>
        )
    }
    //酒店列表
    async hotelList(){ 
        this.state.page++;
        this.refs.btn.value="加载中";
        const {data}=await axios.get("/minsu/master/list",{
            params:{
                page:this.state.page,
                limit:this.state.limit,
                is_star:this.state.is_star,
            }
        })
        console.log(data.data.list)
        this.setState({
            page:data.data.pager.page,
            limit:data.data.pager.limit,
            is_star:data.data.list.is_star,
            list:[
                ...this.state.list,
                ...data.data.list
            ]
        })
    }
    //城市列表
    async cityList(){
        const {data}=await axios.get("/minsu/v2/site/all-city",{
            params:{
                is_star:this.state.is_star,
                sort:this.state.sort
            }
        })
        console.log(1111,data)
        this.setState({
            // is_star:data.state.is_star,
            // sort:this.state.sort,
            data:data.data,
        })
    }
    //今日特价
    async specialOffer(){
        const {data}=await axios.get("/minsu/sale/index")
        console.log(222,data.data.list)
        this.setState({
            list1:data.data.list
        })
        
    }
    async componentDidMount(){
        this.hotelList();
        this.cityList();
        this.specialOffer();
    }
}
