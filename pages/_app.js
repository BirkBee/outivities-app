import GlobalStyle from "../styles";
import { outivities } from "@/lib/data";
import Layout from "@/components/Layout";
import { uid } from "uid";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />

      <Component {...pageProps} outivities={outivities} />
      <Layout />
    </>
  );
}
