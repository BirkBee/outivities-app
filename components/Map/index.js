import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import styled from "styled-components";
import * as L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import LocationMarker from "./LocationMarker";
import Link from "next/link";

export default function Map({
  currentOutivity = {},
  outivities,
  currentCoordinates,
}) {
  const isCreateOutivity = Object.keys(currentOutivity).length === 0;
  const [lat, long] =
    currentCoordinates && currentCoordinates.length
      ? [currentCoordinates[0].lat, currentCoordinates[0].long]
      : ["", ""];

  return (
    <StyledMapContainer center={[lat, long]} zoom={1} scrollWheelZoom>
      <TileLayer url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png" />

      {isCreateOutivity && (
        <LocationMarker
          key="locationMarker"
          position={
            currentCoordinates && currentCoordinates.length
              ? [currentCoordinates[0].lat, currentCoordinates[0].long]
              : ["", ""]
          }
          isCreateOutivity={isCreateOutivity}
        />
      )}

      {outivities.map((outivity) =>
        outivity.id === currentOutivity.id ? (
          <LocationMarker
            key={outivity.id}
            outivity={outivity}
            position={
              currentCoordinates && currentCoordinates.length
                ? [currentCoordinates[0].lat, currentCoordinates[0].long]
                : ["", ""]
            }
          />
        ) : (
          <Marker
            key={outivity.id}
            position={[outivity.lat, outivity.long]}
            icon={goldIcon}
            title={outivity.title}
          >
            <Popup>
              <StyledLink href={`//${outivity.id}`}>
                <h2>{outivity.title}</h2>
              </StyledLink>
              <StyledInfo>in {outivity.area}</StyledInfo>
            </Popup>
          </Marker>
        )
      )}
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
