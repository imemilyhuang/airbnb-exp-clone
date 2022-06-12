import React from "react"

export default function Card(props) {
    let badgeLabel
    if (props.item.openSpots === 0) {
        badgeLabel = "SOLD OUT"
    } else if (props.item.location === "Online") {
        badgeLabel = "ONLINE"
    }
    return (
        <div className="card">
            {badgeLabel && <div className="card-badge">{badgeLabel}</div>}
            
            <img src={`/images/${props.item.coverImg}`} className="card-img" />
            <div className="card-stats">
                <img src="/images/star.png" className="card-star" />
                <span className="stats-margin">{parseFloat(props.item.stats.rating).toFixed(1)}</span>
                <span className="gray">({props.item.stats.reviewCount})</span>
                <span className="gray stats-margin">•</span>
                <p className= "gray">{props.item.location}</p>
            </div>
            <p className="card-title">{props.item.title}</p>
            <p>
                <span className="bold">
                From ${props.item.price}</span> / person
            </p>
        
        </div>
    )
}