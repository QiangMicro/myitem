import React, { Component,Fragment } from 'react';
import { Input,Button, List} from 'antd';
import store from '../store/index.js'

class Antds extends Component {
  constructor(props){
    super(props);
    this.state=store.getState()
  }
  render() {
    return (
      <Fragment>
        <div style={{margin:"10px"}}>
          <Input   placeholder="输入内容" style={{width:'300px',margin:"2px"}}/>
          <Button type="primary">提交</Button>
        </div>
        <List
          style={{width:'300px',margin:"10px"}}
          bordered
          dataSource={this.state.lis}
          renderItem={item => (
            <List.Item>
             {item}
            </List.Item>
          )}
        />
      </Fragment>
    );
  }
}

export default Antds;