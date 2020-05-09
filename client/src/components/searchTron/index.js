import React, {useRef, useState} from 'react';
import "./style.css";

function TitleSearch (props) {
const searchRef = useRef();
const [dataset, setDataSet] = useState("button");




function inputChange (){
    let data = searchRef.current.value;
    setDataSet(data);
    console.log(dataset)
}



   return ( 
   <div className = "jumbotron srchCont">
        <h4>Book Search</h4>
        <form>
            <label>Book</label>
            <br/>
            <input className ="srchBar" type ="text" ref = {searchRef}  onChange = {inputChange} placeholder = "Lord of the Rings"/>
            <br/>
            <button className = "searchBTN" data-value = {dataset} type = "submit" onClick = {props.searchBTN}>Search</button>
        </form>
    </div>
   )
}

export default TitleSearch