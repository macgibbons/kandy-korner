import React, { useContext } from "react"
import "./Products.css"
import { ProductContext } from "./ProductProvider";
import { CustomerCandyContext } from "./CustomerCandyProvider";


export default ( {product} ) => {

//     const { products } = useContext(ProductContext)

    const { addCustomerCandy  } = useContext(CustomerCandyContext)

    const CustomerCandyObject = {
            customerId: parseInt(localStorage.getItem("kandi_customer"), 10),
            productId: product.id
    }

    return (
        
            <section className="product">
                <address className="product__name"> {product.name} </address>
                <address>{product.productType.type}</address>

                <button className="btn--add"
                                onClick={() => {
                                    addCustomerCandy(CustomerCandyObject);
                                    window.alert(`${product.name} has been added to your cart`)
                                        
                            }}
                    >add to cart</button>
                
            </section>
            
    )
}

   



// import React, { useContext } from "react"
// import { CustomerContext } from "../customer/CustomerProvider"
// import { LocationContext } from "../location/LocationProvider"
// import { AnimalContext } from "./AnimalProvider"
// import "./Animals.css"

// export default (props) => {

//     /*
//         This line of code will be explained in the next
//         section of the chapter.
//     */
//     const chosenAnimalId = parseInt(props.match.params.animalId, 10)

//     const animal = animals.find(a => a.id === chosenAnimalId) || {}
//     const customer = customers.find(c => c.id === animal.customerId) || {}
//     const location = locations.find(l => l.id === animal.locationId) || {}