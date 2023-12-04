import GlobalStyle from "../styles";
import { initialOutivities } from "@/lib/data";
import Layout from "@/components/Layout";
import useLocalStorageState from "use-local-storage-state";

export default function App({ Component, pageProps }) {
  const [outivities, setOutivities] = useLocalStorageState("outivities", {
    defaultValue: initialOutivities,
  });
  const [favorites, setFavorites] = useLocalStorageState("favorites", {
    defaultValue: [],
  });

  function handleAddOutivity(newOutivity) {
    setOutivities([newOutivity, ...outivities]);
  }

  function handleDeleteOutivity(id) {
    setOutivities(outivities.filter((outivity) => outivity.id !== id));
  }

  function handleEditOutivity(editedOutivity) {
    setOutivities(
      outivities.map((outivity) =>
        outivity.id === editedOutivity.id ? editedOutivity : outivity
      )
    );
  }

  // function handleToggleFavoriteList(id) {
  //   if (favorites.find((entry) => entry == id)) {
  //     setFavorites(favorites.filter((entry) => entry != id));
  //     return;
  //   }
  //   setFavorites([...favorites, id]);
  // }

  // function handleFavoriteOutivity(favoriteOutivity) {
  //   setOutivities(
  //     outivities.map((outivity) =>
  //       outivity.id === favoriteOutivity.id
  //         ? { ...outivity, favoriteOutivity: !outivity.favoriteOutivity }
  //         : outivity
  //     )
  //   );
  // }

  function handleToggleFavorite(id) {
    if (favorites.includes(id)) {
      setFavorites(favorites?.filter((favorite) => favorite !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  }

  return (
    <>
      <GlobalStyle />

      <Component
        {...pageProps}
        outivities={outivities}
        onAddOutivity={handleAddOutivity}
        onDeleteOutivity={handleDeleteOutivity}
        onEditOutivity={handleEditOutivity}
        // onToggleFavoriteList={handleToggleFavoriteList}
        // onFavoriteOutivity={handleFavoriteOutivity}
        onToggleFavorite={handleToggleFavorite}
        favorites={favorites}
      />
      <Layout />
    </>
  );
}
