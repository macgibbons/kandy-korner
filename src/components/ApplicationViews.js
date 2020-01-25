import React from "react"
import { Route } from "react-router-dom"
import { LocationProvider } from "./location/LocationProvider"
import LocationList from "./location/LocationList"
import { ProductProvider } from "./product/ProductProvider";
import ProductList from "./product/ProductList";
import { EmployeeProvider } from "./employee/EmployeeProvider";
import EmployeeList from "./employee/EmployeeList";
import EmployeeForm from "./employee/EmployeeForm";




export default (props) => {
    return (
        <>
            <LocationProvider>
                <Route exact path="/">
                    <LocationList />
                </Route>
            </LocationProvider>

            <ProductProvider>
                <Route exact path="/products">
                    <ProductList />
                </Route>
            </ProductProvider>
            <EmployeeProvider>
                <LocationProvider>
                    <Route exact path="/employees" render={
                        props => <EmployeeList {...props} />
                    } />

                    <Route exact path="/employees/create" render = {
                        props => <EmployeeForm {...props} />
                    } />
                       

                </LocationProvider>
            </EmployeeProvider>

            
            
        </>
    )
}

// You need to use the history.push() method again to take the user to a new view. Reference the code above to see how to do the following two tasks.

// Provide the React Router history object to the EmployeeForm component by refactoring ApplicationViews.
// Route the user to /employees.