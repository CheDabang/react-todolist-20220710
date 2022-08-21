// import { connect } from 'react-redux'
import {createStore} from 'redux'
import todosReducer from './todoReducer'

const store = createStore(todosReducer)

export default store