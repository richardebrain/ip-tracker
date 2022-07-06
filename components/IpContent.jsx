import { IpContext } from "../context/ipContext";
import { useContext } from "react";
function IpContent() {
    const { ipData } = useContext(IpContext);
    if(!ipData)return;
    const {ip ,location,isp} = ipData;
    if (!location) return;
    const {country,city,timezone,postalCode} = location;
    return (
        <div id="ip-content" className="shadow-lg flex space-x-4 h-32 absolute bg-white top-48 z-[500] w-[70%] self-center rounded-lg  px-5 ">
            <div className="ipcontent w-[20%] border-r flex my-7 flex-col">
                <span className=" text-[14px] text-darkGray tracking-widest font-[700]"> IP ADDRESS</span>
                <span className="text-veryDarkGray font-extrabold text-lg">{ip}</span>
               
            </div>
            <div className="ipcontent w-[25%] border-r flex my-7 flex-col">
            <span className=" text-[14px] text-darkGray tracking-widest font-[700]"> LOCATION</span>
                <span className="text-veryDarkGray font-extrabold text-lg">{city} , {country} <br /> {postalCode}</span>
            </div>
            <div className="ipcontent w-[20%] border-r flex my-7 flex-col" >
            <span className=" text-[14px] text-darkGray tracking-widest font-[700]">TIMEZONE</span>
                <span className="text-veryDarkGray font-extrabold text-lg">{timezone}</span>
            </div>
            <div className="ipcontent w-[20%]  flex my-7 flex-col">
            <span className=" text-[14px] text-darkGray tracking-widest font-[700]">ISP</span>
                <span className="text-veryDarkGray font-extrabold text-lg">{ isp}</span>
            </div>
            
        </div>
    );
}

export default IpContent;