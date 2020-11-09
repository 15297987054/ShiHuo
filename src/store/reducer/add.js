import {handleActions} from 'redux-actions'
const defaultState={
    list:[]
}
export default handleActions({
    add_goods:(state,val)=>{
        let newState = Object.assign({},state)
        newState.list.push(val.payload)
        return newState
    },
    select_all:(state)=>{
        let newState = Object.assign({},state)
        newState.list.forEach(item=>{
            item.checked=true
        })
        return newState
    },
    select_one:(state,val)=>{
        let newState = Object.assign({},state)
        newState.list.forEach(item=>{
            if(item.item_id===val.payload){
                item.checked=!item.checked
            }
        })
        return newState
    },
    delete_one:(state,val)=>{
        let newState = Object.assign({},state)
        let arr = newState.list.filter((item)=>{
            return item.item_id!==val.payload
        })
        newState.list = arr
        return newState
    },
    delete_all:(state)=>{
        let newState = Object.assign({},state)
        newState.list = []
        return newState
    }
},defaultState)