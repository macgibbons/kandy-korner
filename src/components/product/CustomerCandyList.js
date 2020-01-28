import React, { useContext } from "react"
import { CustomerCandyContext } from "./CustomerCandyProvider";
import CustomerCandy from "./CustomerCandy";

export default () => {

    const { CustomerCandys } = useContext(CustomerCandyContext)
    const currentUserId = parseInt(localStorage.getItem("kandi_customer"), 10)

    const currentUsersCandies = CustomerCandys.filter(cc => cc.customerId === currentUserId)

    return (
    <>
        <h2>My Cart</h2>
            <small>get yer fix.</small>

            <address>
                <div>Visit Us at the Germantown Location</div>
                <div>500 Rosa Parks blvd</div>
            </address>
        <div className="myCart">
        {
            currentUsersCandies.map(cc => <CustomerCandy key={cc.id} CustomerCandy={cc} />)
        }
        </div>
    </>
    )
}