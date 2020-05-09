import React from 'react';
import './style.css';

function Card (props) {



    return(
    <div className = "card">
        <div>
        <div className = "titles">
            <p className = "bookTitle">{props.title}</p>
            <p className = "Author">{props.authors}</p>
        </div>
        <div className = "actions">
            <a type = "button" href = {props.link} rel="noopener noreferrer" target = "_blank" className = "View">View</a>
            <button onClick = {props.unqBTN} data-id = {props.id}className = "otherButton">{props.function}</button>
        </div>
        </div>
        <div className = "info"> 
            <div className ="bookcover">
            <img  className = "bookArt" src = {props.image} alt= {props.title}/>
            </div>
            <div className = "desc">
                <p >{props.description}</p>
            </div>
        </div>
    </div>
    )
}

export default Card
