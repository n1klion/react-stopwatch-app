export const formatTime = (ms) => {
    let seconds = ms / 1000
    const hours = parseInt(seconds / 3600)
    seconds = seconds % 3600
    const minutes = parseInt(seconds / 60)
    seconds = parseInt(seconds % 60)
    return (hours < 10 ? '0' : '') + hours + ':' + (minutes < 10 ? '0' : '') + minutes + ':' + (seconds < 10 ? '0' : '') + seconds
}