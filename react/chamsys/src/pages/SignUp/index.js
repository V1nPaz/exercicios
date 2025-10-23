import { useState } from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import "./SignUp.css";

function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(e){
        e.preventDefault();
        if (name !== "" && email !== "" && password !== ""){
            alert("FAZER CADASTRO!!!!!!!!!");
        }
    }

    return (
        <div className="signup-container">

            <div className="register-icon-area">
                <img src={logo} alt="logo" />
            </div>
            <div className="register-area">
                <form className="register-form" onSubmit={handleSubmit}>
                    <label>Nome</label>
                    <br />
                    <input 
                        type="text" 
                        id="nome-input" 
                        onChange={(e) => setName(e.target.value)} 
                        value={name} 
                        placeholder="Gustavo Menezes" 
                    /> 
                    <br />
                    
                    <label>Email</label>
                    <br />
                    <input 
                        type="email" 
                        id="email-input" 
                        onChange={(e) => setEmail(e.target.value)} 
                        value={email} 
                        placeholder="gustavomenezes@example.com" 
                    />
                    <br />

                    <label>Senha</label>
                    <br />
                    <input 
                        type="password" 
                        id="password-input" 
                        onChange={(e) => { setPassword(e.target.value) }} 
                        value={password} 
                        placeholder="••••••••" 
                    />
                    <br />

                    <button type="submit">Registrar</button>
                    <br />

                    <h4>Já tem uma conta? Clique <Link to="/">aqui</Link> para fazer login</h4>
                </form>

            </div>


        </div>
    )
}

export default SignUp;