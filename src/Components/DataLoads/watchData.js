import { useEffect, useState } from 'react';

const useWatchData = () => {
    const [watches, setwatches] = useState([])
    useEffect(() => {
        fetch('http://localhost:7000/watch').then(res => res.json()).then(data => setwatches(data))

    }, [])
    return [watches]
}
export default useWatchData