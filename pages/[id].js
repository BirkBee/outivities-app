import { useRouter } from "next/router";
import OutivityDetail from "@/components/OutivityDetail";

export default function OutivityDetailsPage({
  outivities,
  onDeleteOutivity,
  favorites,
  onToggleFavorite,
}) {
  const router = useRouter();
  const { id } = router.query;
  const outivity = outivities.find((outivity) => outivity.id === id);

  if (!outivity) {
    return <p>Loading...</p>;
  }

  console.log("outivity.lat: ", outivity.lat);
  console.log("outivity.long: ", outivity.long);

  return (
    <OutivityDetail
      outivity={outivity}
      outivities={outivities}
      onDeleteOutivity={onDeleteOutivity}
      isFavorite={favorites.includes(outivity.id)}
      onToggleFavorite={onToggleFavorite}
    />
  );
}
