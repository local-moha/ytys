import  stockType from '../../actionType/index'
import axios from 'axios';
export function upStock(payload){
    return {
        type:stockType.SAVE_STOCK_LIST,
        payload
    }
}
export  default{
    getStockList(pageNo=1){
        return async(dispatch)=>{
            const info = await axios.get(`https://api.yitianyishu.com/coupon/index/index?${pageNo}&${this.props.limit}&${this.props.city_code}`)
            dispatch(upStock(info.data.list,info.data.pager))
        }
    }
}