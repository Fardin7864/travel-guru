import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Room from "../../components/Room/Room";
import Mapx from "../../components/Map/Map";
import Map from "../../components/Map/Map";
import PigeonMap from "../../components/Map/Map";

const RoomLists = () => {
    const [rooms, setRooms] = useState();
    useEffect(() => { 
        const loader = async () =>{
            await fetch('/room.json')
             .then(res => res.json())
             .then(data => setRooms(data))
        }
        loader();
     },[])
    return (
        <>
        <Navbar></Navbar>
        <hr /> 
        <div className=" flex justify-around p-5 gap-6">
        <div className="">
            <h4 className="text-xl font-bold pl-5 text-black">Stay in Cox's Bazar!</h4>
        {
            rooms?.slice(0,3)?.map(room => 
                <Room
                key={room._id}
                room = {room}
                ></Room>        
                )
        } 
        </div>
        <div className=" w-2/5">
       <PigeonMap></PigeonMap>
        </div>
        </div>
        </>
    );
};

export default RoomLists;