import Navbar from "../../components/Navbar/Navbar";
import SigninCom from "../../components/SignInCom/SignInCom";
import SocialLogin from "../../components/SocialLogin/SocialLogin";

const Signin = () => {
    return (
        <>
        <Navbar></Navbar>
       <div className="flex flex-col justify-center items-center">
       <div className="w-2/6 ">
       <div>
            <SigninCom></SigninCom>
        </div>
        <div>
            <SocialLogin></SocialLogin>
        </div>
       </div>
       </div>
    </>
    );
};

export default Signin;