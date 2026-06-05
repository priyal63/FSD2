import {useState} from "react";
import img1 from "./assets/hero.png";
import img2 from "./assets/react.svg";

function US4(){
    const [image,setimage]=useState(img2);
    function handleimage(){
        if(image===img1){
            setimage(img2);
        }
        else{
            setimage(img1)
        }
    }
    return(
        <>
        <h1>Toggle Image</h1>
        <div>
            <img src={image} alt="image" width="300" height="300" />
            <button onClick={handleimage}>Change Image</button>
        </div>
        </>
    )
}
export default US4