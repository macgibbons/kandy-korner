import React, { useState, useEffect } from "react"


export const CustomerCandyContext = React.createContext()


export const CustomerCandyProvider = (props) => {
    const [CustomerCandys, setCustomerCandys] = useState([])

    const getCustomerCandys = () => {
        return fetch("http://localhost:8088/CustomerCandy?_expand=product")
            .then(res => res.json())
            .then(setCustomerCandys)
    }

    const addCustomerCandy = CustomerCandy => {
        return fetch("http://localhost:8088/CustomerCandy", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(CustomerCandy)
        })
            .then(getCustomerCandys)
    }

   
    useEffect(() => {
        getCustomerCandys()
    }, [])

    useEffect(() => {
        console.log("****  CustomerCandy APPLICATION STATE CHANGED  ****")
    }, [CustomerCandys])

    return (
        <CustomerCandyContext.Provider value={{
            CustomerCandys, addCustomerCandy
        }}>
            {props.children}
        </CustomerCandyContext.Provider>
    )
}
