import { useContext } from "react";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/Authantication";

const LoginCom = () => {
        //controle formData 
        const [formData, setFromdata] = useState({
            email: '',
            password: ''
        })
        // error controler
        const [error, setError] = useState(null);
        const location = useLocation();
        const navigate = useNavigate();
    
        // set inpusts
        const handleInput = (e) => { 
            const {name, value} = e.target;
            setFromdata({
                ...formData, [name]: value
            })
         }
    
         console.log(location)
    
        // get data from context
        const {loginWithEmailAndPassword} = useContext(AuthContext);
    
        const regex = /^(?=.*[A-Z])(?=.*\d).+/;
        // On submit form 
        const handleSubmit = (e) => { 
            setError('')
            e.preventDefault();
            const isvalidPass = regex.test(formData.password)
            if (formData.password < 6 || !isvalidPass) {
                setError("Invalid email and password!")
                return
            }
            else{
                loginWithEmailAndPassword(formData.email, formData.password)
                .then(() => { 
                    navigate(location?.state ? location.state : '/')
                 })
                .catch(err => {

                    if (err.message === "Firebase: Error (auth/email-already-in-use).") {
                        setError("This Email Address Already Used!")
                    }else if (err.message === "Firebase: Error (auth/network-request-failed)."){
                        setError("Please check your network!!")
                    }
                })
            }
          }
    return (
        <div className="border py-4 px-10 rounded-md">
        <form onSubmit={handleSubmit}>
            <div className="my-3">
            <label htmlFor="email">Email</label>
                <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInput} 
                required
                className=" mt-3 w-full py-3 px-4 border focus:outline-[#C5C5C5] focus-within:border-none border-[#C5C5C5]"
                />
            </div>
            <div>
            <label htmlFor="password">Password</label>
                <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleInput} 
                required
                className=" mt-3 w-full py-3 px-4 border focus:outline-[#C5C5C5] focus-within:border-none border-[#C5C5C5]"
                />
            </div>
            <div className="my-3">
                <button className="py-3 w-full px-7 text-center bg-[#F9A51A] rounded-md text-base font-medium text-[#000]">Log In</button>
            </div>
            {error &&
                    <p className="text-red-600 text-xs">{error}</p>
            }
            <div className="my-3">
                <p>Don't have an account? <Link to='/signup' className=" text-[#F9A51A]">Sign Up</Link></p>
            </div>
        </form>
    </div>
    );
};

export default LoginCom;