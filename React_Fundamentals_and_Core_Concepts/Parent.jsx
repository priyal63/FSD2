import Child from "./Child";
function Parent(){
    var s="ABC";
    const obj={name:"Virat",clg:"L J University"}
    return(
        <>
        <Child name="pqr" age="21"/>
        <Child name={s} age={22} />
        <Child1 data={obj} />
        </>
    )
}

function Child1(props){
    return(
        <>
        
        <h1 style={{color:"blue",
            textTransform:"UpperCase",
            textDecoration:"underline"
        }}>Welcome {props.data.name} to {props.data.clg}.</h1>
        </>
    )
}

export default Parent;

// Welcome Virat to L J University.