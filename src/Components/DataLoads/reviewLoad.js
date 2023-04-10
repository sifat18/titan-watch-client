import { useEffect, useState } from 'react';
// review data load
const useReviewLoad = () => {
    const [reviewData, setreviewData] = useState([])
    useEffect(() => {
        fetch('https://titanserver.onrender.com/reviews').then(res => res.json()).then(data => setreviewData(data))

    }, [])
    return [reviewData]
}
export default useReviewLoad