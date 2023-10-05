import { useContext } from "react";
import { AuthContext } from "./Authantication";
import { Navigate, useLocation } from "react-router-dom";


const PrivatRoute = ({children}) => {
    const {user} = useContext(AuthContext);
    const location = useLocation();
    if (user) {
        return children;
    }

    return <Navigate state={location.state} to="/login"></Navigate>
};

export default PrivatRoute;