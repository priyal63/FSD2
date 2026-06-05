import Com3 from "./use_Context_test_3";
import { createContext, useContext } from "react";

const Color=createContext();

export default function Com2(){
    return(
        <>
            <Color.Provider value="red">
                <Com3 />
            </Color.Provider>
                </>
    )
}export {Color};
