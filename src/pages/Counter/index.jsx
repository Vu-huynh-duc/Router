import React from "react"

const Counter = () => {
    const [count, setCount] = React.useState(0)

    return <>
        <h1>Counter</h1>
        <h2 style={{ color: count > 0 ? 'green' : count < 0 ? 'red' : 'gray' }}>Số: {count} </h2>
        <p>Trạng thái: {count > 0 ? 'dương' : count < 0 ? 'âm' : 'bằng không'}</p>
        <button onClick={() => setCount(count - 1)}>Giảm</button>
        <button onClick={() => setCount(0)}>Reset</button>
        <button onClick={() => setCount(count + 1)}>Tăng</button>

    </>
}

export default Counter