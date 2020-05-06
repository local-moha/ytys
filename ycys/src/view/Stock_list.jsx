import React, { Component } from 'react';
import style from '../assets/css/stock_list.module.css'
import {
    Link
} from "react-router-dom"
import {
    connect
} from "react-redux"
import {
    bindActionCreators
}  from 'redux';
import StockCreator,{upStock} from '../store/actionCreator/stock_localtion/index.js'
import Axios from 'axios';
import Popup  from '../components/Popup'

class Stock_list extends Component {
    constructor(props) {
        super(props);
        this.state={
            city_code:localStorage.city_code||1588489903704,
            city_name:[],
            visible1: false,
        }
    }

    render() {
        
        const {result} = this.props;
        return (
            <div>
                
                <Popup></Popup>
               {
               result?result.map(v=>(
                    <Link to={`/stock_detail.html?mno=${v.mno}`}>
                    <div className={style.stock_box}>
                        <div className={style.stock_w}>
                            <div className={style.stock_discount}>{v.coupon_discount}</div>
                            <div className={style.stock_remain_number}>余{v.coupon_quantity}</div>
                                <div className={style.stock_remain_number+''+style.bg_image} style={{background:`url(${v.image_url})`}}>
                                </div>
                            <div className={style.stock_sellout} style={{display:'none'}}></div>

                            <div className={style.stock_room_name}>{v.name}</div>
                        </div>
                        <div></div>
                    </div>
                    </Link>
               )):'空'}
              
            </div>
           
        );
    }
    toggle(key) {
        this.setState({
          [`${key}`]: !this.state[key],
        });
      }
    async componentDidMount(){
        
        // console.log(this.props)
     
    }
}
function mapStateToProps(state){
    return {
        result:state.stock_list,
        pageNo:state.page,
        pageSize:state.totalCount
    }
}
function mapDispatchToProps(dispatch){
    return bindActionCreators(StockCreator,dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(Stock_list);