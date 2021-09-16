import axios from "axios";

export const serviceMovie = async(title) => {

    const params = new URLSearchParams({
            apikey: "9c7bdb5a",
            s: title
        })

        try {
            const baseUrl = `https://www.omdbapi.com/?${params}`
            // console.log(baseUrl);
            return await axios.get(baseUrl)

        } catch (error) {
            return error.response
            // console.log(error);
        }
        // console.log(movies); 
}

export const serviceDetailsMovie = async(title) => {
    const params = new URLSearchParams({
        apikey: "9c7bdb5a",
        t: title
    });

    try {
        const baseUrl = `https://www.omdbapi.com/?${params}`
            // console.log(baseUrl);
        return await axios.get(baseUrl)
    } catch(error) {
        return error.response
    }
}