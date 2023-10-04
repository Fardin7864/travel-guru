import { createBrowserRouter } from "react-router-dom";
import Error from "../components/ErrorPage/Error";
import Root from "../Root";

const MainRout = createBrowserRouter([
    {
        path: '/',
        element:<Root></Root>,
        errorElement: <Error></Error>,
        children: [
            {
                
            }
        ]
    }
])


export default MainRout;