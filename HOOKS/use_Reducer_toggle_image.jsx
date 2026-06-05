import { useReducer } from "react";
import img1 from "./assets/img1.png";
import img2 from "./assets/img2.png";
import img3 from "./assets/img3.png";

function reducer(state, action) {
    switch (action.type) {
        case "TOGGLE_IMAGE":
            if (state === img1) 
                return img2;
            if (state === img2) 
                return img3;
            return img1; 
        default:
            return state;
    }
}

function UR3() {
    const [state, dispatch] = useReducer(reducer, img1);

    return (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
            <img src={state} alt="Toggled Asset" style={{ display: "block", margin: "10px auto", maxWidth: "300px" }} />
            
            <button onClick={() => dispatch({ type: "TOGGLE_IMAGE" })}>
                Next Image
            </button>
        </div>
    );
}

export default UR3;
