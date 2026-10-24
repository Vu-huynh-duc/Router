import { useEffect, useState } from "react";

function useApi(url) {
    const [data, setData] = useState()
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(true)
    const [refetchCount, setRefetchCount] = useState(0);

    const refetch = () => {
        setRefetchCount(count => count + 1);
    };
    useEffect(() => {
        fetch(url)
        .then(res => {
                if (!res.ok) {
                    throw new Error(`HTTP error: ${res.status}`);
                }
                return res.json();
            })
        .then(data => setData(data))
        .catch(error => setError(error.message))
        .finally(() => setLoading(false))
        
    }, [url, refetchCount])

    return {data, error, loading, refetch}
}

export default useApi