import img from "./assets/img.png";
import Product from "./Product_table";
function Productlist(){
    var products=[{
                        name:"butterfly ",
                        Price:35000,
                        rating:4.2,
                        image:img},
                    {
                        name:"Chrochet",
                        Price:55000,
                        rating:4.6,
                        image:img
                    },
                    {
                        name:"Product3",
                        Price:25000,
                        rating:3.8,
                        image:img
                    },
                ]
    return(
        <>
         <Product data={products}/>
        </>
    )
}
export default Productlist

// Name	      Image	  Price	  Rating
// butterfly   img	  35000	   4.2
// Chrochet	   img   55000    4.6