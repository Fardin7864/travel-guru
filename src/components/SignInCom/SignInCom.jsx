import { useContext } from "react";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/Authantication";

const SigninCom = () => {
    
    //controle formData 
    const [formData, setFromdata] = useState({
        name: '',
        email: '',
        password: '',
        check: false
    })
    // error controler
    const [error, setError] = useState(null);

    // set inpusts
    const handleInput = (e) => { 
        const {name, value} = e.target;
        setFromdata({
            ...formData, [name]: value
        })
     }

    //  Checke box
    const handleChacked = (e) => {
        const {name , checked} = e.target;
        setFromdata({
            ...formData, 
            [name]: checked,
        })
    }

    // get data from context
    const {createUser, createName} = useContext(AuthContext);

    // naviget
    const navigate = useNavigate();
    const location = useLocation();

    const regex = /^(?=.*[A-Z])(?=.*\d).+/;
    // On submit form 
    const handleSubmit = (e) => { 
        setError('')
        e.preventDefault();
        const isvalidPass = regex.test(formData.password)
        if (formData.password < 6 || !isvalidPass) {
            setError("Password should be 6 charecter, 1 uper case and 1 numbe!")
            return
        }
        else{
            createName(formData.name)
            createUser(formData.email, formData.password)
            .then(() => { navigate(location?.state ? location.state : '/') })
            .catch(err => {
                if (err.message === "Firebase: Error (auth/email-already-in-use).") {
                    setError("This Email Address Already Used!")
                }else if (err.message === "Firebase: Error (auth/network-request-failed).") {
                    alert("Please Check Your Network!")
                }                
            })
        }
      }
      
    return (
        <div className="border py-4 px-10 rounded-md">
            <form onSubmit={handleSubmit}>
                <div className="">
                    <label htmlFor="name">Name</label>
                    <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleInput} 
                    required
                    className=" mt-3 w-full py-3 px-4 border focus:outline-[#C5C5C5] focus-within:border-none border-[#C5C5C5]"
                    />
                </div>
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
                <div className="flex items-center gap-4 pl-3">
                    <input
                    type="checkbox"
                    name="check"
                    id="check"
                    placeholder="check"
                    value={formData.check}
                    checked={formData.check}
                    onChange={handleChacked}
                    required 
                    className=" mt-3"
                    />
                    <p className="mt-3 text-sm">Accept Our Tarm's and Conditions.</p>
                </div>
                <div className="my-3">
                    <button className="py-3 w-full px-7 text-center bg-[#F9A51A] rounded-md text-base font-medium text-[#000]">Submit</button>
                </div>
                {error &&
                        <p className="text-red-600 text-xs">{error}</p>
                }
                <div className="my-3">
                    <p>Aleady have an account? <Link to='/login' className=" text-[#F9A51A]">Log In</Link></p>
                </div>
            </form>
        </div>
    );
};

export default SigninCom;