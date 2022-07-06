import CustomInput from "./CustomInput";
import { IpContext } from "../context/ipContext";
import { useContext } from "react";

const Header = () => {

  const { getIp,ipData,setIpData } = useContext(IpContext);
  const handleChange = (e) => {
    setIpData(e.target.value);
   
  };
  const handleIp  = ()=>{

    getIp(ipData);
  }
  return (
    <header className="h-[250px] flex flex-col space-y-10 items-center pt-10" id="image">
      {/* <Image src="/pattern.png" height={300} width={300} alt="pattern" className=" bg-no-repeat"></Image> */}

      <h1 className='text-white font-bold tracking-wide text-xl'>IP Address Tracker</h1>
      <div className="flex items-center">
      <CustomInput
        type="text"
        name="ip"
        placeholder="Search for any IP address or domain"
        onChange={handleChange}
        label
        className='form-input w-72 rounded-l-lg text-black placeholder-gray-500 outline-none placeholder:text-sm sm:w-96'
      />
      <span className="bg-black h-full w-11 rounded-r-lg px-4  -ml-2 flex items-center cursor-pointer hover:bg-slate-700 " onClick={handleIp}>
      <svg xmlns="http://www.w3.org/2000/svg" width="11" height="14"><path fill="none" stroke="#FFF" strokeWidth="3" d="M2 1l6 6-6 6"/></svg>
      </span>

      </div>
      

      <style jsx>
        {`
          #image {
            background-image: url("/pattern.png");
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
          }
        `}
      </style>
    </header>
  );
};

export default Header;
