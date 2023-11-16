import GlobalStyle from "../styles";
import { outivities } from "@/lib/data";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} outivities={outivities} />
    </>
  );
}
