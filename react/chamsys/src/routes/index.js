import { Route, Routes, BrowserRouter } from "react-router-dom";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Erro from "../pages/Erro";
import Dashboard from "../pages/dashboard";
import AuthProvider from "../contexts/auth";
import Private from "./private";
import Profile from "../pages/Profile";

function RoutesApp(){
    return(

        <BrowserRouter>
            <AuthProvider>

                <Routes>
                    <Route path="/" element={ <SignIn/> }/>
                    <Route path="/register" element={ <SignUp/> }/>
                    <Route path="/dashboard" element={<Private>  <Dashboard/> </Private>}/>
                    <Route path="/profile" element={<Private>  <Profile/> </Private>}/>
                    <Route path="*" element ={ <Erro/> }/>
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    )
}

export default RoutesApp;