import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0)

    function handleClick() {
        setCount(count + 1)
    }

    return (
        <>
            <button onClick={handleClick}>Click Me</button>
            <p>Clicked {count} times</p>
        </>
    )


}

export default Counter;