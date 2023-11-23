import GlobalStyle from "../styles";
import { initialOutivities } from "@/lib/data";
import Layout from "@/components/Layout";
import useLocalStorageState from "use-local-storage-state";
import { useRouter } from "next/router";
import { uid } from "uid";

export default function App({ Component, pageProps }) {
  const [outivities, setOutivities] = useLocalStorageState("outivities", {
    defaultValue: initialOutivities,
  });

  const router = useRouter();

  function handleAddOutivity(newOutivity) {
    setOutivities([newOutivity, ...outivities]);
  }

  function handleDeleteOutivity(id) {
    setOutivities(outivities.filter((outivity) => outivity.id !== id));
  }
  const handleDelete = (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this Outivity?"
    );
    if (confirmed) {
      router.push("/");
    }
  };

  return (
    <>
      <GlobalStyle />

      <Component
        {...pageProps}
        outivities={outivities}
        handleAddOutivity={handleAddOutivity}
        onDeleteOutivity={handleDeleteOutivity}
        handleDelete={handleDelete}
      />
      <Layout />
    </>
  );
}
