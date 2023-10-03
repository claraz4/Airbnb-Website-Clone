import React from "react"
import "../styles.css"
import photoGrid from "../images/photo-grid.png"

export default function Experience() {
    return (
        <div className="experience--container">
            <img className="experience--photogrid" src={photoGrid} alt="Photo Grid"/>
            <div className="experience--text">
                <h1 className="experience--title">Online Experiences</h1>
                <p className="experience--paragraph">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
            </div>
        </div>
    )
}