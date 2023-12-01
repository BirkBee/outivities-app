import GlobalStyle from "../styles";
import { initialOutivities } from "@/lib/data";
import Layout from "@/components/Layout";
import useLocalStorageState from "use-local-storage-state";

export default function App({ Component, pageProps }) {
  const [outivities, setOutivities] = useLocalStorageState("outivities", {
    defaultValue: initialOutivities,
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

  return (
    <>
      <GlobalStyle />

      <Component
        {...pageProps}
        outivities={outivities}
        onAddOutivity={handleAddOutivity}
        onDeleteOutivity={handleDeleteOutivity}
        onEditOutivity={handleEditOutivity}
      />
      <Layout />
    </>
  );
}
