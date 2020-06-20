import axios from "axios";

export default {

    searchGoogle: async function(params) {
        try {
        const key = process.env.REACT_APP_KEY;
        let response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${params}&filter=ebooks&maxResults=40&startIndex=0&key=${key}`) 
        return response.data
            
        }
        catch (err){
            console.log(err)
        }
    }
}