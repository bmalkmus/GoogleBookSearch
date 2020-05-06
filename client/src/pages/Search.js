import React, { useState, useEffect} from "react";
import TitleSearch from "../components/searchTron";
import API from "../utils/API";
import Card from "../components/Card"


function Books () {
    const [search, setSearch] = useState ("Lord of the Rings");
    const [results, setResults] = useState([]);

    useEffect(() => {
        loadSearch(search)
    }, [search])

    function loadSearch () {
        API.searchTitles(search)
        .then(res => {
            console.log(res.data)
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
    
    };

    function unqBTN (event) {
        console.log("click")
        const id = event.target.dataset.id;
        console.log(id);
        API.searchID(id)
        .then(res => {
            console.log(res.data)
            API.saveBook({
                title: res.data.volumeInfo.title,
                authors: res.data.volumeInfo.authors[0],
                description: res.data.volumeInfo.description,
                image: res.data.volumeInfo.imageLinks.smallThumbnail,
                link: res.data.volumeInfo.infoLink
            })
            alert(`${res.data.volumeInfo.title} saved to your collection!`)
        })
        .catch(err => console.log(err))

    }


    return (
       <div>
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
                        id = {res.id}
                        unqBTN = {unqBTN}

                    /> 
                ))}
            </div>
        </div>
    )
    
    
}

export default Books;