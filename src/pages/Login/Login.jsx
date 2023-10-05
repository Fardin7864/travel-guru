import Navbar from "../../components/Navbar/Navbar";
import SocialLogin from "../../components/SocialLogin/SocialLogin";
import LoginCom from "../../components/LoginCom/LoginCom";

const Login = () => {
    return (
        <>
            <Navbar></Navbar>
           <div className="flex flex-col justify-center items-center">
           <div className="w-2/6 ">
           <div>
                <LoginCom></LoginCom>
            </div>
            <div>
                <SocialLogin></SocialLogin>
            </div>
           </div>
           </div>
        </>
    );
};

export default Login;