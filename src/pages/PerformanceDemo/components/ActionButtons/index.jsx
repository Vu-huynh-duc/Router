import { memo } from "react"

const ActionButtons = memo(({onIncrement, onReset}) => {
    console.log('ActionButtons is rendered')
    return <>        
        <button onClick={onIncrement}>Increment</button>
        <button onClick={onReset}>Reset</button>
    </>


})

export default ActionButtons