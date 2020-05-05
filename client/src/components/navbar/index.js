import React from 'react';
import "./style.css";


function Nav () {
    return (
        <div>
            <h1>Google Books</h1>
            <ul>
                <li>
                    <a href = "/"> Search</a>
                </li>
                <li>
                    <a href = "/saved">Saved</a>
                </li>
            </ul>
        </div>
    )
}

export default Nav