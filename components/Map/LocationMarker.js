import { useEffect, useState } from "react";
import { useMapEvents } from "react-leaflet/hooks";
import { Marker, Popup } from "react-leaflet";

export default function LocationMarker() {
  const [position, setPosition] = useState(null);

  const map = useMapEvents({
    locationfound: () => {
      map.flyTo(position, map.getZoom());
    },
  });

  useEffect(() => {
    map.locate();
  }, [position, map]);

  return (
    position && (
      <Marker position={position} icon={redIcon}>
        <Popup>You are here</Popup>
      </Marker>
    )
  );
}

const redIcon = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});
