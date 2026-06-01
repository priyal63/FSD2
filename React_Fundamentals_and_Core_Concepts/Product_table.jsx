function Product(props){
    return(
        <>
        {<table border="2">
            <tr>
                <td>Name</td>
                <td>Image</td>
                <td>Price</td>
                <td>Rating</td>
            </tr>
            {props.data.filter((p)=>p.rating>4)
             .map((p)=>(
                <tr>
                    <td>{p.name}</td>
                    <td><img src={p.image} width="100"/></td>
                    <td>{p.Price}</td>
                    <td>{p.rating}</td>
                </tr>
             ))}
        </table>}
        
        </>
    )
}
export default Product