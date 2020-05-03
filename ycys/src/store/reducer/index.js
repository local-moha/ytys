import { combineReducers } from 'redux'
import home from '../reducer/home'
import search from '../reducer/search'
import template from '../reducer/getCoupon'
export default combineReducers({
    home,
    search,
    template
})