import React, {useRef, useState} from 'react';
import "./style.css";

function TitleSearch (props) {
const searchRef = useRef();
const [dataset, setDataSet] = useState("button");



// const searchBTN = (event) => {
//     event.preventDefault();
//     console.log("click")
//      let data = searchRef.current.value;
//     setSRCH(data)
//     searchRef.current.value = ""

// };
function inputChange (){
    let data = searchRef.current.value;
    setDataSet(data);
    console.log(dataset)
}



   return ( <div>
        <h4>Book Search</h4>
        <form>
            <label>Book</label>
            <input type ="text" ref = {searchRef}  onChange = {inputChange} placeholder = "Lord of the Rings"/>
            <button data-value = {dataset} type = "submit" onClick = {props.searchBTN}>Search</button>
        </form>
    </div>
   )
}

export default TitleSearch