function Nopage() {
  return(
        <>
        <div>
            {props.data.map((d,i)=>
            <div key={i}>
                <h1>Project Name : {d.name}</h1>
                <h4>Project Description : {d.desc}</h4>
                <img src={d.image} width="400px"/>
            </div>
            )}
        </div>
        </>
    )
}

export default Nopage;