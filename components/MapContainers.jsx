import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useContext, useEffect, useState } from "react";
import L from "leaflet";
import { IpContext } from "../context/ipContext";

const MapContainers = () => {
  const { ipData, setIpData } = useContext(IpContext);

  console.log(ipData);
if(!ipData)return;
const {ip ,location,isp} = ipData;
if (!location) return;
const {lat,lng,city,timezone,postalCode} = location;

  // const {
  //   location: { lat, lng },
  //   timezone,
  //   isp,
  // } = ipData;

  const icon = L.icon({
    iconUrl: "./icon-location.svg",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });

  return (
    <MapContainer
      center={[lat,lng]}
      zoom={13}
      scrollWheelZoom={false}
      className="h-[1000px] mt-0 "
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[lat,lng]} icon={icon}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapContainers;
