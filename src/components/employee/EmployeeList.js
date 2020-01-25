import React, { useContext } from "react"
import "./Employees.css"
import { EmployeeContext } from "./EmployeeProvider";
import Employee from "./Employee";

export default (props) => {
    const { employees } = useContext(EmployeeContext)

    return (
        <>
        <h2>Kandy Korner</h2>
            <small>get yer fix.</small>

            <address>
                <div>Visit Us at the Germantown Location</div>
                <div>500 Rosa Parks blvd</div>
            </address>
        <div className="employees">
            <h1>Employees</h1>
            <button className="employeeButton" onClick={() => props.history.push("/employees/create")}>
                Add Employee
            </button>
            <article className="employeeList">
                {employees.map(employee => <Employee key={employee.id} employee={employee} />)}
            </article>
        </div>
    </>
    )
}