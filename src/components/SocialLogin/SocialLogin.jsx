import { useContext } from "react";
import { AuthContext } from "../../providers/Authantication";
import {FcGoogle} from "react-icons/fc"
import { BsFacebook } from "react-icons/bs";

const SocialLogin = () => {
    const {google, facebook, socialLogIn} = useContext(AuthContext);

    const handleSocialLogin= (provider) => { 
        socialLogIn(provider)
        .then()
        .catch(err =>{
            if (err.message === "Firebase: Error (auth/internal-error).") {
                alert(" Please Check Your Network! ")
            }
        }
        )
     }


    return (
        <div className="flex flex-col gap-3">
            <div className=" flex items-center px-3 gap-2"><span className="w-6/12 border border-gray-600 "></span><p className="font-medium">Or</p><span className="w-6/12 border border-gray-600 "></span></div>
            <button onClick={() => handleSocialLogin(google)} className="text-base font-medium rounded-full border border-[#C7C7C7] flex justify-center items-center gap-8 py-2 px-4 hover:shadow-2xl hover:text-blue-600 active:opacity-60"><FcGoogle className="text-xl"></FcGoogle>Continue With Google</button>
            <button onClick={() => handleSocialLogin(facebook)} className="text-base font-medium rounded-full border border-[#C7C7C7] flex justify-center items-center gap-8 py-2 px-4 hover:shadow-2xl hover:text-blue-600 active:opacity-60"><BsFacebook color="blue" className="text-xl"></BsFacebook>Continue With Google</button>
        </div>
    );
};

export default SocialLogin;