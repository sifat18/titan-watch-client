import { useEffect, useState } from 'react';

const useReviewLoad = () => {
    const [reviewData, setreviewData] = useState([])
    useEffect(() => {
        fetch('http://localhost:7000/reviews').then(res => res.json()).then(data => setreviewData(data))

    }, [])
    return [reviewData]
}
export default useReviewLoad