import styled from "styled-components";
import { useEffect } from "react";
import { useMapEvents } from "react-leaflet/hooks";
import { Marker, Popup } from "react-leaflet";

export default function UserLocationMarker({ onSetPosition, position }) {
  const map = useMapEvents({
    locationfound: (event) => {
      const userCoordinates = event.latlng;
      onSetPosition({ lat: userCoordinates.lat, lng: userCoordinates.lng });
    },
  });
  useEffect(() => {
    map.locate();
  }, [map]);

  return (
    position && (
      <Marker position={position} icon={goldIcon}>
        <StyledPopUp>You are here</StyledPopUp>
      </Marker>
    )
  );
}

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

const StyledPopUp = styled(Popup)`
  font-size: 12px;
  font-weight: 800;
`;
