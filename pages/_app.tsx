import React from "react";
import { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import { StyledThemeProvider } from "@definitions/styled-components";
import { RecoilRoot } from "recoil";
import { appWithTranslation } from "@i18n";
// import { StoreProvider } from "../utils/Store";
import "../src/translations/i18n";
import { AppWrapper } from "../src/context/state";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <StyledThemeProvider>
      <RecoilRoot>
        <AppWrapper>
          {/* <StoreProvider> */}
          <Component {...pageProps} />
          {/* </StoreProvider> */}
        </AppWrapper>
      </RecoilRoot>
    </StyledThemeProvider>
  );
}

export default MyApp;
