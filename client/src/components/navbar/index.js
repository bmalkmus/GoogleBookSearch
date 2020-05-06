import React from 'react';
import "./style.css";


function Nav () {
    return (
        <div className = "navbar nav">
            <h1 className = "navbar-brand">Google Books</h1>
            <ul>
                <li className = "links">
                    <a href = "/search"> Search</a>
                </li>
                <li className = "links">
                    <a href = "/saved">Saved</a>
                </li>
            </ul>
        </div>
    )
}

export default Nav