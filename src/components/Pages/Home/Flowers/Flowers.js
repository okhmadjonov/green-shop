import React from "react"
import FlowerCastus from "./FlowerCactus/FlowerCactus";
import "./Flowers.scss"
import FlowerStyle from "./FlowerStyle/FlowerStyle";


function Flowers() { 
    return (
        <div className="flowers">
            <div className="container">
                <div className="flowers__wrapper">
                    <FlowerCastus />
                    <FlowerStyle/>
                </div>
            </div>
        </div>
    )
}


export default Flowers;