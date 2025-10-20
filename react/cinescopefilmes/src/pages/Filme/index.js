import { use, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../../services/api";


function Filme(){
    const {id} = useParams();

    const [filme, setFilme] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(()=>{
        async function loadFilme(){
            await api.get(`/movie/${id}`, {
                params: {
                    api_key: "86c7e7392317ef16c4ad0670b63c6e0e",
                    language: "pt-BR"
                }
            })   
            .then( (response) =>{
                setFilme(response.data);
                setLoading(false);
            })
            .catch(()=>{
                console.log("ERRO. FILME NÃO ENCONTRADO");
                navigate("/", {replace: true});
                return;
            })
        }
        loadFilme();

        return () =>{
            console.log("Componente desmontado")
        }
    }, [navigate, id])

    function salvarFilme(){
        const minhaLista = localStorage.getItem("@cinescopefilmes");
        
        let filmesSalvos = JSON.parse(minhaLista) || []; 

        const hasFilme = filmesSalvos.some( (filmeSalvos) => filmeSalvos.id === filme.id);

        if (hasFilme){
            // alert("Esse filme já está na sua lista");
            toast.warn("Esse filme já está na sua lista!")
            return;
        }

        filmesSalvos.push(filme);
        localStorage.setItem("@cinescopefilmes", JSON.stringify(filmesSalvos));
        // alert("Filme adicionado com sucesso!");
        toast.success("FIlme adicionado à sua lista!")

    }

    if (loading){
        return(
            <div className="loading">
                <h1>Loading...</h1>
            </div>
        )
    }

    return(
        <div className="filme-info">
            <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`}></img>
            <h2>{filme.title}</h2> <br/>
            <p>{filme.overview}</p> <br/>
            <a href={`https://www.youtube.com/results?search_query=${filme.title.replace(" ", "+")}+trailer`} rel="external" target="blank">Trailer</a> <br/>
            <button onClick={salvarFilme}>Salvar</button>
        </div>
    )
}

export default Filme;