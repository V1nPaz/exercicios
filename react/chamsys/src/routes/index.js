import { Route, Routes, BrowserRouter } from "react-router-dom";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Erro from "../pages/Erro";
import AuthProvider from "../contexts/auth";

function RoutesApp(){
    return(

        <BrowserRouter>
            <AuthProvider>

            <Routes>
                <Route path="/" element={ <SignIn/> }/>
                <Route path="/register" element={ <SignUp/> }/>
                <Route path="*" element ={ <Erro/> }/>
            </Routes>
            </AuthProvider>
        </BrowserRouter>
    )
}

export default RoutesApp;