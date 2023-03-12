import { createContext } from "react";

// export const AuthContext = createContext({
//     id: null,
//     name: null,
//     email: null,
//     phone: null,
//     token: null,
//     isLoggedIn: false
// });

const AuthContext = createContext();

function AuthProvider({ children }) {
    const [userData, setUserData] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const signIn = () => {

        setIsAuthenticated(true)
    };

    const authContext = {
        userData,
        setUserData,
        signIn,
        isAuthenticated,
    };

    return (
        <AuthContext.Provider value={authContext}>
            {children}
        </AuthContext.Provider>
    );
}

export { AuthContext, AuthProvider };