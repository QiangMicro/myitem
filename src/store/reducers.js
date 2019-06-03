import {CHANGE_INPUT_VALUE ,ADD_TODO_ITEM,DELE_TODO_ITEM} from './actionTyps'
const defaultState={
    inputValue:'',
      lis:[],
}

export default (state=defaultState,action)=>{
    if(action.type===CHANGE_INPUT_VALUE ){
        // 深拷贝
        const newState=JSON.parse(JSON.stringify(state));
        newState.inputValue=action.data;
        return newState;
    }
    if(action.type === ADD_TODO_ITEM){
        // 深拷贝
        const newState=JSON.parse(JSON.stringify(state));
        newState.lis.push(newState.inputValue);
        newState.inputValue='';
        return newState;
    }
    if(action.type === DELE_TODO_ITEM){
        // 深拷贝
        const newState=JSON.parse(JSON.stringify(state));
        newState.lis.splice(action.index)
        return newState;
    }
    return state;
}