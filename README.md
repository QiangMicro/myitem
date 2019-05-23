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

  5、声明action并使用store.dispatch(action)方法将action传递给store，reducer里接收store自行传过来的action与state数据并返回一个新的数据，
    store.subscribe(被订阅者)，实现联动效果
    
    hadChange(e){
      // 声明action
      const action={
        type："change_input_value";
        value:e.taget.value
      }
      // 将action传递给store
      store.dispatch(action)
    }

    // state只能接收数据不能操作数据，需要将数据进行深拷贝
    if(action.type === "change_input_value"){
      const newState=JSON.parse(JSON.stringify(state));
      newState.value=action.value;
      return newState;
    }

    //store订阅一个更新函数，待dispatch之后，执行这个更新函数，获取新的值
    store.subScribe(this.hadChangeValue.bind(this))
    hadChangeValue(){
      this.setState(store.getState())
    }
  6、actionTyps.js是将所有action存到一个js文件里，方便后续因拼写出错导致查找报错原因