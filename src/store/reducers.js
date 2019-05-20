const defaultState={
    inputValue:'',
      lis:[],
}

export default (state=defaultState,action)=>{
    if(action.type==='change_input_value'){
        // 深拷贝
        const newState=JSON.parse(JSON.stringify(state));
        newState.inputValue=action.value;
        return newState;
    }
    if(action.type === "add_todo_item"){
        // 深拷贝
        const newState=JSON.parse(JSON.stringify(state));
        newState.lis.push(newState.inputValue);
        newState.inputValue='';
        return newState;
    }
    return state;
}