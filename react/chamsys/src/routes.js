import { Route, Routes, BrowserRouter } from "react-router-dom";
import Login from "./pages/Dashboard";
import SignIn from "./pages/SignIn";
import Erro from "./pages/Erro";

function RoutesApp(){
    return(

        <BrowserRouter>
            <Routes>
                <Route path="/login" element={ <Login/> }/>
                <Route path="/sign" element={ <SignIn/> }/>
                <Route path="*" element ={ <Erro/> }/>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;