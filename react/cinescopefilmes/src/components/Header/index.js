import { Link } from "react-router-dom";

function Header(){
    return(
        <header>
            <h1>Header</h1>
            <Link to="/">Home</Link>
            <Link to="/favoritos">Favoritos</Link>
        </header>
    )
}

export default Header;