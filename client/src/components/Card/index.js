import React from 'react';
import './style.css';

function Card (props) {
    return(
    <div>
        <div>
            <p>{props.title}</p>
            <p>{props.authors}</p>
        </div>
        <div>
            <button className = "View">View</button>
            <button className = {props.function}>{props.function}</button>
        </div>
        <div> 
            <img src = {props.image} alt= {props.title}/>
            <p>{props.description}</p>
        </div>
    </div>
    )
}

export default Card
