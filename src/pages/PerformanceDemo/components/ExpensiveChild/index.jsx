import { memo } from "react"

const ExpensiveChild = memo(( {items} ) => {
    console.log('render ExpensiveChild tính toán nặng')
    return <ul>
        {items.map((item, index) => <li key={index}>{item}</li>)}

    </ul>
})

export default ExpensiveChild