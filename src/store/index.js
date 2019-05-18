// 创建store

// 利用redux里的createStore第三方法创建一个store
import {createStore} from "redux"
// reducers里存放所有数据
import reducers from './reducers'
const store=createStore(reducers);

// 导出store
export default store;