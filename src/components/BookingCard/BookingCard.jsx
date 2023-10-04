import { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";


const BookingCard = () => {
    const [formdata, setFormdata] = useState({
        origin: 'Dhaka',
        destination: 'Coxs Bazar',
    })

    const handleForm = (e) =>{
        const {name,value} = e.target;
        setFormdata({
            ...formdata, [name]: value
        })
    }

    return (
        <div className=" w-[470px] rounded-md bg-[#FFF] pt-7 px-6 pb-7">
            <div>
                <label htmlFor="origin" className="text-[#818181] text-base font-medium">Origin</label>
                <input
                type="text"
                name="origin"
                value={formdata.origin}
                onChange={handleForm}
                className=" rounded-md w-11/12 bg-[#F2F2F2] text-black text-base font-bold mt-2 mb-4 py-5 pl-[22px]"
                />
            </div>
            <div>
                <label htmlFor="destination" className="text-[#818181] text-base font-medium">Destination</label>
                <input
                type="text"
                name="destination"
                value={formdata.destination}
                onChange={handleForm}
                className=" rounded-md w-11/12 bg-[#F2F2F2] text-black text-base font-bold mt-2 mb-4 py-5 pl-[22px]"
                />
            </div>
            {/* calender */}
            <div className=" flex justify-between">
            <div>
                <label htmlFor="origin" className="text-[#818181] text-base font-medium">From</label>
                <input
                type="date"
                name="from"
                className=" rounded-md w-11/12 bg-[#F2F2F2] text-black text-base font-bold mt-2 mb-4 py-5 px-[22px]"
                />
            </div>
            <div>
                <label htmlFor="destination" className="text-[#818181] text-base font-medium">To</label>
                <input
                type="date"
                name="to"
                // value={"Cox’s Bazar"}
                className=" rounded-md w-11/12 bg-[#F2F2F2] text-black text-base font-bold mt-2 mb-4 py-5 px-[22px]"
                />
            </div>
            </div>
            <div>
          <Link to="/room" className="py-3 px-7 flex items-center justify-center gap-4 mt-4 text-center bg-[#F9A51A] rounded-md text-base font-medium text-[#000] hover:opacity-60 active:shadow-2xl">Start Booking</Link>
            </div>
        </div>
    );
};

export default BookingCard;