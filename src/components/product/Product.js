import React from "react"
import "./Products.css"

export default ({ product }) => (
    <section className="product">
        <address className="product__name">{product.name}</address>
        <address className="product__type">{product.productType.type} </address>
        <address className="product__FK">{product.productTypeId}</address>
        
    </section>
)