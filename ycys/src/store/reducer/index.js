import { combineReducers } from 'redux'
import home from '../reducer/home'
import search from '../reducer/search'
export default combineReducers({
    home,
    search
})