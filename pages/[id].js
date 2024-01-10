import { useRouter } from "next/router";
import OutivityDetail from "@/components/OutivityDetail";
import useSWR from "swr";
import useFavorites from "@/lib/useFavorites";

export default function OutivityDetailsPage({ outivities }) {
  const router = useRouter();
  const { id } = router.query;

  const { data: outivity, isLoading } = useSWR(`/api/outivities/${id}`);
  const { favorites, toggleFavorite } = useFavorites();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  async function handleDeleteOutivity() {
    const response = await fetch(`/api/outivities/${id}`, { method: "DELETE" });

    if (!response.ok) {
      console.log(response.status);
      return;
    }

    router.push("/");
  }

  return (
    <OutivityDetail
      outivity={outivity}
      outivities={outivities}
      onDeleteOutivity={handleDeleteOutivity}
      isFavorite={favorites.includes(outivity._id)}
      onToggleFavorite={toggleFavorite}
    />
  );
}
