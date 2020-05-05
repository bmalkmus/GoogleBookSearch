import React, { useState, useEffect, useRef} from "react";
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
    const searchRef = useRef()

    useEffect(() => {
        loadSearch()
    }, [])

    function loadSearch () {
        API.searchTitles(search)
        .then(res => {

            setResults (res.data.items)
        })
        .catch(err => console.log(err));
    }

    function searchBTN (event) {
        event.preventDefault();
        console.log(searchRef.current.value)
        setSearch(searchRef.current.value)
        loadSearch()
        searchRef.current.value = ""


    };

    return (
        <Wrapper>
            <Nav/>
            <Jumbo/>
            <TitleSearch search = {searchBTN}/>
            <div>
                <h4>Results:</h4>
                {results.map(result => (
                    API.TitleDetails(result.id)
                    .then(res => {
                        console.log(res);
                    <Card
                        title = {res.title}
                        authors = {res.authors}
                        description = {res.description}
                        image = {res.image}
                        link = {res.link}
                        function = "Save"

                    /> })
                ))}
            </div>

        </Wrapper>
    )
    
    
}

export default Books;