// Base da URL: https://api.themoviedb.org/3/
// URL da API: movie/now_playing?api_key=86c7e7392317ef16c4ad0670b63c6e0e


import axios from "axios";

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/"
});

export default api;