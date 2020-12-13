import React from 'react'
import { InputTrackName } from './components/InputTrackName'
import { TrackersList } from './components/TrackersList'
import { useSelector } from 'react-redux'

function App() {
    const trackers = useSelector((state) => state.tracker.trackers)

    return (
        <div className="App">
            <div className="header">
                <h1>tracker</h1>
            </div>
            <InputTrackName />
            <div className="timers">
                {trackers.map((tracker) => (
                    <TrackersList key={tracker.id} id={tracker.id} title={tracker.title} startTime={tracker.startTime} pauseTime={tracker.pauseTime} secondsLeft={tracker.secondsLeft} isActive={tracker.isActive} />
                ))}
            </div>
        </div>
    )
}

export default App
