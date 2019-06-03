import React, { Component,Fragment } from 'react';
import { Input,Button, List} from 'antd';
import store from '../store/index.js'
import {CHANGE_INPUT_VALUE ,ADD_TODO_ITEM,DELE_TODO_ITEM,INIT_AXIOS} from '../store/actionTyps'
import Axios from 'axios';

class Antds extends Component {
  constructor(props){
    super(props);
    this.state=store.getState();
    this.hadChange=this.hadChange.bind(this);
    this.changeValue=this.changeValue.bind(this);
    this.hadClick=this.hadClick.bind(this);
    //订阅store
    store.subscribe(this.changeValue)
  }
  hadChange(e){
    //声明一个action，它是一个函数
    const action={
      type:CHANGE_INPUT_VALUE,
      value:e.target.value
    }
    // 将action传给store，使用store提共的dispatch(action)方法
    store.dispatch(action)
  }
  // 点击按钮声明action
  hadClick(){
    const action ={
      type:ADD_TODO_ITEM,
    }
    // 将action传递给store
    store.dispatch(action)
  }
  changeValue(){
    // 感知到stoe发生变化后调用store.getState()
    this.setState(store.getState())
  }
  hadClickItem(index){
    const action ={
      type:DELE_TODO_ITEM,
      index
    }
    // 将action传递给store
    store.dispatch(action)
  }
  render() {
    return (
      <Fragment>
        <div style={{margin:"10px"}}>
          <Input  
            value={this.state.inputValue}  
            placeholder="输入内容" 
            style={{width:'300px',margin:"2px"}}
            onChange={this.hadChange}
          />
          <Button type="primary" onClick={this.hadClick}>提交</Button>
        </div>
        <List
          style={{width:'300px',margin:"10px"}}
          bordered
          dataSource={this.state.lis}
          renderItem={(item,index) => (
            <List.Item 
              onClick={this.hadClickItem.bind(this,index)}
            >
             {item}
            </List.Item>
          )}
        />
      </Fragment>
    );
  }
  componentDidMount(){
    Axios.get('/mock.json')
      .then((res)=>{
        this.setState(()=>({
          lis:[...res.data]
        }))
      })
      .catch(()=>{
        console.log("不能访问数据")
      })
  }
}

export default Antds;

