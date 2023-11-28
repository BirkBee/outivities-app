import GlobalStyle from "../styles";
import { initialOutivities } from "@/lib/data";
import Layout from "@/components/Layout";
import useLocalStorageState from "use-local-storage-state";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [outivities, setOutivities] = useLocalStorageState("outivities", {
    defaultValue: initialOutivities,
  });

  const [isEdit, setIsEdit] = useState(false);

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

  function handleSetIsEdit() {
    setIsEdit(!isEdit);
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
        isEdit={isEdit}
        onSetIsEdit={handleSetIsEdit}
      />
      <Layout />
    </>
  );
}
