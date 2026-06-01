function Task(){
    const x="pqr";
    return(
        <>
             <h1>Welcome "{x}"</h1>  {/* Welcome "pqr" */}
             <h1>Welcome {x}</h1>  {/* Welcome pqr */}
             <h1>Welcome {"{x}"} </h1>  {/* Welcome {x} */}
             <h1>Welcome {x.toUpperCase()} </h1> {/*  Welcome PQR */}
        </>
    )
}
export default Task;