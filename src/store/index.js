// 创建store

// 利用redux里的createStore第三方法创建一个store
import {createStore, applyMiddleware} from "redux"
// 引入thunk
import thunk from 'redux-thunk';
// reducers里存放所有数据
import reducers from './reducers'
const store=createStore(
    reducers,
    applyMiddleware(thunk)
);


// 导出store
export default store;