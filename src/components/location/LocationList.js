import React, { useContext } from "react"
import { LocationContext } from "./LocationProvider"
import Location from "./Location"
import "./Locations.css"

export default () => {
    const { locations } = useContext(LocationContext)

    return (
        <>
            <h2>Kandy Korner</h2>
            <small>get yer fix.</small>

            <address>
                <div>Visit Us at the Germantown Location</div>
                <div>500 Rosa Parks blvd</div>
            </address>
            <div className="locations">
            {
                locations.map(loc => <Location key={loc.id} location={loc} />)
            }
            </div>
        </>
    )
}