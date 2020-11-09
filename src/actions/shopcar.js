import {createAction} from 'redux-actions'

export const ADD_GOODS_ACTION = createAction('add_goods',(val)=>val)

export const SELECT_ALL_ACTION = createAction("select_all")

export const SELECT_ONE_ACTION = createAction("select_one",(val)=>val)

export const DELETE_ONE_ACTION = createAction("delete_one",val=>val)

export const DELETE_ALL_ACTION = createAction("delete_all")