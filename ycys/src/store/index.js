import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducer/index'
import thunk from 'redux-thunk'
//当dispatch执行异步操作时 要用到thunk 
//需要引入redux中的applyMiddleware方法来接收thunk
const store = createStore(rootReducer, applyMiddleware(thunk))
export default store