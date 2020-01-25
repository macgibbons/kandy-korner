import React from "react"
import "./Employees.css"

export default ({ employee }) => (
    <section className="employee">
        <h3 className="employee__name">{employee.name}</h3>
        <div className="employee__info">
            <div className="employee__location">{employee.location.address}</div>
            <div className="employee__name">{employee.manager ? "Manager" : ""}</div>
            <div className="employee__name">{employee.fullTime ? "Full-time" : "Part-time"}</div>
            <div className="employee__hourlyRate">${employee.hourlyRate}/hr</div>


        </div>
            
    </section>
)

