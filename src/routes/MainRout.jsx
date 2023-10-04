import { createBrowserRouter } from "react-router-dom";
import Error from "../components/ErrorPage/Error";
import Root from "../Root";
import Home from "../pages/Home/Home";

const MainRout = createBrowserRouter([
    {
        path: '/',
        element:<Root></Root>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element:<Home></Home>
            }
        ]
    }
])


export default MainRout;