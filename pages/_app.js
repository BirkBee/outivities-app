import GlobalStyle from "../styles";
import { outivities } from "@/lib/data";
import Layout from "@/components/Layout";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />

      <Component {...pageProps} outivities={outivities} />
      <Layout />
    </>
  );
}
