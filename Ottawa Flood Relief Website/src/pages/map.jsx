import { MapContainer, TileLayer, Marker, Tooltip, Popup} from "react-leaflet";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import "./Map.css"; 
import { FloodPopUp } from "../components/flood-popup";
import { useState, useEffect } from "react";

export function Map() {

  const [locationsData, setLocationsData] = useState([]);
  
  useEffect(() => {

    async function fetchData(){

      const response = await fetch(
        "http://localhost:5000/api/locations"
      );

      const data = await response.json();

      setLocationsData(data);
    }

    fetchData();
  }, []);
  
  const customIcon = new Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
    iconSize: [40, 40],
    iconAnchor: [20, 40],
    tooltipAnchor: [0, -40],
    className: "green-marker",
  });

  const markers = [
    { geocode: [45.4215, -75.6972], tool_Tip: "Riverside South" },
    { geocode: [45.4765, -75.7013], tool_Tip: "Gatineau" },
    { geocode: [45.4247, -75.6950], tool_Tip: "Downtown Ottawa" },
    { geocode: [45.2800, -75.7600], tool_Tip: "Barrhaven" },
    { geocode: [45.2280, -75.6810], tool_Tip: "Manotick" },
    { geocode: [45.4803, -75.5083], tool_Tip: "Orleans" },
    { geocode: [45.3500, -75.7500], tool_Tip: "Nepean" },
    { geocode: [45.3833, -75.7000], tool_Tip: "Alta Vista" },
    { geocode: [45.3900, -75.6800], tool_Tip: "Elmvale Acres" },
    { geocode: [45.4100, -75.6300], tool_Tip: "Vanier" },
    { geocode: [45.4350, -75.6500], tool_Tip: "Overbrook" },
    { geocode: [45.4500, -75.7000], tool_Tip: "Hintonburg" },
    { geocode: [45.4000, -75.7300], tool_Tip: "Carlington" },
    { geocode: [45.3650, -75.7750], tool_Tip: "Bells Corners" },
    { geocode: [45.3150, -75.8500], tool_Tip: "Kanata" },
    { geocode: [45.3000, -75.9200], tool_Tip: "Stittsville" },
    { geocode: [45.3500, -75.9100], tool_Tip: "Terry Fox" },
    { geocode: [45.4500, -75.4800], tool_Tip: "Beacon Hill" },
    { geocode: [45.4700, -75.4500], tool_Tip: "Blackburn Hamlet" },
    { geocode: [45.4300, -75.5200], tool_Tip: "Cumberland" },
    { geocode: [45.3000, -75.7000], tool_Tip: "Leitrim" },
    { geocode: [45.2500, -75.7500], tool_Tip: "Fallowfield" }
  ];

  return (
    <div className="map-wrapper">
      <MapContainer
        center={[45.4215, -75.6972]}
        zoom={11}
        scrollWheelZoom={true}
        className="map-container"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        {markers.map((marker, index) => {
          const data = locationsData.find(
            (location) => location.name === marker.tool_Tip
          );
          
          return (
          
            <Marker 
            key={index} 
            position={marker.geocode} 
            icon={customIcon}>
              <Tooltip> 
                {marker.tool_Tip} 
              </Tooltip>
              <Popup>
                <FloodPopUp data={data} />
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
}