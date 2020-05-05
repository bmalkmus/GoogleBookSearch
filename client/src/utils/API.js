import axios from "axios";

// const key = process.env.API

export default {
    getBooks: function () {
        return axios.get("api/books");
    },
    getBook: function (id) {
        return axios.get("api/books/" + id);
    },
    deleteBook: function (id) {
        return axios.delete("/api/books" + id);
    },
    saveBook: function (bookData) {
        return axios.post("/api/books", bookData)
    },
    searchTitles: function (search) {
        console.log(search)
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=+intitle${search}&keyAIzaSyChh-ukRrOzr0fiPZrsIJkpHCWj6FZrQK8`)
    },

    TitleDetails: function (id) {
        return axios.get(`https://www.googleapis.com/books/v1/volumes/${id}&key=AIzaSyChh-ukRrOzr0fiPZrsIJkpHCWj6FZrQK8`)
    }

};