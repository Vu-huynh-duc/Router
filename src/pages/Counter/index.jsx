import { memo, useState } from "react"

function Child( {name}) {
    console.log("Child render");
    return <h1>{name}</h1>
}
const MemoChild = memo(Child);

const Counter = () => {
    const [count, setCount] = useState(0)

    return <>       
                
        <button onClick={() => setCount(count + 1)}>Counter is {count}</button>
        <MemoChild name="minh">                        
        </MemoChild>

    </>
}

export default Counter