import { useEffect , useState } from "react";

function UE2(){
    const [date,setdate] = useState(new Date())
    useEffect(()=>{
        setInterval(()=>{
            setdate(new Date())
        },1000)
    },[])
    return (
        <>
        <h1>{date.toLocaleTimeString()}</h1>
        <h2>Hour:{date.getHours()} <br></br>
            Minites:{date.getMinutes()} <br></br>
            Seconds:{date.getSeconds()}
        </h2>
        </>
    )
}

export default UE2;