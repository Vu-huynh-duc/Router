import { memo } from "react"

const CounterDisplay = memo(({count}) => {
    console.log('CounterDisplay is rendered')
    return <h2>Counter is {count}</h2>
})

export default CounterDisplay