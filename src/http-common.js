import axios from "axios"

export default axios.create({
    baseURL : "https://654c94da77200d6ba8590928.mockapi.io/",
    headers : {
        "Content-type" : "application/json"
    }
});