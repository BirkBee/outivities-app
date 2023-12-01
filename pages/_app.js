import GlobalStyle from "../styles";
import { initialOutivities } from "@/lib/data";
import Layout from "@/components/Layout";
import useLocalStorageState from "use-local-storage-state";

export default function App({ Component, pageProps }) {
  const [outivities, setOutivities] = useLocalStorageState("outivities", {
    defaultValue: initialOutivities,
  });
  const [favoriteInfo, setFavoriteInfo] = useLocalStorageState([
    "favorites",
    {
      defaultValue: [],
    },
  ]);

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

  function handleToggleFavorite(id) {
    // if (favoritesList.find((entry) => entry === id)) {
    //   setFavoritesList(favoritesList.filter((entry) => entry !== id));
    // }
    const outivity = favoriteInfo.find((outivity) => outivity.id === id);
    if (outivity) {
      setFavoriteInfo(
        favoriteInfo.map((outivity) =>
          outivity.id === id
            ? { id, isFavorite: !outivity.isFavorite }
            : outivity
        )
      );
    } else {
      setFavoriteInfo([...favoriteInfo, { id: id, isFavorite: true }]);
    }
  }

  return (
    <>
      <GlobalStyle />

      <Component
        {...pageProps}
        outivities={outivities}
        favoriteInfo={favoriteInfo}
        onAddOutivity={handleAddOutivity}
        onDeleteOutivity={handleDeleteOutivity}
        onEditOutivity={handleEditOutivity}
        onToggleFavorite={handleToggleFavorite}
      />
      <Layout />
    </>
  );
}
