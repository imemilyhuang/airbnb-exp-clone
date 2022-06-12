import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"

import data from "./data"

export default function App() {
    const cards = data.map(item => {
        return <Card 
            key={item.id}
            item={item}
            // can use {...item}, but would need to remove 
            // the ".item"s in card component
        />
    })
    
    return (
        <div>
            <div className="main-block">
                <Navbar />
                <Hero />
                <div className="cards-list">
                    {cards}
                </div>
                <small>Created by Emily Huang 2022.</small>
            </div>
        </div>
    )
}