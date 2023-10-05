import { createBrowserRouter } from "react-router-dom";
import Error from "../components/ErrorPage/Error";
import Root from "../Root";
import Home from "../pages/Home/Home";
import Booking from "../pages/Booking/Booking";
import RoomLists from "../pages/RoomLists/RoomLists";
import Login from "../pages/Login/Login";
import Signin from "../pages/SignIn/Signin";
import PrivatRoute from "../providers/PrivatRoute";
import PrivatForlogin from "../providers/PrivatForlogin";

const MainRout = createBrowserRouter([
    {
        path: '/',
        element:<Root></Root>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element:<Home></Home>
            },
            {
                path: '/booking',
                element: <Booking></Booking>
            },
            {
                path: '/room',
                element: <PrivatRoute><RoomLists></RoomLists></PrivatRoute>
            },
            {
                path: '/login',
                element: <PrivatForlogin><Login></Login></PrivatForlogin>
            },
            {
                path: '/signup',
                element: <Signin></Signin>
            }
        ]
    }
])


export default MainRout;