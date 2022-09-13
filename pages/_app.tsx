import React from "react";
import { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import { StyledThemeProvider } from "@definitions/styled-components";
import { RecoilRoot } from "recoil";
import { appWithTranslation } from "@i18n";
import { StoreProvider } from "../utils/Store";
import '../src/translations/i18n';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <StyledThemeProvider>
      <RecoilRoot>
        <StoreProvider>
          <Component {...pageProps} />
        </StoreProvider>
      </RecoilRoot>
    </StyledThemeProvider>
  );
}

export default MyApp;
