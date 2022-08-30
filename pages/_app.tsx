import * as gtag from "../utils/gtag";
import React from "react";
import {AppProps} from "next/app";
import {ChakraProvider, extendTheme} from "@chakra-ui/react";
import {useEffect} from "react";
import {useRouter} from "next/router";
import "@fontsource/questrial";
import "../styles/global.scss";
import Head from "next/head";

const theme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: true,
  },
});

const App = ({Component, pageProps}: AppProps): any => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>Candido Sales Gomes</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default App;
