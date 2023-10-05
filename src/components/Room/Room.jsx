import {AiFillStar} from "react-icons/ai"

const Room = ({room}) => {
    const {baths,bedrooms,beds,cost_per_night,description,guests,img,rating,title,total_cost} = room || {};

    return (
        <div className=" flex p-4">
            <div>
                <img src={img} alt="" className="w-56"/>
            </div>
            <div className="px-5 w-80">
                <h3 className="text-lg font-medium text-black">{title}</h3>
                <p className="text-[#6A6A6A] text-base">{guests}guests {bedrooms}bedrooms {beds}beds {baths}baths</p>
                <p className="text-[#6A6A6A] text-base">{description}</p>
                <div className="flex justify-between">
                    <div className=" text-sm font-medium flex justify-center items-center gap-2"><AiFillStar className=" text-yellow-400 text-xl"></AiFillStar>{rating}</div>
                    <div className="flex justify-center items-center">
                       <span className=" text-lg font-medium text-black">${cost_per_night}/</span><p className=" text-lg font-thin">night</p>
                    </div>
                    <div>
                        <p className=" text-[#898989]">${total_cost} total</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Room;