import React from "react"
import Navbar from "./components/Navbar"
import Experience from "./components/Experience"
import Card from "./components/Card"
import "./styles.css"
import data from "./data"

export default function App() {
    const cardElements = data.map(
        element => {
            return <Card 
                key={element.id}
                item={element}
            />
        }
    )

    return (
        <div class="app--container">
            <Navbar />
            <Experience />
            <div className="card--all_container">
                {cardElements}
            </div>
        </div>
    )
}