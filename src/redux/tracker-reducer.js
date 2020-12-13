const ADD_TRACKER = 'tracker/ADD_TRACKER'
const DELETE_TRACKER = 'tracker/DELETE_TRACKER'
const PAUSE_TRACKER = 'tracker/PAUSE_TRACKER'
const UNPAUSE_TRACKER = 'tracker/UNPAUSE_TRACKER'
const UPDATE_TIME = 'tracker/UPDATE_TIME'

const initialState = {
    trackers: [],
}

export const TrackerReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TRACKER:
            return {
                ...state,
                trackers: [
                    {
                        id: Date.now(),
                        title: action.title,
                        startTime: Date.now(),
                        pauseTime: 0,
                        secondsLeft: 0,
                        isActive: true,
                    },
                    ...state.trackers,
                ],
            }
        case UPDATE_TIME: {
            return {
                ...state,
                trackers: state.trackers.map((t) => {
                    if (t.id === action.id) {
                        t.secondsLeft = parseInt((Date.now() - t.startTime) / 1000)
                    }
                    return t
                }),
            }
        }
        case DELETE_TRACKER:
            return {
                ...state,
                trackers: state.trackers.filter((t) => t.id !== action.id),
            }
        case PAUSE_TRACKER:
            return {
                ...state,
                trackers: state.trackers.map((t) => {
                    if (t.id === action.id) {
                        t.pauseTime = Date.now()
                        t.isActive = false
                    }
                    return t
                }),
            }
        case UNPAUSE_TRACKER:
            return {
                ...state,
                trackers: state.trackers.map((t) => {
                    if (t.id === action.id) {
                        t.startTime = action.startTime
                        t.pauseTime = 0
                        t.isActive = true
                    }
                    return t
                }),
            }
        default:
            return state
    }
}

export const addTracker = (title) => ({ type: ADD_TRACKER, title })

export const updateTime = (id) => ({ type: UPDATE_TIME, id })

export const deleteTracker = (id) => ({ type: DELETE_TRACKER, id })

export const pauseTracker = (id) => ({ type: PAUSE_TRACKER, id })

export const unpauseTracker = (id, startTime) => ({ type: UNPAUSE_TRACKER, id, startTime })
