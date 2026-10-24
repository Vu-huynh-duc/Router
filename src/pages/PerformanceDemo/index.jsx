import { useCallback, useState } from "react";
import CounterDisplay from "./components/CounterDisplay";
import ActionButtons from "./components/ActionButtons";
import ExpensiveChild from "./components/ExpensiveChild";

function PerformanceDemo() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState()
    const [items, setItems] = useState([])

    const onIncrement = useCallback(() => {
        setCount((pre) => pre + 1)
    },[])
    
    const onReset = useCallback(() => {
        setCount(() => 0)
    },[])

    const onAddItem = useCallback(() => {
        setItems(pre => [...pre, count]        
        )
    },[count])
    

    return <>
        <button onClick={onIncrement}>Increment Count</button>
        <button onClick={() => setName("Minh")}>{`Change Name is ${name}`}</button>
        <button onClick= {onAddItem}>Add Item</button>

        <CounterDisplay count={count}/>
        <ActionButtons onIncrement={onIncrement} onReset={onReset}/>
        <ExpensiveChild items={items}/>
        </>
}

export default PerformanceDemo