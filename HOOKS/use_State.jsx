import { useState } from "react";

function US1() {
    const [count, setCount] = useState(0);
    function handleCount() {
        setCount(count + 1); 
    }

    return (
        <>
            <h1>useState Example</h1> 
            <button onClick={handleCount}>Count: {count}</button>
        </>
    );
}
export default US1;