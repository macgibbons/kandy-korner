import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export default (props) => {
    return (
    <>
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/">Locations</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/products">Products</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/employees">Employees</Link>
            </li>
                {
                        localStorage.getItem("kandi_customer")
                            ? <li className="navbar__item">
                                <Link className="navbar__link"
                                    to=""
                                    onClick={e => {
                                        e.preventDefault()
                                        localStorage.removeItem("kandi_customer")
                                        props.history.push("/")
                                    }}
                                >Logout</Link>
                            </li>
                            : ""
                    }
        </ul>
    </>
    )
}