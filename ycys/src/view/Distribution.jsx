import React, { Component } from 'react';
import axios from 'axios';
import style from '../assets/css/distribution.module.css'
import {
    Link
} from "react-router-dom"
import filters from '../filters/index'



class Distribution extends Component {
    constructor(props) {
        super(props);
        this.state={
            distributionList :[],
            page:1,
            city_code:1588511002525

        }

    }

    render() {
        return (
            <div className={style.page}>
                {
                this.state.distributionList.map(v=>(
 
                <Link to={'/distribution/detail.html?did='+v.did} key={v.did}>
                <div className={style._citem_box}>
                    <img className={style._citem_img} src={v.image.middle} alt=""/>
                    <div className={`${style._citem_start} ${style._citem_time}`}>{`${filters.lastDate(v.end_time-v.start_time)}`}</div>
                    <div className={style._citem_word}>{v.title}</div>
                    <div className={style._citem_price}>￥<span className={style.__citem_price}>{v.min_price}</span></div>
                <div className={style._citem_oprice}><s>原价{v.min_origin_price}</s></div>
                </div>
                </Link>
                ))
                }
            </div>
        );
    } 
    async componentDidMount() {
        const data =await axios.get(`/minsu/distribution/index/index?page=${this.state.page}&limit=20&_=${this.state.city_code}`)
        // console.log(data.data.data);
        this.setState({
            distributionList:data.data.data.list,
            page:data.data.data.pager.page
        })
        
    }

}

Distribution.propTypes = {

};

export default Distribution;