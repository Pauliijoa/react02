
import { useState } from "react"
//App.js -> import Counter from './
const Counter = () => {
    const [count, setCount] = useState(0)
    return (
        <>
        <span>contidad: {count} </span>
        <button onClick={() => setCount(count + 1)}>contar</button>
        <button onClick={()=> setCount(count - 1)}>restar</button>
        </>
    )

}
export default Counter