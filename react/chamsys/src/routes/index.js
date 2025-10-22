import { Route, Routes, BrowserRouter } from "react-router-dom";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Erro from "../pages/Erro";

function RoutesApp(){
    return(

        <BrowserRouter>
            <Routes>
                <Route path="/login" element={ <SignIn/> }/>
                <Route path="/register" element={ <SignUp/> }/>
                <Route path="*" element ={ <Erro/> }/>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;