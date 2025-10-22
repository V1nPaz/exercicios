import { useState } from "react";
import logo from "../../assets/logo.png";
import "./SignIn.css";
import { Link } from "react-router-dom";

function SignIn(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (


        <div className="login-container">
            <div className="login-icon-area">
                <img src={logo} alt ="logo"/>
            </div>

            <div className="login-area">
                <form className="login-form">
                    <label>Email</label>
                    <br/>
                    <input type="email" id = "email-input" onChange={(e)=> setEmail(e.target.value)} value={email} placeholder="email@example.com"/>
                    <br/>
                    <label>Senha</label>
                    <br/>
                    <input type="password" id="password-input" onChange={(e)=> setPassword(e.target.value)} value={password} placeholder="*******"/>
                    <br/>
                    <button type="submit" onClick="">Confirmar</button>
                    <h4>Não tem uma conta? Clique <Link to="/register">aqui</Link></h4> 
                </form>
            </div>
        </div>
    )
}

export default SignIn;