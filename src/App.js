import React, { Component ,Fragment} from 'react';

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      inputValue:'',
      lis:''
    }
    this.hadChange=this.hadChange.bind(this);
    this.hadClick=this.hadClick.bind(this)
  };
  hadChange(e){
    this.setState({
      inputValue:e.target.value
    })
  };
  render() {
    return (
      <Fragment>
        <div>
          <input value={this.state.inputValue}  onChange={this.hadChange}/>
          <button >Ende</button>
        </div>
        <ul>
          <li>lear react</li>
          <li>lear vue</li>
        </ul>
      </Fragment>
    );
  }
}

export default App;
