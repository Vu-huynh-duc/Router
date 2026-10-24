import { useState } from "react"

function useToggle(boolean) {

    const [isVisible, setVisible] = useState(boolean)

    const toggleVisible = () => {
        setVisible(!isVisible)
    }


    return [isVisible, toggleVisible, setVisible]
}
export default useToggle