import React, { useState, useEffect} from "react";
import Wrapper from '../components/Wrapper';
import Nav from '../components/navbar';
import Jumbo from '../components/jumbotron';
import TitleSearch from "../components/searchTron";
import API from "../utils/API";
import Card from "../components/Card"


function Books () {
    const [search, setSearch] = useState ("Lord of the Rings");
    const [results, setResults] = useState([]);
    // const [saved, setSaved]

    useEffect(() => {
        loadSearch(search)
    }, [search])

    function loadSearch () {
        API.searchTitles(search)
        .then(res => {
            setResults(res.data.items);
        })
        .catch(err => console.log(err));
    }

    function searchBTN (event) {
        event.preventDefault();
        console.log("click");
        const data = event.target.dataset.value;
        console.log(data);
        setSearch(data);
        console.log(search)
        
        //  let data = searchRef.current.value;
        // setSRCH(data)
        // searchRef.current.value = ""
    
    };


    // function searchBTN (event) {
    //     event.preventDefault();
    //     console.log(searchRef.current.value)
    //     setSearch(searchRef.current.value)
    //     loadSearch()
    //     searchRef.current.value = ""


    // };

    return (
        <Wrapper>
            <Nav/>
            <Jumbo/>
            <TitleSearch  searchBTN = {searchBTN}/>
            <div>
                <h4>Results:</h4>
                {results.filter(result => result.volumeInfo.authors).map(res => (
                    <Card
                        key = {res.id}
                        title = {res.volumeInfo.title}
                        authors = {res.volumeInfo.authors[0]}
                        description = {res.volumeInfo.description}
                        image = {res.volumeInfo.imageLinks.smallThumbnail}
                        link = {res.volumeInfo.infoLink}
                        function = "Save"
                        searchBTN = {searchBTN}

                    /> 
                ))}
            </div>

        </Wrapper>
    )
    
    
}

export default Books;