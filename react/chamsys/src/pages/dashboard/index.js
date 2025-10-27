import { useContext } from "react";
import { AuthContext } from "../../contexts/auth";
import Header from "../../components/Header";

function Dashboard(){
    const {logout} = useContext(AuthContext);

    async function handleLogout() {
        await logout();
    }

    return(
        <div className="dashboard">
            <Header/>
            <h1>Página de dashboard</h1>
            <button onClick={handleLogout}>SAIR</button>
        </div>
    )
}

export default Dashboard;