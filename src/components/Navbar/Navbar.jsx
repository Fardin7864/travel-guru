import { Link, NavLink, useLocation } from "react-router-dom";
import {BsSearch} from "react-icons/bs"
import { useContext } from "react";
import { AuthContext } from "../../providers/Authantication";
const Navbar = () => {
    const location = useLocation();
    const {user, logOut, userName} = useContext(AuthContext);
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
      {
        user ? <li className="lg:ml-6">
        <h4 onClick={logOut} className="py-3 px-7 text-center rounded-md text-base font-medium">{userName? userName : user.email}</h4>
      </li> : <li className="lg:ml-6">
        <Link to='/login' className="py-3 px-7 text-center bg-[#F9A51A] rounded-md text-base font-medium text-[#000]">Log In</Link>
      </li>
      }
      
    </>
  );
  
  const navClass =  location.pathname === "/" || location.pathname === "/booking"  ? "absolute navbar justify-between bg-base-100 px-10 text-white bg-transparent" : "navbar justify-between bg-base-100 px-10"
  
  const logoColor = location.pathname === "/" || location.pathname === "/booking"  ? "white" : "black"

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
        <Link to='/' className="btn btn-ghost normal-case text-xl ">
        <div className="w-28 h-14">
            {/* <img src={logo} alt=""/> */}
            <svg xmlns="http://www.w3.org/2000/svg" width="121" height="56" viewBox="0 0 121 56" fill="none">
                  <g clipPath="url(#clip0_19_585)">
                    <path d="M47.6711 47.5357C47.2648 48.2128 46.0459 48.89 44.6239 48.89C41.3059 48.89 38.665 46.3168 38.665 42.1862C38.665 38.0556 41.5091 35.2116 44.4885 35.2116C47.2648 35.2116 47.8742 36.4982 48.2128 36.8368L48.6191 35.4825H51.4631V41.1028H48.0774C48.0097 39.5453 47.0617 38.6651 45.9105 38.6651C44.3531 38.6651 43.3373 40.3579 43.3373 42.2539C43.3373 44.2177 44.2854 45.7751 45.9105 45.7751C46.9939 45.7751 47.4679 45.3688 47.7388 44.8271V44.0145H46.5877V41.9831H52.8174V44.0145H52.0725V48.7545H48.2805L47.6711 47.5357Z" fill={logoColor}/>
                    <path d="M53.3591 39.2745H57.9637V43.8791C57.9637 45.5042 58.2346 46.2491 58.9794 46.2491C59.6566 46.2491 60.1983 45.6397 60.1983 44.8271V41.7799H58.9117V39.2745H63.8549V46.2491H64.8029V48.7545H61.214L60.6723 47.5357C60.266 48.0097 59.5889 49.0254 57.9637 49.0254C55.1197 49.0254 54.1717 47.5357 54.1717 44.4208V41.7799H53.3591V39.2745Z" fill={logoColor}/>
                    <path d="M70.8972 48.7545H65.5477V46.2491H66.3603V41.7122H65.5477V39.2745H69.1366L69.6783 40.4933C70.1523 39.6131 70.694 38.9359 72.59 38.9359V42.1862C70.8972 42.1862 69.8815 42.5925 69.8815 44.2854V46.2491H70.8295V48.7545H70.8972Z" fill={logoColor}/>
                    <path d="M73.1995 39.2745H77.8041V43.8791C77.8041 45.5042 78.0749 46.2491 78.8198 46.2491C79.4969 46.2491 80.0386 45.6397 80.0386 44.8271V41.7799H78.8198V39.2745H83.7629V46.2491H84.711V48.7545H81.1221L80.5804 47.5357C80.1741 48.0097 79.4969 49.0254 77.8718 49.0254C75.0278 49.0254 74.0798 47.5357 74.0798 44.4208V41.7799H73.2672V39.2745H73.1995Z" fill={logoColor}/>
                    <path d="M38.1233 17.4026C36.4981 17.4703 35.6178 17.5381 35.4147 17.5381C35.0761 17.5381 34.6698 17.3349 34.3313 16.8609C33.9927 16.3869 33.7896 15.9129 33.7896 15.4389C33.7896 14.694 35.9564 14.3555 40.2902 14.3555C42.5247 14.3555 44.1499 14.5586 45.1656 15.0326C46.1813 15.5066 46.723 16.0483 46.723 16.7255C46.723 16.9286 46.5876 17.1318 46.3845 17.2672C46.1813 17.4703 45.8428 17.5381 45.5042 17.5381C45.1656 17.5381 44.4885 17.5381 43.6082 17.4703C42.6602 17.4026 41.8476 17.4026 41.1027 17.4026C41.1704 17.6058 41.1704 17.8089 41.1704 18.0121C41.1704 18.2829 41.1027 18.7569 40.8996 19.4341C40.6964 20.1112 40.4933 21.1269 40.1547 22.4135C39.8162 23.7001 39.4776 25.1898 39.139 27.0181C38.7327 28.8464 38.5296 29.8621 38.3264 30.2007C38.1233 30.5393 38.0556 30.7424 37.9201 30.7424C37.5816 30.7424 37.1753 30.4715 36.7013 29.8621C36.2273 29.2527 35.9564 28.7787 35.9564 28.4401C35.9564 28.1015 36.295 26.5441 36.9044 23.9032C37.5816 21.2624 37.9879 19.0955 38.1233 17.4026Z" fill={logoColor}/>
                    <path d="M46.723 22.9553L46.5876 20.3821C46.5876 19.5018 46.8585 19.0955 47.4002 19.0955C47.6711 19.0955 48.0096 19.231 48.2805 19.4341C48.5513 19.6373 48.8222 20.0436 48.9576 20.5176C49.4993 20.0436 50.0411 19.705 50.6505 19.4341C51.2599 19.1633 51.8016 19.0278 52.2756 19.0278C53.3591 19.0278 53.9685 19.2987 53.9685 19.8404C53.9685 20.1113 53.9008 20.3144 53.8331 20.4498C53.7654 20.5853 53.6299 20.653 53.6299 20.7207C53.5622 20.7884 53.4945 20.8561 53.3591 20.9916C53.2237 21.0593 53.1559 21.1947 53.0882 21.1947C52.7496 21.3978 52.4788 21.601 52.3434 21.6687C51.6662 22.075 51.0568 22.6167 50.5828 23.2261C50.1088 23.8356 49.7025 24.6481 49.4993 25.7316C49.0931 27.4922 48.6868 28.7787 48.2805 29.659C47.8742 30.5393 47.4679 30.9456 46.9939 30.9456C46.5199 30.9456 46.1813 30.7425 45.9105 30.2685C45.6396 29.7945 45.5719 29.3882 45.5719 28.9819C45.5719 28.5756 45.7073 27.9662 46.0459 27.1536C46.3168 26.341 46.5199 25.6639 46.6553 25.0544C46.723 24.3773 46.723 23.7001 46.723 22.9553Z" fill={logoColor}/>
                    <path d="M63.4486 24.3773C63.7194 24.6481 63.8549 24.8513 63.8549 25.0544C63.8549 25.2576 63.7871 25.6639 63.584 26.2733C63.3809 26.8827 63.3131 27.3567 63.2454 27.6953C63.1777 28.0339 63.11 28.3047 63.11 28.5079C63.0423 28.711 63.0423 28.8465 63.0423 28.9819C63.0423 29.1173 62.9746 29.2527 62.9746 29.3882C62.9746 29.5236 62.9069 29.659 62.9069 29.7945C62.9069 29.8622 62.8391 29.9976 62.8391 30.133C62.7714 30.2685 62.7714 30.3362 62.7037 30.4039C62.636 30.4716 62.636 30.5393 62.5683 30.607C62.5006 30.7425 62.2974 30.8102 62.0943 30.8102C61.8911 30.8102 61.6203 30.607 61.2817 30.2007C60.9431 29.7945 60.74 29.2527 60.6046 28.6433C59.1826 30.133 57.9637 30.8102 57.0157 30.8102C56.3385 30.8102 55.6614 30.4716 54.9165 29.7267C54.1717 28.9819 53.7654 28.3047 53.7654 27.5599C53.7654 26.815 54.104 25.7993 54.7134 24.445C55.3905 23.0907 56.2708 21.8718 57.422 20.7207C58.5731 19.5695 59.6566 19.0278 60.8077 19.0278C61.4171 19.0278 62.162 19.4341 63.0423 20.1113C63.8549 20.8561 64.3289 21.5333 64.3289 22.1427C64.1257 22.8876 63.9226 23.5647 63.4486 24.3773ZM56.8125 27.9662C57.422 27.9662 58.2345 27.5599 59.2503 26.7473C60.266 25.9347 60.8754 24.8513 61.1463 23.6324C61.1463 23.4293 61.2817 23.3616 61.5526 23.2939C61.4849 22.4136 61.3494 22.0073 61.1463 22.0073C60.5368 22.0073 59.8597 22.4136 59.1148 23.2261C58.37 24.0387 57.7605 24.8513 57.2865 25.7316C56.8125 26.6119 56.5417 27.289 56.5417 27.6953C56.5417 27.8307 56.5417 27.8984 56.6094 27.9662C56.5417 27.9662 56.6771 27.9662 56.8125 27.9662Z" fill={logoColor}/>
                    <path d="M73.3349 19.0955C73.7412 19.0955 74.0797 19.2309 74.486 19.5017C74.8246 19.7726 75.0277 20.0435 75.0277 20.382C75.0277 20.9238 74.5537 22.2103 73.6735 24.1741C72.7932 26.1378 71.9129 27.7629 71.168 28.9818C70.4232 30.2007 69.8137 30.8101 69.4074 30.8101C69.2043 30.8101 68.8657 30.6747 68.3917 30.3361C67.9177 29.9975 67.7146 29.7267 67.5791 29.4558C67.2406 28.5755 66.7666 26.9504 66.2248 24.5803C65.6831 22.2103 65.48 20.7206 65.48 20.0435C65.48 19.3663 65.6831 19.0955 66.0894 19.0955C66.6311 19.0955 67.1051 19.2986 67.7146 19.7049C68.5949 20.382 69.1366 21.33 69.272 22.4812C69.3397 23.0229 69.3397 23.7001 69.4074 24.5126C69.4074 25.3252 69.4751 26.0024 69.6106 26.5441C69.9492 25.8669 70.4232 24.7835 70.9649 23.4292C71.5066 22.0749 71.9806 20.9915 72.3192 20.1789C72.6577 19.5017 73.064 19.0955 73.3349 19.0955Z" fill={logoColor}/>
                    <path d="M83.6953 25.3929C82.6796 26.0024 81.6638 26.2732 80.5804 26.2732C79.497 26.2732 78.6167 26.2055 77.9395 26.0701C77.8041 26.4764 77.7364 26.8826 77.7364 27.2889C77.7364 27.6952 77.8041 27.9661 77.9395 28.1692C78.075 28.3724 78.4135 28.4401 78.9553 28.4401C80.1064 28.4401 81.0544 28.3047 81.867 28.1015C82.6796 27.8984 83.0858 27.7629 83.1536 27.7629C83.763 27.7629 84.1016 27.9661 84.1016 28.3724C84.1016 28.9818 83.6276 29.5235 82.6118 30.0652C81.6638 30.6069 80.5127 30.8778 79.2261 30.8778C77.9395 30.8778 76.9238 30.4715 76.1112 29.6589C75.3664 28.8464 74.9601 27.8984 74.9601 26.8149C74.9601 25.7315 75.2987 24.5803 75.9081 23.3615C76.5852 22.1426 77.3301 21.1269 78.3458 20.3143C79.2938 19.5017 80.3095 19.0955 81.2576 19.0955C82.2056 19.0955 83.0858 19.5695 83.9661 20.5175C84.7787 21.4655 85.185 22.4135 85.185 23.3615C85.185 24.1063 84.711 24.7835 83.6953 25.3929ZM82.0701 22.3458C81.7316 22.0749 81.4607 21.9395 81.1898 21.9395C80.919 21.9395 80.5804 22.1426 80.1064 22.5489C79.6324 22.9552 79.2261 23.4969 78.8198 24.1063C78.9553 24.1063 79.1584 24.1063 79.4293 24.1063C81.5284 24.1063 82.5441 23.7678 82.5441 23.0229C82.5441 22.8198 82.4087 22.6166 82.0701 22.3458Z" fill={logoColor}/>
                    <path d="M90.7376 13.7461C91.347 14.4232 91.6179 15.0326 91.6179 15.6421C91.6179 16.2515 91.5501 17.3349 91.347 18.8924C91.1438 20.4498 90.9407 21.6687 90.8053 22.6167C89.5187 28.1016 88.6384 30.8779 88.1644 30.8779C87.8258 30.8779 87.4195 30.607 86.9455 30.0653C86.4715 29.5236 86.2007 29.0496 86.2007 28.711C86.2007 28.711 86.4038 27.8984 86.8101 26.341C87.2164 24.7836 87.6227 22.8198 88.029 20.3821C88.4353 17.9444 88.6384 15.6421 88.6384 13.4075C88.6384 12.9335 88.8415 12.7303 89.3155 12.7303C89.7218 12.7303 90.1958 13.0689 90.7376 13.7461Z" fill={logoColor}/>
                    <path d="M24.7159 54.2394C24.7159 55.2552 23.9033 56 22.9553 56C21.9396 56 21.1947 55.1874 21.1947 54.2394C21.1947 53.2914 22.0073 52.4789 22.9553 52.4789C23.9033 52.4111 24.7159 53.2237 24.7159 54.2394Z" fill={logoColor}/>
                    <path d="M7.44857 56C8.42091 56 9.20915 55.2117 9.20915 54.2394C9.20915 53.2671 8.42091 52.4788 7.44857 52.4788C6.47623 52.4788 5.68799 53.2671 5.68799 54.2394C5.68799 55.2117 6.47623 56 7.44857 56Z" fill={logoColor}/>
                    <path d="M21.3978 1.69287H9.07373V13.5429H21.3978V1.69287Z" stroke={logoColor} strokeWidth="3.3659" strokeMiterlimit="10"/>
                    <path d="M19.3664 3.04716H10.9697C10.6312 3.04716 10.2926 2.7763 10.2926 2.37001V0.677146C10.2926 0.338573 10.5635 0 10.9697 0H19.3664C19.7049 0 20.0435 0.270858 20.0435 0.677146V2.37001C20.0435 2.7763 19.7727 3.04716 19.3664 3.04716Z" fill={logoColor}/>
                    <path d="M9.88635 52.4788H5.07861V54.104H9.88635V52.4788Z" fill={logoColor}/>
                    <path d="M25.3253 52.4788H20.5176V54.104H25.3253V52.4788Z" fill={logoColor}/>
                    <path d="M27.0859 12.4595H3.31802C1.48972 12.4595 0 13.9492 0 15.7775V49.1608C0 50.9891 1.48972 52.4788 3.31802 52.4788H27.0859C28.9141 52.4788 30.4039 50.9891 30.4039 49.1608V15.7775C30.4039 13.9492 28.9141 12.4595 27.0859 12.4595ZM9.2769 43.1342C9.2769 43.8791 8.66747 44.4208 7.99033 44.4208C7.24547 44.4208 6.70375 43.8114 6.70375 43.1342V23.023C6.70375 22.2781 7.31318 21.7364 7.99033 21.7364C8.73519 21.7364 9.2769 22.3458 9.2769 23.023V43.1342ZM16.5224 43.1342C16.5224 43.8791 15.9129 44.4208 15.2358 44.4208C14.4909 44.4208 13.9492 43.8114 13.9492 43.1342V23.023C13.9492 22.2781 14.5586 21.7364 15.2358 21.7364C15.9807 21.7364 16.5224 22.3458 16.5224 23.023V43.1342ZM23.7001 43.1342C23.7001 43.8791 23.0907 44.4208 22.4135 44.4208C21.7364 44.4208 21.127 43.8114 21.127 43.1342V23.023C21.127 22.2781 21.7364 21.7364 22.4135 21.7364C23.0907 21.7364 23.7001 22.3458 23.7001 23.023V43.1342Z" fill={logoColor}/>
                    <path d="M93.988 42.5925C126.559 42.5925 121.683 13.6106 111.729 6.70375C104.687 1.76058 89.5188 2.70858 79.9033 7.99033" stroke={logoColor} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="10.29 10.29"/>
                    <path d="M81.5961 2.91174L80.3773 7.65177L85.1173 8.87063L82.6118 10.3604L77.8718 9.14149L79.0907 4.46918L81.5961 2.91174Z" fill={logoColor}/>
                    <path d="M97.5091 42.7956C97.5091 44.9625 95.7486 46.6554 93.6494 46.6554C91.4825 46.6554 89.7897 44.8948 89.7897 42.7956C89.7897 40.6288 91.5503 38.9359 93.6494 38.9359C95.7486 38.8682 97.5091 40.6288 97.5091 42.7956Z" fill={logoColor}/>
                  </g>
                  <defs>
    <clipPath id="clip0_19_585">
      <rect width="120.261" height="56" fill={logoColor}/>
    </clipPath>
  </defs>
            </svg>
        </div>
        </Link>
      </div>
      {
        location.pathname === "/" || location.pathname === "/booking"  ? <div className="navbar-center flex items-center">
        <BsSearch className="relative -right-9"></BsSearch>    <input type="text" placeholder="Search your Destination..." className="input input-bordered lg:w-96 h-11 pl-12 focus:outline-none md:w-auto bg-[#ffffff33] border border-white" />
      </div> : ""
      }
      
      <div className=" hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLink}</ul>
      </div>
    </div>
  );
};

export default Navbar;
