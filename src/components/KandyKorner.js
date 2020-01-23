import React from "react"
import "./location/Locations.css"
import "./KandyKorner.css"
import LocationList from "./location/LocationList";
import { LocationProvider } from "./location/LocationProvider";


export default () => (
    <>
        <h2>Kandy Korner</h2>
        <small>get yer fix.</small>

        <address>
            <div>Visit Us at the Germantown Location</div>
            <div>500 Rosa Parks blvd</div>
        </address>

        <h2>Locations</h2>
        <article className="locations">
          <LocationProvider>
            <LocationList />
          </LocationProvider>
        </article>

        
    </>
)