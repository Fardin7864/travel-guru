import { Link, useRouteError } from "react-router-dom";

const Error = () => {
    const error = useRouteError();
console.log(error)
    return (
        <div className="flex justify-center items-center mt-12">
            <div className="w-1/3 text-center">
            <h3 className="text-3xl font-bold text-black">Ooops!!</h3>
            <p className="text-xl">Sorry this page is <span className=" text-yellow-400">Under Construction!!</span></p>
            <p className="text-xl font-bold">
                <i>{error ?   error.statusText : error.status}</i>
            </p>
            <div className="flex items-center justify-center">
          <Link to={-1} className="py-3 w-40 px-7 flex items-center justify-center gap-4 mt-4 text-center bg-[#F9A51A] rounded-md text-base font-medium text-[#000] hover:opacity-60 active:shadow-2xl">Go Back</Link>
            </div>
            </div>
        </div>
    );
};

export default Error;