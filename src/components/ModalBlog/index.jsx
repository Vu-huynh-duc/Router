import styles from "./ModalBlog.module.scss"

const ModalBlog = ({ closeBlog, blog }) => {
    return (
        <div className={styles['modal-overlay']} onClick={closeBlog}>
            <div className={styles["modal-content"]} onClick={(e) => e.stopPropagation()}>
                <p className={styles["id-blog-item"]}>ID: {blog.id}</p>
                <h2 className={styles["title-blog-item"]}> {blog.title} </h2>
                <p className={styles["content-blog-item"]}>{blog.body}</p>
                <button className={styles["modal-close-btn"]} onClick={closeBlog}>
                    Close
                </button>
            </div>
        </div>
    );
};

export default ModalBlog