import { Link } from "react-router-dom";
import "./Header.css";
function Header(){
    return(
        <header className="header">
            <h1>CINE SCOPE FILMES</h1>
            <Link to="/">Home</Link>
            <Link to="/favoritos">Favoritos</Link>
        </header>
    )
}

export default Header;