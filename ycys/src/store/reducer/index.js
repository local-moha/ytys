import { combineReducers } from 'redux'
import home from './home'
import search from './search'
import template from './getCoupon'
import theme from './theme'
import mno_detail from './mno_detail'
export default combineReducers({
    home,
    search,
    template,
    theme,
    mno_detail
})