import { useState, useEffect, useRef } from 'react';


export const useStopwatch = (startTime) => {
    const [seconds, setSeconds] = useState();
    const [isRunning, setIsRunning] = useState(autoStart);
    const intervalRef = useRef();

    const clearIntervalRef = () => {
        if (intervalRef.current) {
            setIsRunning(false);
            clearInterval(intervalRef.current);
            intervalRef.current = undefined;
        }
    }

    const start = () => {
        if (!intervalRef.current) {
            setIsRunning(true);
            intervalRef.current = setInterval(() => setSeconds((prevSeconds) => (prevSeconds + 1)), 1000);
        }
    }

    const pause = () => {
        clearIntervalRef();
    }

    const remove = () => {
        clearIntervalRef();
        setSeconds(0);
        if (autoStart) {
            start();
        }
    }

    // didMount effect
    useEffect(() => {
        if (autoStart) {
            start();
        }
        return clearIntervalRef;
    }, []);

    return {
        start, pause, remove, isRunning,
    };
}