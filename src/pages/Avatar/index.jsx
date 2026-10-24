import styles from "./Avatar.module.scss"
import placeholderAvatar from "../../assets/placeholderAvatar.png"
import { useEffect, useState } from "react"


function Avatar () {   
    const [avatar, setAvatar] = useState(placeholderAvatar)

    useEffect(()=> {
        return () => {
            URL.revokeObjectURL(avatar)
        }
    },[avatar])


    const handleChange = (e) => {
        const image = e.target.files[0]
        const newAvatar = URL.createObjectURL(image)
        console.log(newAvatar)
        setAvatar(newAvatar)
    }
    return <>
        <label>
            <input type="file" hidden onChange={handleChange}/>
            <img className={styles.avatar} src={avatar}/>            
        </label>
        
    </>
}

export default Avatar