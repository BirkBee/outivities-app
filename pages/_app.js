import GlobalStyle from "../styles";
import { initialOutivities } from "@/lib/data";
import Layout from "@/components/Layout";
import React, { useState } from "react";

import useLocalStorageState from "use-local-storage-state";

export default function App({ Component, pageProps }) {
  const [outivities, setOutivities] = useLocalStorageState("outivities", {
    defaultValue: initialOutivities,
  });
  const [svgColor, setSvgColor] = useState("var(--neutral-color)");

  function handleAddOutivity(newOutivity) {
    setOutivities([newOutivity, ...outivities]);
  }

  function handleSvgClick() {
    // Set the color to blue on click
    setSvgColor("blue");
  }

  return (
    <>
      <GlobalStyle />

      <Component
        {...pageProps}
        outivities={outivities}
        handleAddOutivity={handleAddOutivity}
        handleSvgClick={handleSvgClick}
      />
      <Layout />
    </>
  );
}
