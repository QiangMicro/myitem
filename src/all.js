import store from "./store";


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

// 订阅store
store.subScribe(this.hadChangeValue.bind(this))
hadChangeValue(){
  this.setState(store.getState())
}