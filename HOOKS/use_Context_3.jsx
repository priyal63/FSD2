import {useContext} from "react";
import {Fname,Lname} from "./use_Context_1";

export default function UC3(){
    var fn=useContext(Fname);
    var ln=useContext(Lname);

    return(
        <>
            <h1>Welcom {fn} {ln} </h1>
        </>
    )
}