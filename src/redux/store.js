import {TrackerReducer} from './tracker-reducer'
import {combineReducers, createStore} from 'redux'

const rootReducers = combineReducers({
    tracker: TrackerReducer
})

const store = createStore(rootReducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store