import React, {useState, useEffect} from 'react';
import API from "../utils/API";
import Card from "../components/Card"


function SavedList () {
    const [Saved, setSaved] = useState([]);
    
    useEffect(() => {
        loadSaved()
    }, [Saved])
    
    function loadSaved () {
        API.getBooks()
        .then(res => {
            setSaved(res.data)
        })
     
        .catch(err => console.log(err))
    }
function unqBTN (event) {
    const id = event.target.dataset.id;
    API.deleteBook(id)
    .then(res => loadSaved())
    .catch (err => console.log(err))

}

return (
    <div>
     
            <div>
                <h4> Saved List</h4>
                {Saved.map( book => (
                    <Card 
                        key = {book._id}
                        title = {book.title}
                        authors = {book.authors}
                        image = {book.image}
                        description = {book.description}
                        link = {book.link}
                        function = "Delete"
                        id = {book._id}
                        unqBTN = {unqBTN}
                    />
                ))}
            </div>
    </div>
)
};

export default SavedList