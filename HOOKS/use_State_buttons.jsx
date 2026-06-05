import { useState } from "react";

function US3() {
    // Fixed case typo: Changed "Lj" to "LJ" to match the function condition
    const [text, settext] = useState("LJ University");
    const [color, setcolor] = useState("red");
    const [hide, sethide] = useState("Hide");
    const [hideshow, sethideshowtext] = useState("React JS");

    function changetext() {
        if (text === "LJ University") {
            settext("Welcome Students");
        } else {
            settext("LJ University");
        }
    }

    function changecolor() {
        if (color === "red") {
            setcolor("blue");
        } else {
            setcolor("red"); 
        }
    }

    function hidetext() {
        if (hide === "Hide") {
            sethide("Show");
            sethideshowtext(""); // Clears the text
        } else {
            sethide("Hide"); 
            sethideshowtext("React JS");
        }
    }

    return (
        <>
        <div>
            <h1>UseState Changing Example</h1>
            <h2 style={{ color: color }}>{text}</h2>
            <h3>{hideshow} Hooks</h3>
            
            <button onClick={changetext}>Click to Change the Text</button>
            <button onClick={changecolor}>Click to Change the Color</button>

            <button onClick={hidetext}>Click to {hide} the Text</button>
        </div>
        </>
    );
}

export default US3;
