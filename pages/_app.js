import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CacheProvider } from "@emotion/core";
import { cache } from "emotion";
import { globalStyle } from "../styles";

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <AnimatePresence>
        <motion.div
          key={router.route}
          initial="pageInitial"
          animate="pageAnimate"
          exit="pageExit"
          variants={{
            pageInitial: {
              opacity: 0,
            },
            pageAnimate: {
              opacity: 1,
            },
            pageExit: {
              backgroundColor: "white",
              filter: `invert()`,
              opacity: 0,
            },
          }}
        >
          <CacheProvider value={cache}>
            {globalStyle}
            <Component {...pageProps} />
          </CacheProvider>
        </motion.div>
      </AnimatePresence>
    </>
  );
}

export default MyApp;
