import { useEffect, useState } from 'react';
// watch data load
const useWatchData = () => {
    const [watches, setwatches] = useState([])
    useEffect(() => {
        fetch('https://titanserver.onrender.com/watch').then(res => res.json()).then(data => setwatches(data))

    }, [])
    return [watches]
}
export default useWatchData