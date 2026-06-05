import {useReducer} from "react";

function reducer(state,action){
    if(action.type==="inc"){
        return state+2;
    }
    else if(action.type==="dec"){
        return state-2;
    }
    else{
        return state;
    }
}

function UR2(){
    const [state,dispatch]=useReducer(reducer,50);

    return(
        <>
            <h1>{state}</h1>
            <button onClick={()=>dispatch({type:"inc"})}>Inc</button>
            <button onClick={()=>dispatch({type:"dec"})}>Dec</button>
        </>
    )
}
export default UR2;
