import React, { Component } from 'react';
import axios from "axios"

export default class Superhotel_home extends Component {
    constructor(props){
        super(props)
        this.state={
            page:1,
            limit:20,
            is_star:1,
            _:1588345400094 ,
            result:[]
        }
    }
    render() {
        return (
            <div>
                <img data-v-472c3908="" src="https://wechat.yitianyishu.com/minsu/img/hotel.eb53288b.png" className="top-img" />
                <div data-v-472c3908="" className="top-btn">
                    <div data-v-472c3908="" className="swipe-hotel">
                        <div data-v-472c3908="" className="ani-w">
                            <div data-v-472c3908="" className="ani-name">广州柏悦酒店 江景客房双早</div>
                            <div data-v-472c3908="" className="ani-name">广州广交会威斯汀酒店 行政双早</div>
                        </div>
                    </div>
                </div>
                <div data-v-3954ad09="" data-v-472c3908="" className="_btnselect">
                    <div data-v-1dcd9ab1="" data-v-3954ad09="" className="_arrow">全部城市
                        <span data-v-1dcd9ab1="" className="_arrow-icon"></span>
                    </div>
                </div>
                <div data-v-472c3908="" className="hotel-list">
                    {this.state.result.map(v=>(
                        <div key={v.mno} data-v-472c3908="" className="hotel-li">
                            <img data-v-472c3908="" src={'https://img.yitianyishu.com/'+ v.image} className="hl-l" lazy="loaded" />
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
                </div>
            </div>
        )
    }
    async listMore(){ 
        const {data}=await axios.get("/yitianyishu/master/list",{
            params:{
                page:this.state.page,
                limit:this.state.limit,
                is_star:this.state.is_star,
                _:this.state._ 
            }
        })
        console.log(data)
        this.setState({
            // page:data.content.data.page.page,
            // limit:data.content.data.page.limit,
            // is_star:data.content.data.page.is_star,
            // _:data.content.data.page._ 
        })
    }
    async componentDidMount(){
        this.listMore()
    }
}
