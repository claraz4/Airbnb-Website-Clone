import React from "react"
import "../styles.css"
import airbnbLogo from "../images/airbnb-logo.png"

export default function Navbar() {
    return (
        <nav class="nav--container">
            <img class="nav--logo" src={airbnbLogo} alt="Airbnb Logo"/>
        </nav>
    )
}