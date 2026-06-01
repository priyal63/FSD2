
// Events = onClick,onDoubleClick,onChange,onSubmit

function Events(){
    const handleclick=()=>{
        alert(`Welcome`);
    }
    return(
        <>
            <br />
            <button style={{color:"white",backgroundColor:"red",height:"20px",width:"100px"}} onClick={handleclick}> Click Here</button>
            <br />
        </>
    )
}
export default Events;