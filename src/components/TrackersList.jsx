import PlayCircleIcon from '../static/img/play_circle_outline-24px.svg'
import PauseCircleIcon from '../static/img/pause_circle_outline-24px.svg'
import RemoveCircleIcon from '../static/img/remove_circle_outline-24px.svg'
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteTracker, pauseTracker, unpauseTracker, updateTime } from '../redux/tracker-reducer'
import { formatTime } from '../utils/formatTime'

export const TrackersList = ({ id, title, startTime, pauseTime, secondsLeft, isActive }) => {
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
                dispatch(updateTime(id))
            }, 1000)
        }
    }

    const remove = () => {
        dispatch(deleteTracker(id))
        clearIntervalRef()
    }

    const toggle = () => {
        if (isActive) {
            dispatch(pauseTracker(id))
            clearIntervalRef()
        } else {
            dispatch(unpauseTracker(id, startTime + (Date.now() - pauseTime)))
            start()
        }
    }

    useEffect(() => {
        if (isActive) start()
        return () => clearIntervalRef()
    }, [])

    return (
        <div className={isActive ? 'timer timer-active' : 'timer'}>
            <div className="timer__title">
                <span>{title}</span>
            </div>
            <div className="timer__dashboard">
                <span>{formatTime(secondsLeft)}</span>
                <div className="timer__dashboard__buttons">
                    <img src={isActive ? PauseCircleIcon : PlayCircleIcon} onClick={toggle} alt="pause" />
                    <img className="buttons_remove" src={RemoveCircleIcon} alt="remove tracker" onClick={remove} />
                </div>
            </div>
        </div>
    )
}
