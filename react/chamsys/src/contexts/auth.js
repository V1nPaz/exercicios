import { useState, createContext, useEffect } from "react";

export const AuthContext = createContext({});

function AuthProvider({ children }){
    const [user, setUser] = useState(null);

    function signIn(email, password){
        alert(`email: ${email}\nsenha: ${password}\nLOGADO COM SUCESSO`);
    }

    return(
        <AuthContext.Provider value={{
            signed: !!user,
            user,
            signIn
            
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;