import { createStore } from 'redux'

let reducer = function(state,action){
    //判断是否初始化
    //如果是初始化时间，需要先对state进行初始化赋值
    if(!state){
        state = {
            headerInfo : "选择地址",
            locationID : "",
            showItem : "正在热映"
        }
    }
    if(action.type=="selectNav"){
        state.showItem = action.value.showItem;
    }

    return state;
}

let store = createStore(reducer);

export default  store;