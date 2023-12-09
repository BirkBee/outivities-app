import { useRouter } from "next/router";
import OutivityDetail from "@/components/OutivityDetail";
import { initialOutivities } from "@/lib/data";

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

  return (
    <OutivityDetail
      outivity={outivity}
      outivities={initialOutivities}
      onDeleteOutivity={onDeleteOutivity}
      isFavorite={favorites.includes(outivity.id)}
      onToggleFavorite={onToggleFavorite}
    />
  );
}
