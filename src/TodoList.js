import React, { Component ,Fragment} from 'react';

class TodoList extends Component {
  constructor(props){
    super(props)
    this.state={
      inputValue:'',
      lis:[]
    }
    this.hadChange=this.hadChange.bind(this);
    this.hadBtn=this.hadBtn.bind(this);
  };
  hadChange(e){
    this.setState({
      inputValue:e.target.value
    })
  };
  hadBtn(){
    this.setState({
      lis:[...this.state.lis,this.state.inputValue],
      inputValue:''
    })
  };
  hadDelItem(index){
    // immutable概念：不允许直接操作State数据
    // 复制lis数组
    const lis=[...this.state.lis];
    lis.splice(index,1);
    this.setState({
      lis
    })
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
        <ol>
          {
            this.state.lis.map((item,index)=>{
              return <li key={index} 
                onClick={this.hadDelItem.bind(this,index)} 
                // 输入内容不被转义
                dangerouslySetInnerHTML={{__html:item}}
              >
              </li>
            })
          }
        </ol>
      </Fragment>
    );
  }
}

export default TodoList;
