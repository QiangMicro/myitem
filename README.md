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

二、React中的虚拟DOM：

  react底层实现一：

    1、state数据
    2、jsx模板（ render函数）
    3、数据 + 模板 组合成真实DOM挂载到页面
    4、state数据发生改时
    5、数据 + 模板 组合新的真实DOM挂载到页面

  缺陷：非常耗性能

    第一次生成一个DOM片段
    第二次生成一个DOM片段
    第二次DOM替换第一次DOM

  react底层实现二：

    1、state数据
    2、jsx模板（ render函数）
    3、数据 + 模板 组合成真实DOM挂载到页面
    4、state数据发生改时
    5、数据 + 模板 组合成新的DOM，并不挂载到页面
    6、将第二次生成的DOM（DoucumentFragment）与第一次生成的DOM做比较
    7、找到差异
    8、将差异挂载到页面，从而完成页面的更新

  缺陷：优化性能不是很明显

  react底层实现三：

    1、state数据
    2、jsx模板（ render函数）
    3、数据 + 模板 组合成真实DOM挂载到页面
    4、生成虚拟DOM(虚拟DOM本质上是一个js数组对象，用来描述真实DOM)  ————————损耗性
    5、state数据发生改时
    6、数据 + 模板 生成新的虚拟DOM  ————————提升性能 
    7、新的虚拟DOM与原始虚拟DOM进行对比，找到两个新旧虚拟DOM的区别 ————————提升性能 
    8、直接操作DOM，挂载到页面

  优点：js生成js损耗性能较小，但是js生成真实DOM，需要调用webpackAPI,真实DOM之间的操作会极大的损耗性能

三、虚拟DOM中的Diff算法：虚拟DOM之前的对比，即同级对比与Key值对比两种方法，此方法也是说明在循环中为什么key值为什么不建议使用index值的原因

四、ref:React中直接获取DOM节点（不建议使用ref）

五、生命周期函数： componentWillMount()、componentDidMount()、componentWillReceiveProps()、shouldComponentUpdate()、componentWillUpdate()、componentDidUpdate()、componentWillUnmount()、render()

六、Ajax放到render函数里可能会造成死循环，render函数会反复执行，默认只能放到componentDidMount()

七、异步代码拆分：
  1、redux-thunk中间件：是redux的中间件，是action与stroe的中间件，redux-thunk中间件可以理解为是store.dispatch使用thunck进行升级，将代码拆分到action里
  2、redux-saga中间件

总结：

react性能优化：1、作用域绑定：放在constructor里做this绑定 
              2、setState异步函数：降低虚拟Dom对比频率
              3、同级对比、key值对比来提高虚拟DOM的对比速度
              4、shouldComponentUpdate()无用组件render函数的运行
