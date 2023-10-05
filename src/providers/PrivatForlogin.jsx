import { useContext } from "react";
import { AuthContext } from "./Authantication";
import { useNavigate } from "react-router-dom";

const PrivatForlogin = ({children}) => {
    const navigate = useNavigate();
    const {user} = useContext(AuthContext);
    if (user) {
        alert(`Your are already Loged In as ${user.email}`)
        navigate('/')
        return ;
    }
    return (
        children
    );
};

export default PrivatForlogin;