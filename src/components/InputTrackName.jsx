import React, {useState} from 'react'
import PlayIcon from '../static/img/play_arrow-24px.svg'
import {useDispatch, useSelector} from 'react-redux'
import {addTracker} from '../redux/tracker-reducer'

export const InputTrackName = () => {
    const [value, setValue] = useState('')
    const tracks = useSelector(state => state.tracker.trackers)
    const dispatch = useDispatch()

    const inputChange = (e) => {
        setValue(e.target.value)
    }

    const setTitle = () => {
        if(value.trim() === ''){
            const count = tracks.length | 1
            dispatch(addTracker(`No name tracker #${count}`))
        } else {
            dispatch(addTracker(value.trim()))
            setValue('')
        }
    }

    const keyPressHandler = (e) => {
        if(e.key === 'Enter'){
            setTitle()
        }
    }

    return (
        <div className='input'>
            <input type='text' placeholder='Enter tracker name' value={value}
                   onChange={(e) => inputChange(e)}
                   onKeyPress={(e)=>keyPressHandler(e)}
            />
            <button type={'submit'} onClick={()=> setTitle()}><img src={PlayIcon} alt={'start'}/></button>
        </div>
    )
}