import { useContext } from "react";
import jwtDecode from "jwt-decode";

import AuthContext from "./context";
import authStorage from "./storage";

export default useAuth = () => {

    const { user, setUser } = useContext(AuthContext);

    const logIn = (authToken) => {
        const user = jwtDecode(authToken); // {name,email} ==> user claims
        setUser(user); // trigger App comp state
        authStorage.storeToken(authToken);
    };

    const logOut = () => {
        setUser(null);
        authStorage.removeToken();
    };


    return { user, logIn, logOut };
};
