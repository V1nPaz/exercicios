
// Base da URL: https://api.themoviedb.org/3/
// URL da API: movie/now_playing?api_key=86c7e7392317ef16c4ad0670b63c6e0e

import api from "../../services/api.js"
import {useEffect, useState} from "react";
import "./Home.css";
import { Link } from "react-router-dom";

function Home(){
    const [filmes, setFIlmes] = useState([]);
    const [loading, setLoading] = useState([true]);

    useEffect(() => {

        async function loadFilmes() {
        
            const response = await api.get("movie/now_playing", {
                params : {
                    api_key: "86c7e7392317ef16c4ad0670b63c6e0e",
                    language: "pt-BR",
                    page: 1
                }
            })
            setFIlmes(response.data.results);
            setLoading(false);
        }

        loadFilmes();

    })

    if (loading){
        return(
            <div className="loading">
                <h2>Carregando... </h2>
            </div>
        )
    }
    return(
        <div className="container">
            <div className="lista-filmes">
                
                {filmes.map((filme) => {
                    return(
                        <article key = {filme.id}>
                            <strong>{filme.title}</strong> <br/>
                            <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt = {filme.title} />
                            <Link to={`/filme/${filme.id}`}>Ver mais</Link>
                        </article>
                    )
                })}
            </div>

        </div>
    )
}

export default Home;