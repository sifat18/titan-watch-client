import { useEffect, useState } from 'react';
// watch data load
const useWatchData = () => {
    const [watches, setwatches] = useState([])
    useEffect(() => {
        fetch('https://vast-everglades-95998.herokuapp.com/watch').then(res => res.json()).then(data => setwatches(data))

    }, [])
    return [watches]
}
export default useWatchData