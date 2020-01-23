import React from "react"
import "./Locations.css"

export default ({ location }) => (
    <section className="location">
        <address className="location__address">{location.address}</address>
        <address className="location__squareFootage">{location.squareFootage} Square Feet</address>
        <address className="location__handicap">Handicap Accessible: {location.handicapAccessible}</address>
        
    </section>
)