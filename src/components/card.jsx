import React from "react";


export default function Card({image,name,score}){
    return (
        <div className={`card ${name}`}>
            <div className="card--left">
            <img src={image}></img>
            <h3>{name}</h3>
            </div>
            <h3 className="card--right"><span>{score} </span>/ 100</h3>
        </div>
    )
}