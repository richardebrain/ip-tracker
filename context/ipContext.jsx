import {  createContext } from "react";
import { useState } from "react";

export const IpContext = createContext();

export const IpWrapper = ({ children }) => {
  const [ipData, setIpData] = useState('8.8.8.8');

  const getIp = async(newIp) => {
    try {
    //  const res =await  fetch(
    //     '/api/ipFetcher',{
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify(!newIp ? ipData : newIp)

    //     })
    const res = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_obaZnNbeu8SgbcpG7H9dz9cQFqdmC&ipAddress=${!newIp ? ipData : newIp}`)
      const data = await res.json();
      setIpData(data);
      
    } catch (err) {
      console.log(err);
    }
  };
  return <IpContext.Provider value={{
    getIp,
    ipData,
    setIpData
  }}>{children}</IpContext.Provider>;
};
