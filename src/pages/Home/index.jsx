import { useState } from "react"
import Modal from "../../components/Modal"
import styles from "./Home.module.scss"

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)
    console.log(isOpen)
    return <>        
        <h1>Chào mừng đến với F8 React Day 35</h1>
        <button onClick = {()=> setIsOpen(true)}>Open Modal</button>
        
        <Modal 
            isOpen = {isOpen}
            onRequestClose={()=>setIsOpen(false)}
            closeTimeoutMS = {100}
            overlayClassName = {styles.overlay}
            className = {styles.content}
            bodyOpenClassName={styles.body}
            shouldCloseOnOverlayClick={false}
            shouldCloseOnEse={false}
            >

        </Modal>
        
    </>
}

export default Home