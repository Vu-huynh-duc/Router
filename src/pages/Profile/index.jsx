import { useEffect, useState } from 'react';
import ModalBlog from '../../components/ModalBlog';
import styles from "./Profile.module.scss"

const Profile = () => {
    const [blogsInfo, setBlogsInfo] = useState(null);
    const [blogSelected, setBlogSelected] = useState(null);

    useEffect(() => {
        const pullData = async () => {
            const res = await fetch(
                'https://jsonplaceholder.typicode.com/posts?_limit=12',
            );
            const newBlogsInfo = await res.json();
            setBlogsInfo(newBlogsInfo);
        };
        pullData();
    }, []);

    const handleBlogContent = (content) => {
        if (content.length < 100) return content;
        return content.slice(0, 100) + '...';
    };

    if (!blogsInfo) return <p>Đang tải…</p>;

    return (
        <>
            <h1>Danh sách bài viết</h1>
            <div className={styles["container"]}>
                {blogsInfo.map((blog) => (
                    <div key={blog.id} className={styles["blog-item"]}>
                        <p className={styles["id-blog-item"]}>ID: {blog.id}</p>
                        <h2 className={styles["title-blog-item"]}> {blog.title} </h2>
                        <p className={styles["content-blog-item"]}>
                            {handleBlogContent(blog.body)}
                        </p>
                        <button
                            onClick={() => setBlogSelected(blog)}
                            className={styles["desc-btn"]}
                        >
                            Xem chi tiết
                        </button>
                    </div>
                ))}
            </div>

            {blogSelected && (
                <ModalBlog
                    closeBlog={() => {
                        setBlogSelected(null);
                    }}
                    blog={blogSelected}
                />
            )}
        </>
    );
};


export default Profile;
