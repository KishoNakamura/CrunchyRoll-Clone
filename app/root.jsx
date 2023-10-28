import { cssBundleHref } from "@remix-run/css-bundle";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { useState } from "react";
import Header from "./components/header";
import rootStyles from "./styles/root.css";
import headerStyles from "./styles/header.css";
import faviconCrunchyLogo from "../public/img/favicon-32x32-CrunchyLogo.png";

export const links = () => [
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
  { 
    rel: "stylesheet",
    href: "https://necolas.github.io/normalize.css/8.0.1/normalize.css"
  },
  {
    rel: "preconnect",
    href: "https://fonts.googleapis.com"
  },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "true"
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&display=swap"
  },
  {
    rel: "stylesheet",
    href: rootStyles
  },
  {
    rel: "stylesheet",
    href: headerStyles
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '32x32',
    href: faviconCrunchyLogo
  },
];

export default function App() {

  const [showBrowseMenu, setShowBrowseMenu] = useState(false)
  const [showNewsMenu, setShowNewsMenu] = useState(false)
  const [showDropBoxGenres, setShowDropBoxGenres] = useState(false)
  const [showDropBoxNews, setShowDropBoxNews] = useState(false)
  const [showAccount, setShowAccount] = useState(false)
  const [isUserLogin, setIsUserLogin] = useState(false)

  const ToogleShowBrowseMenu = () => {
    showBrowseMenu ? setShowBrowseMenu(false) : setShowBrowseMenu(true)
    setShowNewsMenu(false)
    setShowDropBoxNews(false)
    setShowDropBoxGenres(false)
  }

  const ToogleShowNewsMenu = () => {
    showNewsMenu ? setShowNewsMenu(false) : setShowNewsMenu(true)
    setShowBrowseMenu(false)
    setShowDropBoxNews(false)
    setShowDropBoxGenres(false)
  }

  const ToogleDropBoxGenres = () => {
    showDropBoxGenres ? setShowDropBoxGenres(false) : setShowDropBoxGenres(true);
    setShowDropBoxNews(false)
  }

  const ToogleDropBoxNews = () => {
    showDropBoxNews ? setShowDropBoxNews(false) : setShowDropBoxNews(true);
    setShowDropBoxGenres(false)
  }

  const ToogleShowAccount = () => {
    showAccount ? setShowAccount(false) : setShowAccount(true)
    setShowNewsMenu(false)
    setShowBrowseMenu(false)
    setShowDropBoxNews(false)
    setShowDropBoxGenres(false)
  }

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className={(showBrowseMenu || showNewsMenu || showAccount) ? 'sbmn-open' : ''}>
        <Header
          showBrowseMenu={showBrowseMenu}
          ToogleShowBrowseMenu={ToogleShowBrowseMenu}
          showNewsMenu={showNewsMenu}
          ToogleShowNewsMenu={ToogleShowNewsMenu}
          showDropBoxGenres={showDropBoxGenres}
          ToogleDropBoxGenres={ToogleDropBoxGenres}
          showDropBoxNews={showDropBoxNews}
          ToogleDropBoxNews={ToogleDropBoxNews}
          showAccount={showAccount}
          ToogleShowAccount={ToogleShowAccount}
          isUserLogin={isUserLogin}
        />
        <div onClick={showBrowseMenu ? ToogleShowBrowseMenu : showNewsMenu ? ToogleShowNewsMenu : null}>
          <Outlet />
        </div>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
