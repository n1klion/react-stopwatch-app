import PlayCircleIcon from '../static/img/play_circle_outline-24px.svg'
import PauseCircleIcon from '../static/img/pause_circle_outline-24px.svg'
import RemoveCircleIcon from '../static/img/remove_circle_outline-24px.svg'
import React, {useEffect, useRef, useState} from 'react'
import {useDispatch} from 'react-redux'
import {deleteTracker, pauseTracker, unpauseTracker} from '../redux/tracker-reducer'
import {formatTime} from '../utils/formatTime'

export const TrackersList = ({id, title, startTime, isActive}) => {
    const [time, setTime] = useState('00:00:00')
    const [pauseTime, setPauseTime] = useState(null)
    const dispatch = useDispatch()
    const intervalRef = useRef()

    const clearIntervalRef = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current)
            intervalRef.current = undefined
        }
    }

    const start = () => {
        if (!intervalRef.current) {
            intervalRef.current = setInterval(() => {
                setTime(formatTime(Date.now() - startTime))
            }, 1000)
        }
    }

    const remove = (id) => {
        dispatch(deleteTracker(id))
        clearIntervalRef()
    }

    const pause = () => {
        setPauseTime(Date.now())
        clearIntervalRef()
    }

    const toggle = (trackerId, isActive) => {
        if (isActive) {
            pause()
            dispatch(pauseTracker(trackerId))
        } else {
            dispatch(unpauseTracker(trackerId, startTime + (Date.now() - pauseTime)))
            start()
        }
    }

    useEffect(() => {
        if (isActive) start()
        return () => clearIntervalRef()
    }, [])

    console.log('rerender')
    return (
        <div className='timers'>
            <div className='timers__title'>
                <p>{title}</p>
            </div>
            <div className='timers__dashboard'>
                <p>{time}</p>
                <div className='timers__dashboard__buttons'>
                    <img src={isActive ? PauseCircleIcon : PlayCircleIcon} onClick={() => toggle(id, isActive)}
                         alt="pause"/>
                    <img className='buttons_remove' src={RemoveCircleIcon} alt='remove tracker'
                         onClick={() => remove(id)}/>
                </div>
            </div>
        </div>
    )
}