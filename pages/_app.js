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

  return (
    <>
      <GlobalStyle />

      <Component
        {...pageProps}
        initialOutivities={outivities}
        handleAddOutivity={handleAddOutivity}
      />
      <Layout />
    </>
  );
}
