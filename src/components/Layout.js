import Link from "next/link";
import Head from "next/head";
import React from "react";
import { useContext, useEffect, useState } from "react";
import { Store } from "utils/Store";
import Image from "next/image";
import { useTranslation, Trans, I18nextProvider } from "react-i18next";
import { Footer } from "./footer";

export default function Layout({ title, children }) {
  const { i18n } = useTranslation();
  const { state } = useContext(Store);
  const { cart } = state;
  const [cartItemsCount, setCartItemsCount] = useState(0);
  useEffect(() => {
    setCartItemsCount(cart.cartItems.reduce((a, c) => a + c.quantity, 0));
  }, [cart.cartItems]);

  const toggleLang = () => {
    switch (i18n.language) {
      case "en":
        i18n.changeLanguage("sp");
        break;
      case "sp":
        i18n.changeLanguage("it");
        break;
      default:
        i18n.changeLanguage("en");
        break;
    }
  };

  return (
    <I18nextProvider i18n={i18n}>
      <>
        <Head>
          <title>{title ? title + " - Amazona" : "Amazona"} </title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className="flex min-h-screen flex-col justify-between">
          <header>
            <nav className="flex h-12 items-center px-4 justify-between bg-white shadow-md fixed top-0 left-0 right-0 z-10">
              <Link href="/">
                <a className="text-lg font-bold">amazona</a>
              </Link>
              <div className="flex">
                <Link href="/cart">
                  <a className="p-2">
                    Cart
                    {cartItemsCount > 0 && (
                      <span className="ml-1 rounded-full bg-red-600 px-2 py-1 text-xs font-bold text-white">
                        {cartItemsCount}
                      </span>
                    )}
                  </a>
                </Link>
                <Link href="/login">
                  <a className="p-2">Login</a>
                </Link>
                <button className="" onClick={toggleLang}>
                  <Image
                    src="/images/language.png"
                    width="28"
                    height="25"
                  ></Image>
                </button>
              </div>
            </nav>
          </header>
          <main className="container m-auto mt-4 px-4">{children}</main>
          <footer className="flex h-10 justify-center items-center shadow-inner">
            <p>Copyright © 2022 Amazona</p>
          </footer>
        </div>
      </>
    </I18nextProvider>
            </div>
          </nav>
        </header>
        <main className="container m-auto mt-4 px-4">{children}</main>
        <Footer></Footer>
      </div>
    </>
  );
}
