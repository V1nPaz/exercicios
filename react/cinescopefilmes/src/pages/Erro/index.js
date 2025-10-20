
import "./Erro.css"
import { Link } from "react-router-dom";

function Erro(){
    return(
        <div className="erro">
            <h2>Erro. Página não encontrada</h2>
            |<Link to="/ ">Voltar a página inicial</Link>
        </div>
    )
}

export default Erro;