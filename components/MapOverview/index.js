import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import styled from "styled-components";
import * as L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import Link from "next/link";
import useLocalStorageState from "use-local-storage-state";
import UserLocationMarker from "./UserLocationMarker";

export default function MapOverview({ outivities }) {
  const [position, setPosition] = useLocalStorageState("position", {
    lat: "",
    lng: "",
  });

  function handleSetPosition(userCoordinates) {
    setPosition(userCoordinates);
  }

  return (
    <StyledMapContainer
      center={position ? [position.lat, position.lng] : ["", ""]}
      zoom={5}
      scrollWheelZoom
    >
      <TileLayer url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png" />

      <UserLocationMarker
        onSetPosition={handleSetPosition}
        position={position}
      />

      {outivities.map((outivity) => (
        <Marker
          key={outivity._id}
          icon={greyIcon}
          position={[outivity.lat, outivity.lng]}
        >
          <Popup>
            <StyledLink href={`//${outivity._id}`}>
              <h2>{outivity.title}</h2>
            </StyledLink>
            <StyledInfo>in {outivity.area}</StyledInfo>
          </Popup>
        </Marker>
      ))}
    </StyledMapContainer>
  );
}

const StyledMapContainer = styled(MapContainer)`
  min-width: 45vh;
  min-height: 65vh;
  z-index: 1;
`;

const greyIcon = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-grey.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const StyledLink = styled(Link)`
  text-underline-offset: 7px;
  text-decoration-color: var(--third-color);
  text-decoration-thickness: 2px;
  font-size: 10px;
  h2 {
    color: var(--third-color);
    margin: 0;
    &:hover {
      cursor: pointer;
    }
  }
`;

const StyledInfo = styled.p`
  font-size: 11px;
`;
