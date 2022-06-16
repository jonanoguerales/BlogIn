import { createContext } from "react";
import { useContext } from "react";
import { Context } from "../context/Context";


export const AuthContext = createContext();

export default function AuthProvider({children}){
    //const [user] = useState(null);
    const { user } = useContext(Context);

    const isLogged = () => !!user; //Si esta logeado me retorna true con la doble exclamacion
    const contextValue = {
        user,
        isLogged
    };
    return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
}
