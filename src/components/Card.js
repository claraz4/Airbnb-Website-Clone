import React from "react"
import "../styles.css"
import star from "../images/star.png"

export default function Card(props) {
    let badgeText

    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.item.location === "Online") {
        badgeText = "ONLINE"
    }

    return (
        <div class="card--container">
            <img className="card--img" src={require(`../images/${props.item.coverImg}`)} />
            {badgeText && <div className="card--sold_out_badge">{badgeText}</div>}
            <div className="card--text">
                <div className="card--rating">
                    <img className="card--star" src={star} alt="Star" />
                    <p className="card--rating_no">{props.item.stats.rating}</p>
                    <p className="card--country">({props.item.stats.reviewCount})•{props.item.location}</p>
                </div>
                <p>{props.title}</p>
                <div className="card--price">
                    <p className="card--price_dollars">From ${props.item.price}</p>
                    <p>/ person</p>
                </div>
            </div>
        </div>
    )
}