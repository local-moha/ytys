import React, { Component } from 'react'
import axios from 'axios'
import style from '../assets/css/SuperList.module.css'
import { Pull, Cell, Message, Icon, Button } from 'zarm';
export default class SuperList extends Component {
    
    constructor(){
        super()
        this.state={
            list:[]
        }
    }
    
   async componentDidMount(){
        const {data} =await axios.get('/meisu/team/team/index?page=1&limit=10&city_code=&sort=2&_=1588675131559')
        console.log(data.data.list);
        this.setState({
            list:data.data.list
        })
    }
    
    render() {
        console.log(1919,this.state.list);
        
        return (
            <div className={style.page}>
                <div className={style.filter_header}>
                    <div className={style.left}>全部城市</div>
                    <div className={style.rigth}>全部类型</div>
                </div>
                <div className={style.scroll_list}>
                    {
                        this.state.list.map(v=>(
                            <div className={style._teamitem} key={v.team_id} onClick={()=>{this.props.history.push("/minsu/super_detail.html/team_id="+v.team_id)}}>
                            <div className={style.team_img_w}>
                                <img src={v.image_url} alt=""/>
                            </div>
                            <div className={style.team__timebox}>
                                <div className={style.team__icon}></div>
                                <span className={style.team__span}>进行中...</span>
                            </div>
                            <div className={style.team_info}>
                        <div className={style.team_name}>{v.title}</div>
                                <div className={style.team_intr}>
                                <div className={style.team_address}>{v.city_name}</div>
                        <div className={style.team_type}>{v.area_name}</div>
                        <div className={style.team_peoplenum}>适合{v.num}人</div>
                            </div>
                            <div className={style.team_price}>
                                <span className={style.fz12}>¥</span>
                        <span className={style.fz18}>{v.min_price}</span>
                            </div>
                            </div>
                        </div>
                        ))
                    }
                </div>
                
            </div>
        )
    }
}
