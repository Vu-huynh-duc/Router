import { useEffect, useState } from "react"
import { Link, useSearchParams } from "react-router-dom"

function Post() {
    const [searchParams, setSearchParams] = useSearchParams()
    const [page, setPage] = useState(() => searchParams.get('page') || 1)
    const [post, setPost] = useState(null)

    useEffect(() => {        
        const loadPost = async () => {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=50&_page=${page}`)
        const data = await res.json()
        setPost(data)
    }
        loadPost()
    }, [page])

    useEffect(() => {
        setSearchParams({page})
    }, [page, setSearchParams])

    if (!post) return <>
        <h1>Comment App</h1>
        <p>Loading post ...</p>
    </>

    return <>
        <h1>Post List</h1>
    
        <div className="container">
            {post.map(item => (
                <div className="comment-item" key={item.id}>
                    <Link to={`/post/${item.id}`} >{`${item.id}. ${item.title}`}</Link>
                </div>
            ))}
            
        </div>
        {
            Array(10).fill().map((_, index) => <button key={index+1} onClick={()=>setPage(index+1)}>{index+1}</button>)
        }

    </>
}

export default Post