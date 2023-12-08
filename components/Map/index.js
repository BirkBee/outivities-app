import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import styled from "styled-components";
import * as L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import LocationMarker from "./LocationMarker";
import Link from "next/link";

export default function Map({ outivities }) {
  return (
    <StyledMapContainer
      center={[52.516181, 13.376935]}
      zoom={0}
      scrollWheelZoom
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {outivities.map((outivity) => (
        <Marker
          key={outivity.id}
          position={[outivity.lat, outivity.long]}
          // position={[initialOutivities.lat, initialOutivities.long]}
          icon={goldIcon}
          title={outivity.title}
        >
          <Popup>
            <Link href={`//${outivity.id}`}>
              <h2>{outivity.title}</h2>
            </Link>
            <p>in {outivity.area}</p>
          </Popup>
        </Marker>
      ))}
      <LocationMarker />
    </StyledMapContainer>
  );
}

const StyledMapContainer = styled(MapContainer)`
  height: 200px;
  width: 300px;
`;

const goldIcon = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-gold.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});
