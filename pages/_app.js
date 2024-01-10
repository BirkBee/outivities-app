import { SWRConfig } from "swr";
import GlobalStyle from "../styles";
import Layout from "@/components/Layout";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function App({ Component, pageProps }) {
  return (
    <>
      <SWRConfig
        value={{
          fetcher,
        }}
      >
        <GlobalStyle />
        <Component {...pageProps} />
        <Layout />
      </SWRConfig>
    </>
  );
}
