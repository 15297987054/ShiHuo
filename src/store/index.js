import {createStore,combineReducers,applyMiddleware} from 'redux'
import reduxThunk from 'redux-thunk'
import add from './reducer/add'

const reducer = combineReducers({
    add
})

const store = createStore(reducer,applyMiddleware(reduxThunk))

export default store