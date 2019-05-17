import React, { Component ,Fragment} from 'react';
import TodoItem from "./TodoItem"
class TodoList extends Component {
  constructor(props){
    super(props)
    this.state={
      inputValue:'',
      lis:[]
    }
    this.hadChange=this.hadChange.bind(this);
    this.hadBtn=this.hadBtn.bind(this);
    this.hadDelItem=this.hadDelItem.bind(this);
  };
  hadChange(e){
    const value=e.target.value;
    this.setState(()=>({inputValue:value}))
  };
  hadBtn(){
    this.setState((prevState)=>({
      lis:[...prevState.lis,prevState.inputValue],
      inputValue:''
    }))
  };
  hadDelItem(index){
    // immutable概念：不允许直接操作State数据
    // 复制lis数组
    const lis=[...this.state.lis];
    lis.splice(index,1);
    this.setState(()=>({
      lis
    }))
  }
  render() {
    return (
      //Fragment是jsx语法中的组件
      <Fragment>
        <div>
          {/* 扩大点击范围 */}
          <label htmlFor='icon'>请输入内容</label>
          <input value={this.state.inputValue}  
            onChange={this.hadChange} 
            // placeholder="请输入内容"
          id="icon"/>
          <button onClick={this.hadBtn}>Ende</button>
        </div>
        <ul>
          {
            this.getTodo()
          }
        </ul>
      </Fragment>
    );
  }
  getTodo(){
    return this.state.lis.map((item,index)=>{
      return  <TodoItem content={item} deleItem={this.hadDelItem} key={index} />
    })
  }
}

export default TodoList;
