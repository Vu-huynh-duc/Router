import { useEffect, useState } from "react"

const Comments = () => {
    const [commentsVar, setCommentsVar] = useState(null)
    const [userName, setUserName] = useState("")
    const [userEmail, setUserEmail] = useState("")
    const [userComment, setUserComment] = useState("")   
    
    useEffect(() => {
        const pullApiCmt = async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/comments?postId=1')
        const data = await res.json()
        setCommentsVar(data)
    }
        pullApiCmt()
    }, [])

    if (!commentsVar) return <>
        <h1>Comment App</h1>
        <p>Loading commentsVar ...</p>
    </>

    return <>
        <h1>Comment App</h1>
        <form onSubmit={(e) => {
            e.preventDefault()
            if (!userName || !userEmail || !userComment) return
            const newComment = {
                postId: 1,
                id: crypto.randomUUID(),
                name: userName,
                email: userEmail,
                body: userComment,
            }

            setCommentsVar([newComment, ...commentsVar])
            setUserName("")
            setUserEmail("")
            setUserComment("")
        }}>
            <div>
                <label>Name</label>
                <input
                    type="text"
                    value={userName}
                    onChange={(e) => { setUserName(e.target.value) }}
                    placeholder="Enter your name"
                />
            </div>

            <div>
                <label>Email</label>
                <input
                    type="email"
                    value={userEmail}
                    onChange={(e) => { setUserEmail(e.target.value) }}
                    placeholder="Enter your email"
                />
            </div>

            <div>
                <label>Comment</label>
                <textarea
                    value={userComment}
                    onChange={(e) => { setUserComment(e.target.value) }}
                    placeholder="Write your comment..."
                />
            </div>

            <button type="submit">Add Comment</button>
        </form>
        <div className="container">
            {commentsVar.map(cmt => (
                <div className="comment-item" key={cmt.id}>
                    <img className="img-user-cmt" src={`https://ui-avatars.com/api/?name=${cmt.name}&background=random`} />
                    <p className="name-user-cmt">{cmt.name}</p>
                    <p className="email-user-cmt">{cmt.email}</p>
                    <p className="body-user-cmt">{cmt.body}</p>
                    <p className="time-user-cmt">54 phút trước</p>
                </div>

            ))}
        </div>

    </>
}

export default Comments