// npm i axios

// axious
//     .get("API")
//     .then((r)=>console.log(r.data))
//     .catch((e)=>console.log(e))

// https://randomfox.ca/floof
// https://offical-joke-api.appspot.com/random_joke
// https://dog.ceo/api/breeds/image/random
// https://dumy.json.com/quotes

import {useEffect,useState} from "react";
import axios from "axios";

export default function Ax(){
    const [image,setimage] = useState("");
    useEffect(()=>{
        setInterval(()=>{
            axios
            .get("https://dog.ceo/api/breeds/image/random")
            .then((r)=>{
                console.log(r.data);
                setimage(r.data)
            })
            .catch((e)=>{
                console.log(e)})
            },2000)
        },[])
    

    return(
        <>
        <img src={image.message} alt="Fox" width="500" height="500"/>
        {/* <a href={image.link} target="_blank">Click Here</a> */}
        </>
    )
}