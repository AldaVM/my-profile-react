import React from "react";
import { CacheProvider } from "@emotion/core";
import { cache } from "emotion";
import { globalStyle } from "../styles";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <CacheProvider value={cache}>
        {globalStyle}
        <Component {...pageProps} />
      </CacheProvider>
    </>
  );
}

export default MyApp;
