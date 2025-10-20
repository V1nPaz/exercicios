import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Favoritos.css";
import { toast } from "react-toastify";

function Favoritos(){
    const [filmes, setFilmes] = useState([]);

    useEffect( ()=>{

        const minhaLista = localStorage.getItem("@cinescopefilmes");
        setFilmes(JSON.parse(minhaLista) || []);

    }, [])

    function excluirFilme(id){
        let filtroFilmes = filmes.filter( (item) => {
            return (item.id !== id)
        })
        setFilmes(filtroFilmes);
        localStorage.setItem("@cinescopefilmes", JSON.stringify(filtroFilmes));
        toast.success("O filme foi removido da sua lista!")
    }

    return(
        <div className="meus-filmes">
            <h1>Favoritos</h1>

            {filmes.length === 0 && <span>Você não tenhum nenhum filme favorito :(</span>}

            <ul>
                {filmes.map((filme) => {
                    return(
                        <li key={filme.id }>
                            <span>{filme.title}</span>
                            <div>
                                <Link to={`/filme/${filme.id}`} >Ver detalhes</Link>
                                <button onClick={() => excluirFilme(filme.id)}>Excluir</button>
                            </div>
                        </li>   
                    )
                })}
            </ul>
        </div>
    )
}

export default Favoritos;