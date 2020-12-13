import { TrackerReducer } from './tracker-reducer'
import { combineReducers, createStore } from 'redux'
import { loadState, saveState } from './localStorage'

const persistedState = loadState()

const rootReducers = combineReducers({
    tracker: TrackerReducer,
})

const store = createStore(rootReducers, persistedState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

store.subscribe(() => {
    saveState({
        tracker: store.getState().tracker,
    })
})

export default store
