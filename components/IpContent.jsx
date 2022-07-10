import { IpContext } from "../context/ipContext";
import { useContext } from "react";
function IpContent() {
    const { ipData } = useContext(IpContext);
    if(!ipData)return;
    const {ip ,location,isp} = ipData;
    if (!location) return;
    const {country,city,timezone,postalCode} = location;
    return (
        <div id="ip-content" className="shadow-lg flex flex-col h-[8]  w-[79%] absolute bg-white top-44 sm:top-48 z-[500] sm:w-[70%] self-center rounded-lg  px-5 sm:flex-row sm:space-x-4 sm:h-32" >
            <div className="ipcontent sm:w-[25%]  flex mt-7 mb-2 sm:my-7 flex-col mx-auto sm:border-r  ">
                <span className=" text-[14px] text-center text-darkGray tracking-widest font-[700] sm:text-left"> IP ADDRESS</span>
                <span className="text-veryDarkGray font-extrabold text-lg text-center sm:text-left">{ip}</span>
               
            </div>
            <div className="ipcontent  flex my-2 sm:my-7 flex-col mx-auto sm:border-r sm:w-[25%]">
            <span className=" text-[14px] text-center text-darkGray tracking-widest font-[700] sm:text-left"> LOCATION</span>
                <span className="text-veryDarkGray text-center font-extrabold text-lg sm:text-left">{city} , {country} <br /> {postalCode}</span>
            </div>
            <div className="ipcontent  flex my-2 sm:my-7 mx-auto flex-col sm:border-r sm:w-[25%]" >
            <span className=" text-[14px] text-center text-darkGray tracking-widest font-[700] sm:w-[25%] sm:text-left">TIMEZONE</span>
                <span className="text-veryDarkGray text-center font-extrabold text-lg sm:text-left">{timezone}</span>
            </div>
            <div className="ipcontent  flex mb-7 mt-2  sm:my-7 mx-auto flex-col sm:w-[25%]">
            <span className=" text-[14px] text-center text-darkGray tracking-widest font-[700] sm:text-left">ISP</span>
                <span className="text-veryDarkGray font-extrabold text-lg">{ isp}</span>
            </div>
            
        </div>
    );
}

export default IpContent;