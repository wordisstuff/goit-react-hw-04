import axios from "axios";
const myId = "client_id=WWa1HF55UmSelE5fk8CKreEnNP0hpyz0IMlvSGKod8";
// const myId = "/?wordisstuff"

export const api = axios.create({ baseURL: 'https://api.unsplash.com' });

export const requestProducts = async () => {
    const  {data}  = await api.get(`/photos?${myId}`)
    console.log(data)
    return data
}

export const requestPhotosByQuery = async(query = "") => {
    const {data}= await api.get(`/search/photos?q=${query}&${myId}`)
    return data
}