import React, { Component,Fragment } from 'react';
import { tsImportEqualsDeclaration } from '@babel/types';

class TodoItem extends Component {
	constructor(props){
		super(props);
		this.hadClick=this.hadClick.bind(this);
	}
	hadClick(){
		const {deleItem,index} = this.props;
		deleItem(index)
	}
	render() {
		const { content }=this.props;
		return (
			<Fragment>
					<li onClick={this.hadClick} >{content}</li>
			</Fragment>
		);
	}
}

export default TodoItem;