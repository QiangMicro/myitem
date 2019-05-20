简介：以TodoList为例由浅入深的学习react库

一、创建store、reducer，引入到文件后并调用store里数据

  1、创建store:使用redux第三方createStore方法创建，导出store

    // 创建store
    import {createStore} from 'redux'
    // 引入reducer
    import reducer from 路径

    const store=createStore(reducer);

    export default store;

  3、创建reducer数据：直接返回函数，默认返回参数State

    //创建reducer
    const defaultState={}
    export default (state=defaultState,action) => {
        return state;
    }
    
  4、将store文件引入到目录下，使用stroe.getState()方法获取reducer里的数据