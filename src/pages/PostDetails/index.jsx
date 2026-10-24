import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function PostDetails() {
    const [postDetails, setPostDetails] = useState(null)
    const params = useParams()
           
    useEffect(() => {
        const loadPostDetails = async () => {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postID}`)
       
        const data = await res.json()
        setPostDetails(data)
    }
        loadPostDetails()
    }, [params.postID])

    if (!postDetails) return <>
        <h1>Comment App</h1>
        <p>Loading postDetails ...</p>
    </>

    return <>
        <h1>{postDetails.title}</h1>
    
        <div className="container">            
                <div className="comment-item">
                    {postDetails.body}
                </div>                         
        </div>

    </>
}

export default PostDetails