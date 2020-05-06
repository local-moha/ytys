import React, { Component } from 'react';
import axios from "axios";
export default class Superhotel_detail extends Component {
    constructor(props){
        super(props)
        console.info(11122,props)
        this.list = props.location.state.data
        this.state={   
            mno:this.list.mno,
            page:1,
            limit:30,
            _:1588570486867,
            data:[],
            det:[],
            det1:[],
            det2:[],
            style: {display:"none"},
            style1: {display:"none"},
            style2: {display:"none"},
        }
    }
    showhide() {
		if(this.state.style.display==="none"){
			this.setState({style:{display:"block"}})
		}else{
			this.setState({style:{display:"none"}})
		}
    }
    showhide1() {
		if(this.state.style1.display==="none"){
			this.setState({style1:{display:"block"}})
		}else{
			this.setState({style1:{display:"none"}})
		}
    }
    showhide2() {
		if(this.state.style2.display==="none"){
			this.setState({style2:{display:"block"}})
		}else{
			this.setState({style2:{display:"none"}})
		}
    }
    render() {
        return (
            <div data-v-0df0ec45="" className="page" style={{display: "block"}}>
                <div data-v-0df0ec45="" className="top-img">
                    {this.state.det1.map(v=>(
                        <div key={v.des} data-v-0df0ec45="" className="img-public lazy-img" data-src={v.image} lazy="loaded" style={{backgroundImage:`url(${v.image})`}}>
                            <div data-v-0df0ec45="" className="room-imgnum">30</div>
                        </div>
                    ))} 
                    {this.state.det2.map(v=>(
                        <div key={v.des} data-v-0df0ec45="" className="img-out lazy-img" data-src={v.image} lazy="loaded" style={{backgroundImage:`url(${v.image})`}}>
                            <div data-v-0df0ec45="" className="room-imgnum">5</div>
                        </div>
                    ))} 
                    {this.state.det1.map(v=>(
                        <div key={v.des} data-v-0df0ec45="" className="img-in lazy-img" data-src={v.image} lazy="loaded" style={{backgroundImage:`url(${v.image})`}}>
                            <div data-v-0df0ec45="" className="room-imgnum">32</div>
                        </div> 
                    ))}   
                </div>
                <div data-v-0df0ec45="" className="container">
                    <div data-v-0df0ec45="" className="hotel-name">{this.list.name}</div>
                    <div data-v-0df0ec45="" className="hotel-address-w">
                        <img data-v-0df0ec45="" src="https://apis.map.qq.com/ws/staticmap/v2/?center=31.235151,121.50608&amp;scale=2&amp;zoom=13&amp;size=351*109&amp;maptype=roadmap&amp;markers=size:large|color:0xFFCCFF|label:k|31.235151,121.50608&amp;key=FWEBZ-J6E3S-Z4FOW-6R4DA-HM5CE-7RFA3" id="map" />
                        <div data-v-0df0ec45="" className="address">{this.list.location}</div>
                    </div>
                    <div data-v-0df0ec45="" className="hotel-part">
                        <div data-v-0df0ec45="" className="part-tit">基本信息</div>
                        <div data-v-0df0ec45="" className="base-msg">
                            <div data-v-0df0ec45="" className="msg-con">
                            <div data-v-0df0ec45="" className="line-three">{this.list.homestay_story}</div>
                                <div data-v-0df0ec45="" className="show-more" style={{display: "block"}} onClick={this.showhide.bind(this)}>详情&gt;</div>
                            </div>
                        </div>
                        <div data-v-0df0ec45="" className="base-msg">
                            <div data-v-0df0ec45="" className="msg-con">
                                <div data-v-0df0ec45="" className="line-three">{this.list.features[0]} | {this.list.features[1]} | {this.list.features[2]}</div>
                            </div>
                        </div>
                    </div>
                    {/* <div data-v-0df0ec45="" className="hotel-part" style={{marginTop:"-20px"}}>
                        <div data-v-0df0ec45="" className="part-tit">专属权益</div>
                        <div data-v-0df0ec45="" className="equity">
                            <div data-v-0df0ec45="" className="equity-li">1.每日免费双人早餐（仅限咖啡厅使用）</div>
                            <div data-v-0df0ec45="" className="equity-li">2.每间房入住享有300人民币餐饮抵扣额度（餐馆，酒吧以及客房送餐可使用）；</div>
                        </div>
                    </div> */}
                    <div data-v-0df0ec45="" className="roomlist-w">
                        <div data-v-0df0ec45="" className="part-tit">房型</div>
                        <div data-v-0df0ec45="" className="roomlist">
                            {this.state.data.map(v=>(
                                <div key={v.room_no} data-v-0df0ec45="" className="room-li">
                                    <div data-v-0df0ec45="" className="rl-l" data-src={v.image_master} lazy="loaded" style={{backgroundImage: `url(${v.image_master})`}}>
                                        <div data-v-0df0ec45="" className="room-imgnum">6</div>
                                    </div>
                                    <div data-v-0df0ec45="" className="rl-r" onClick={this.showhide2.bind(this)}>
                                        <div data-v-0df0ec45="" className="room-name">{v.name}</div>
                                        <div data-v-0df0ec45="" className="room-msg">{v.meal_info},{v.bed_style}</div>
                                        <div data-v-0df0ec45="" className="room-more">详情&gt;</div>
                                        <div data-v-0df0ec45="" className="room-price">
                                            <span data-v-0df0ec45="" className="fz12">¥</span>
                                            <span data-v-0df0ec45="" className="r-price">{v.price}</span>
                                            <span data-v-0df0ec45="" className="fz12" style={{color: "rgb(153, 153, 153)"}}>起</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div data-v-3506572c="" data-v-0df0ec45="" className="_btn-go-home js-sidebar-btn"></div>
                    <div data-v-0139f77a="" data-v-0df0ec45="" className="c-footer footerbtn c-footer__hidecollect">
                        <div data-v-0139f77a="" className="c-footer__collect">
                            <div data-v-0139f77a="" className="c-footer__collectIcon c-footer__collect__unactive"></div>
                            <div data-v-0139f77a="" className="c-footer__collectNum" style={{display:"none"}}></div>
                        </div>
                        <div data-v-0139f77a="" className="c-footer__myorder">
                            <img data-v-0139f77a="" src="../assets/img/order.png" className="c-footer__myorderIcon" />
                            <div data-v-0139f77a="" className="c-footer__myorderWord">订单</div>
                        </div>
                        <div data-v-0139f77a="" className="c-footer__server">
                            <img data-v-0139f77a="" src="../assets/img/nav3.png" className="c-footer__serverIcon" />
                            <div data-v-0139f77a="" className="c-footer__serverWord" onClick={this.showhide1.bind(this)}>客服</div>
                        </div>
                        <div data-v-0139f77a="" className="c-footer__orderbtn">立即预订</div>
                        <div data-v-084011fd="" data-v-0139f77a="" className="_serivce-box-w" style={this.state.style1}>
                            <div data-v-084011fd="" className="_serivce-box" style={this.state.style1}>
                                <div data-v-084011fd="" className="_serivce-online">在线客服</div>
                                <div data-v-084011fd="" className="_serivce-tel">客服电话：0571-85285660</div>
                                <div data-v-084011fd="" className="_serivce-cancel" onClick={this.showhide1.bind(this)}>取消</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div data-v-0a6cf028="" data-v-0df0ec45="" className="_layer-w" style={this.state.style} onClick={this.showhide.bind(this)}>
                    <div data-v-0a6cf028="" className="_layer"></div>
                    <div data-v-0a6cf028="" className="c-animatebox" style={this.state.style}>
                        <div data-v-0df0ec45="" className="detail-box hotel-box">
                            <div data-v-0df0ec45="" className="box-tit">基本信息</div>
                            <div data-v-0df0ec45="" className="box-part">
                                <div data-v-0df0ec45="" className="bp-tit">酒店介绍</div>
                                <div data-v-0df0ec45="" className="bp-con">{this.list.homestay_story}
                                </div>
                            </div>
                            <div data-v-0df0ec45="" className="box-part">
                                <div data-v-0df0ec45="" className="bp-tit">酒店设施</div>
                                <div data-v-0df0ec45="" className="bp-con">{this.list.features[0]} | {this.list.features[1]} | {this.list.features[2]}</div>
                            </div>
                            <div data-v-0df0ec45="" className="box-part">
                                <div data-v-0df0ec45="" className="bp-tit">入住须知</div>
                                    <div data-v-0df0ec45="" className="bp-con">{this.state.det.unsubscribe_rules}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div data-v-0a6cf028="" data-v-0df0ec45="" className="_layer-w" style={this.state.style2} onClick={this.showhide2.bind(this)}>
                    <div data-v-0a6cf028="" className="_layer"></div>
                    <div data-v-0a6cf028="" className="c-animatebox" style={this.state.style2}>
                        <div data-v-0df0ec45="" className="detail-box room-box">
                            <div data-v-0df0ec45="" className="room-box-name"></div>
                            <div data-v-0df0ec45="" id="room-swipe">
                                <div data-v-0df0ec45="" className="mint-swipe room-swipe">
                                    <div className="mint-swipe-items-wrap">
                                        <div data-v-0df0ec45="" className="mint-swipe-item" style={{}}><div data-v-0df0ec45="" className="slide-image lazy-img" data-src={this.state.data.image_master} lazy="loaded" style={{backgroundImage: `url(&quot;${this.state.data.image_master}&quot;)`}}></div></div>
                                    </div> 
                                    <div className="mint-swipe-indicators" style={{display: "none"}}></div>
                                </div>
                                <div data-v-0df0ec45="" className="swiper-indicator">1/</div>
                            </div>
                            <div data-v-0df0ec45="" className="room-info">
                                <div data-v-0df0ec45="" className="rb-price">
                                    <span data-v-0df0ec45="" className="fz12 red">¥</span>
                            <span data-v-0df0ec45="" className="rb-price-min">{this.state.data.price}</span>
                                    <span data-v-0df0ec45="" className="fz12 grey">起</span>
                                </div>
                                <div data-v-0df0ec45="" className="room-intr"></div>
                            </div>
                            <div data-v-0df0ec45="" className="bottom-btn">
                                <div data-v-587f0178="" data-v-0df0ec45="" className="_btn-default _btn-red _btn-large">立即预订</div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div data-v-0df0ec45="" class="pictureSwipe">
                    <div itemscope="itemscope" itemtype="http://schema.org/ImageGallery" class="my-gallery" data-pswp-uid="1"><figure itemprop="associatedMedia" itemscope="itemscope" itemtype="http://schema.org/ImageObject" src="https://img.yitianyishu.com/image_out/20181222/5a2ba942a0d3bd9b624f28841d7e4054-750_480.jpg"><a href="https://img.yitianyishu.com/image_out/20181222/5a2ba942a0d3bd9b624f28841d7e4054-750_480.jpg" itemprop="contentUrl" data-size="750x480"><img src="https://img.yitianyishu.com/image_out/20181222/5a2ba942a0d3bd9b624f28841d7e4054-220_220.jpg" itemprop="thumbnail" alt="杭州武林万怡酒店外景图"></a></figure><figure itemprop="associatedMedia" itemscope="itemscope" itemtype="http://schema.org/ImageObject" src="https://img.yitianyishu.com/image_out/20181222/7dcd2f06079de7f06a568256407e3535-750_480.jpg"><a href="https://img.yitianyishu.com/image_out/20181222/7dcd2f06079de7f06a568256407e3535-750_480.jpg" itemprop="contentUrl" data-size="750x480"><img src="https://img.yitianyishu.com/image_out/20181222/7dcd2f06079de7f06a568256407e3535-220_220.jpg" itemprop="thumbnail" alt="杭州武林万怡酒店外景图"></a></figure><figure itemprop="associatedMedia" itemscope="itemscope" itemtype="http://schema.org/ImageObject" src="https://img.yitianyishu.com/image_out/20181222/092d4cb8977063ba92d7eb970250f0c5-750_480.jpg"><a href="https://img.yitianyishu.com/image_out/20181222/092d4cb8977063ba92d7eb970250f0c5-750_480.jpg" itemprop="contentUrl" data-size="750x480"><img src="https://img.yitianyishu.com/image_out/20181222/092d4cb8977063ba92d7eb970250f0c5-220_220.jpg" itemprop="thumbnail" alt="杭州武林万怡酒店外景图"></a></figure><figure itemprop="associatedMedia" itemscope="itemscope" itemtype="http://schema.org/ImageObject" src="https://img.yitianyishu.com/image_out/20181222/40bd7cf92029bf0b44dc9f7a32cf3d95-750_480.jpg"><a href="https://img.yitianyishu.com/image_out/20181222/40bd7cf92029bf0b44dc9f7a32cf3d95-750_480.jpg" itemprop="contentUrl" data-size="750x480"><img src="https://img.yitianyishu.com/image_out/20181222/40bd7cf92029bf0b44dc9f7a32cf3d95-220_220.jpg" itemprop="thumbnail" alt="杭州武林万怡酒店外景图"></a></figure></div><div tabindex="-1" role="dialog" aria-hidden="false" class="pswp pswp--open pswp--notouch pswp--css_animation pswp--svg pswp--zoom-allowed pswp--visible pswp--animated-in" style="position: fixed; opacity: 1;"><div class="pswp__bg" style="opacity: 1;"></div><div class="pswp__scroll-wrap"><div class="pswp__container" style="transform: translate3d(0px, 0px, 0px);"><div class="pswp__item" style="display: block; transform: translate3d(-420px, 0px, 0px);"><div class="pswp__zoom-wrap" style="transform: translate3d(0px, 214px, 0px) scale(1);"><img class="pswp__img" src="https://img.yitianyishu.com/image_out/20181222/40bd7cf92029bf0b44dc9f7a32cf3d95-750_480.jpg" style="opacity: 1; width: 375px; height: 240px;"></div></div><div class="pswp__item" style="transform: translate3d(0px, 0px, 0px);"><div class="pswp__zoom-wrap" style="transform: translate3d(0px, 214px, 0px) scale(1);"><div class="pswp__img pswp__img--placeholder pswp__img--placeholder--blank" style="width: 375px; height: 240px; display: none;"></div><img class="pswp__img" src="https://img.yitianyishu.com/image_out/20181222/5a2ba942a0d3bd9b624f28841d7e4054-750_480.jpg" style="display: block; width: 375px; height: 240px;"></div></div><div class="pswp__item" style="display: block; transform: translate3d(420px, 0px, 0px);"><div class="pswp__zoom-wrap" style="transform: translate3d(0px, 214px, 0px) scale(1);"><img class="pswp__img" src="https://img.yitianyishu.com/image_out/20181222/7dcd2f06079de7f06a568256407e3535-750_480.jpg" style="opacity: 1; width: 375px; height: 240px;"></div></div></div><div class="pswp__ui pswp__ui--fit"><div class="pswp__top-bar"><div class="pswp__counter">1 / 4</div><button title="Close (Esc)" class="pswp__button pswp__button--close"></button><span class="rotation-wrapper"><!----><!----></span><button title="Share" class="pswp__button pswp__button--share pswp__element--disabled"></button><button title="Toggle fullscreen" class="pswp__button pswp__button--fs pswp__element--disabled"></button><button title="Zoom in/out" class="pswp__button pswp__button--zoom"></button><div class="pswp__preloader"><div class="pswp__preloader__icn"><div class="pswp__preloader__cut"><div class="pswp__preloader__donut"></div></div></div></div></div><div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap pswp__element--disabled"><div class="pswp__share-tooltip"></div></div><button title="Previous (arrow left)" class="pswp__button pswp__button--arrow--left"></button><button title="Next (arrow right)" class="pswp__button pswp__button--arrow--right"></button><div class="pswp__caption pswp__caption--fake"><div class="pswp__caption__center"></div></div><div class="pswp__caption pswp__caption--empty"><div class="pswp__caption__center"></div></div></div></div></div></div> */}
            </div>
        )
    }
    async detail(){
        const {data}=await axios.get("/minsu/master/detail",{
            params:{
                mno:this.state.mno,
                _:this.state._
            }
        })
        console.log(1234,data.data.master)
        this.setState({
            det:data.data.master,
            det1:data.data.master.image_public,
            det2:data.data.master.image_out,
        })
    }
    async roomList(){
        const {data}=await axios.get("/minsu/master/room",{
            params:{
                mno:this.state.mno,
                page:this.state.page,
                limit:this.state.limit,
                _:this.state._
            }
        })
        console.log(data)
        this.setState({
            page:data.data.pager.page,
            limit:data.data.pager.limit,
            data:data.data.list
        })
    }
    async componentDidMount(){
        this.roomList()
        this.detail()
    }
}
