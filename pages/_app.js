import GlobalStyle from "../styles";
import { initialOutivities } from "@/lib/data";
import Layout from "@/components/Layout";
import useLocalStorageState from "use-local-storage-state";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [outivities, setOutivities] = useLocalStorageState("outivities", {
    defaultValue: initialOutivities,
  });
  const [favorites, setFavorites] = useLocalStorageState([
    "favorites",
    {
      defaultValue: [],
    },
  ]);

  // const [favorites, setFavorites] = useState([]);

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

  // function handleToggleFavorite(id) {
  //   const outivity = favoriteInfo.find((outivity) => outivity.id === id);
  //   if (outivity) {
  //     setFavoriteInfo(
  //       favoriteInfo.map((outivity) =>
  //         outivity.id === id
  //           ? { id, isFavorite: !outivity.isFavorite }
  //           : outivity
  //       )
  //     );
  //   } else {
  //     setFavoriteInfo([...favoriteInfo, { id: id, isFavorite: true }]);
  //   }
  // }

  function handleToggleFavoriteList(id) {
    if (favorites.find((entry) => entry == id)) {
      setFavorites(favorites.filter((entry) => entry != id));
      return;
    }
    setFavorites([...favorites, id]);
  }

  // function handleToggleFavoriteList(outivityToFavoriteList) {
  //   setOutivities(
  //     outivities.map((outivity) =>
  //       outivity.id === outivityToFavoriteList.id
  //         ? { ...outivity, onOutivityList: !outivity.onOutivityList }
  //         : outivity
  //     )
  //   );
  // }

  function handleFavoriteOutivity(favoriteOutivity) {
    setOutivities(
      outivities.map((outivity) =>
        outivity.id === favoriteOutivity.id
          ? { ...outivity, favoriteOutivity: !outivity.favoriteOutivity }
          : outivity
      )
    );
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
        onToggleFavoriteList={handleToggleFavoriteList}
        onFavoriteOutivity={handleFavoriteOutivity}
      />
      <Layout />
    </>
  );
}
