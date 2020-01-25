import React, { useContext, useRef } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import { LocationContext } from "../location/LocationProvider"
import "./Employees.css"
import { number } from "prop-types";



export default props => {
    const { addEmployee } = useContext(EmployeeContext)
    const { locations } = useContext(LocationContext)
    const employeeName = useRef("")
    const employeeLocation = useRef(0)
    const employeeManager = useRef("")
    const employeeFullTime = useRef("")
    const employeeRate = useRef(0)
    const stringToBoolean = (value) => {

          if (value === "true"){
              return true;
        } 
          if(value === "false") {
              
              return false;
        } 
    }
        
    
    

    const constructNewEmployee = () => {
        const locationId = parseInt(employeeLocation.current.value)

    
        if (locationId === 0) {
            window.alert("Please select a location")
        } else {
            addEmployee({
                name: employeeName.current.value,
                locationId: locationId,
                manager: stringToBoolean(employeeManager.current.value),
                fullTime: stringToBoolean(employeeFullTime.current.value),
                hourlyRate: parseInt(employeeRate.current.value, 10)
                

            })
        }
    }

    const updateApplicationView = () => {
        props.history.push("/employees")
    }
               
              
    

    return (
        <form className="employeeForm">
            <h2 className="employeeForm__title">New Employee</h2>
            <div className="form-group">
                <input
                    type="text"
                    id="employeeName"
                    ref={employeeName}
                    required
                    autoFocus
                    className="form-control"
                    placeholder="Employee name"
                />
                
            </div>
      
            <div className="form-group">
                <select
                    defaultValue=""
                    name="location"
                    ref={employeeLocation}
                    id="employeeLocation"
                    className="form-control"
                >
                    <option value="0">Select a location</option>
                    {locations.map(e => (
                        <option key={e.id} value={e.id}>
                            {e.address}
                        </option>
                    ))}
                </select>
            </div>
            <div className="form-group">
                <select
                    defaultValue=""
                    name="Manager"
                    ref={employeeManager}
                    id="employeeManager"
                    className="form-control"
                >
                    <option value="0">Manager</option>
                    <option value="true">Yes</option>
                    <option value="false" >No</option>
                </select>
            </div>
            <div className="form-group">
                <select
                    defaultValue=""
                    name="Manager"
                    ref={employeeFullTime}
                    id="employeeFullTime"
                    className="form-control"
                >
                    <option value="0">Full-Time</option>
                    <option value="true">Yes</option>
                    <option value="false" >No</option>
                </select>
            </div>

            <div className="form-group">
                <input
                    type="text"
                    id="employeeRate"
                    ref={employeeRate}
                    required
                    autoFocus
                    className="form-control"
                    placeholder="Employee Hourly Rate"
                />
                
            </div>

            <button type="submit"
                onClick={
                    evt => {
                        evt.preventDefault() // Prevent browser from submitting the form
                        constructNewEmployee();
                        props.history.push("/employees")
                    }
                }
              
               
                className="btn btn-primary form-group">
                Save Employee
            </button>
        </form>
    )
}

