import { useEffect, useState } from "react";

function DataFetcher({url, children}) {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    // console.log({data, loading, error})
        
    useEffect(() => {
        fetch(url)
        .then(res => {            
            if (!res.ok) {                
                throw new Error(`HTTP error: ${res.status}`);
            }
            return res.json()})
        .then(data => {
            if (Array.isArray(data) && data.length === 0) {
                throw new Error("Data is empty");
            }            
            setData(data)})
        .catch((error) => {            
            setError(error.message)            
        })
        .finally(
            () => {
                setLoading(false);
            }
        )
    },[url])

    return children({data, loading, error})

}

export default DataFetcher