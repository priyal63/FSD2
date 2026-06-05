import { useState } from "react";
import img1 from "./assets/img1.png"
import img2 from "./assets/img2.png"
import img3 from "./assets/img3.png"

function US5(){
    const [image,setimage]=useState(img1);
    const img=[img1,img2,img3]

    function handleimage(){
        if (image===img1){
            setimage(img[Math.floor(Math.random() * img.length)])
        }
        else{
            setimage(img1)
        }
    }
    return (
        <>
        <img src={image} alt="Image" width="300" height="300"/>
        <button onClick={handleimage}>Change Image</button>
        </>
    )
}export default US5;