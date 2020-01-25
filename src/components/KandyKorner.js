// import React from "react"
// import "./location/Locations.css"
// import "./KandyKorner.css"
// import LocationList from "./location/LocationList";
// import { LocationProvider } from "./location/LocationProvider";
// import { ProductProvider } from "./product/ProductProvider";
// import ProductList from "./product/ProductList";


// export default () => (
//     <>
//         <h2>Kandy Korner</h2>
//         <small>get yer fix.</small>

//         <address>
//             <div>Visit Us at the Germantown Location</div>
//             <div>500 Rosa Parks blvd</div>
//         </address>

//         <h2>Locations</h2>
//         <article className="locations">
//           <LocationProvider>
//             <LocationList />
//           </LocationProvider>
//         </article>

//         <h2>Products</h2>
//         <article className="products">
//           <ProductProvider>
//             <ProductList />
//           </ProductProvider>
//         </article>
        
//     </>
// )


import React from "react"
import { Route } from "react-router-dom"
import NavBar from "./nav/NavBar"
import ApplicationViews from "./ApplicationViews"
import "./KandyKorner.css"

export default () => (
    <>
        <NavBar />
        <ApplicationViews />
    </>
)
