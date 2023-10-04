import { createBrowserRouter } from "react-router-dom";
import Error from "../components/ErrorPage/Error";
import Root from "../Root";
import Home from "../pages/Home/Home";
import Booking from "../pages/Booking/Booking";
import RoomLists from "../pages/RoomLists/RoomLists";

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
                element: <RoomLists></RoomLists>
            }
        ]
    }
])


export default MainRout;