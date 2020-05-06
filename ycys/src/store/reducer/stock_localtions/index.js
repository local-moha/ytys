import stockInfo from '../../state/index'
export default function (state=stockInfo,{type,payload}){
    state = JSON.parse(JSON.stringify(state));
    if(type==='SAVE_STOCK_LIST'){
        // state.page=payload.pager.page,
        state.stock_list = [
            ...payload.list,
            ...state.stock_list
        ]
        
    }
    return state;
}