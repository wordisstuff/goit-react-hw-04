import axios from "axios";
// const myId = "/?wordisstuff"
export const API = axios.create({baseUrl :`https://api.unsplash.com`})

export const requestProducts = async () => {
    const { data } = await API.get("/photos")
    console.log(data)
    return data
}

export const requestPhotosByQuery = async(query = "") => {
    const {data} = await API.get(`/photos/search?q=${query}`)
    return data
}