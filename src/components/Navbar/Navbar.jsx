import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/images/icons/logo.png"
import {BsSearch} from "react-icons/bs"
const Navbar = () => {
    const location = useLocation();
    console.log(location)
  const navLink = (
    <>
      <li className="lg:ml-6">
        <NavLink to='/news'>News</NavLink>
      </li>
      <li className="lg:ml-6">
        <NavLink to='/destination'>Destination</NavLink>
      </li>
      <li className="lg:ml-6">
        <NavLink to='/blog'>Blog</NavLink>
      </li>
      <li className="lg:ml-6">
        <NavLink to='contact'>Contact</NavLink>
      </li>
      <li className="lg:ml-6">
        <button className="py-3 px-7 text-center bg-[#F9A51A] rounded-md text-base font-medium text-[#000]">Log In</button>
      </li>
    </>
  );
  
  const navClass =  location.pathname === "/" ? "absolute navbar justify-between bg-base-100 px-10 text-white" : "navbar justify-between bg-base-100 px-10"
  
  return (
    <div className={`${navClass}`}>
      <div className="">
        <div className="dropdown ">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLink}
          </ul>
        </div>
        <Link to='/' className="btn btn-ghost normal-case text-xl">
        <div className="w-28 h-14">
            <img src={logo} alt=""/>
        </div></Link>
      </div>
      <div className="navbar-center flex items-center">
        <BsSearch className="relative -right-9"></BsSearch>    <input type="text" placeholder="Search your Destination..." className="input input-bordered lg:w-96 h-11 pl-12 focus:outline-none md:w-auto" />
      </div>
      <div className=" hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLink}</ul>
      </div>
    </div>
  );
};

export default Navbar;
