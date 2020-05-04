import { combineReducers } from 'redux'
import home from '../reducer/home'
import search from '../reducer/search'
import template from '../reducer/getCoupon'
import theme from '../reducer/theme'
export default combineReducers({
    home,
    search,
    template,
    theme
})