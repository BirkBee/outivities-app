import { useRouter } from "next/router";
import { useEffect } from "react";
import { useState } from "react";
import OutivityDetail from "@/components/OutivityDetail";
import useSWR from "swr";
import { initialOutivities } from "@/lib/data";

export default function OutivityDetailsPage({
  outivities,
  onDeleteOutivity,
  favorites,
  onToggleFavorite,
}) {
  const router = useRouter();
  const { id } = router.query;
  const [newArea, setNewArea] = useState("");
  const outivity = outivities.find((outivity) => outivity.id === id);

  function handleNewArea(area) {
    setNewArea(area);
  }
  useEffect(() => {
    if (!outivity) return;
    setNewArea(outivity.area);
  }, [outivity]);

  const newAreaURL = `https://nominatim.openstreetmap.org/search?format=json&limit=3&q=${newArea}`;
  const { data: currentCoordinates } = useSWR(outivity ? newAreaURL : null);

  if (!outivity) {
    return <p>Loading...</p>;
  }

  return (
    <OutivityDetail
      outivity={outivity}
      outivities={initialOutivities}
      onDeleteOutivity={onDeleteOutivity}
      isFavorite={favorites.includes(outivity.id)}
      onToggleFavorite={onToggleFavorite}
      newArea={newArea}
      onNewArea={handleNewArea}
      currentCoordinates={currentCoordinates}
    />
  );
}
