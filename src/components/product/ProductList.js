import React, { useContext } from "react"
import { ProductContext } from "./ProductProvider";
import Product from "./Product";

export default () => {

    const { products } = useContext(ProductContext)

    return (
    <>
        <h2>Kandy Korner</h2>
            <small>get yer fix.</small>

            <address>
                <div>Visit Us at the Germantown Location</div>
                <div>500 Rosa Parks blvd</div>
            </address>
        <div className="products">
        {
            products.map(prod => <Product key={prod.id} product={prod} />)
        }
        </div>
    </>
    )
}