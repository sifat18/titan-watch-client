import { useEffect, useState } from 'react';

const useReviewLoad = () => {
    const [reviewData, setreviewData] = useState([])
    useEffect(() => {
        fetch('https://vast-everglades-95998.herokuapp.com/reviews').then(res => res.json()).then(data => setreviewData(data))

    }, [])
    return [reviewData]
}
export default useReviewLoad