import React from "react";
import { RecoilRoot } from "recoil";
import { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import { StyledThemeProvider } from "@definitions/styled-components";
import "../src/translations/i18n";
import "../src/styles/globalStyles";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <StyledThemeProvider>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </StyledThemeProvider>
  );
}

export default MyApp;
