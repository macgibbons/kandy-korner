import React, { useContext } from "react"
import "./Products.css"
import { ProductContext } from "./ProductProvider";
import { CustomerCandyContext } from "./CustomerCandyProvider";


export default ( {CustomerCandy} ) => (
    
        <section className="cartItem">
            <address className="item__name"> {CustomerCandy.product.name} </address>

        </section>

)
