import React from 'react';
import "./style.css";

function TitleSearch (props) {
   return ( <div>
        <h4>Book Search</h4>
        <form>
            <label>Book</label>
            <input type ="text" ref = {props.searchRef} placeholder = "Lord of the Rings"/>
            <button type = "submit" onClick = {props.search}>Search</button>
        </form>
    </div>
   )
}

export default TitleSearch