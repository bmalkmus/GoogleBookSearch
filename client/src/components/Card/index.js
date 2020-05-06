import React from 'react';
import './style.css';

function Card (props) {



    return(
    <div>
        <div>
        <div>
            <p>{props.title}</p>
            <p>{props.authors}</p>
        </div>
        <div>
            <a type = "button" href = {props.link} rel="noopener noreferrer" target = "_blank" className = "View">View</a>
            <button onClick = {props.unqBTN} data-id = {props.id}className = {props.function}>{props.function}</button>
        </div>
        </div>
        <div> 
            <img src = {props.image} alt= {props.title}/>
            <p>{props.description}</p>
        </div>
    </div>
    )
}

export default Card
