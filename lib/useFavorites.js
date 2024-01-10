import useLocalStorageState from "use-local-storage-state";

export default function useFavorites() {
  const [favorites, setFavorites] = useLocalStorageState("favorites", {
    defaultValue: [],
  });
  function toggleFavorite(id) {
    if (favorites.includes(id)) {
      setFavorites(favorites?.filter((favorite) => favorite !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  }

  return { toggleFavorite, favorites };
}
