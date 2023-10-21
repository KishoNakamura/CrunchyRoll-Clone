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

  const [showMenu, setShowMenu] = useState(false)
  const [showDropBoxGenres, setShowDropBoxGenres] = useState(false)
  const [showDropBoxNews, setShowDropBoxNews] = useState(false)

  const ToogleShowMenu = () => {
    showMenu ? setShowMenu(false) : setShowMenu(true)
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

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className={showMenu ? 'sbmn-open' : ''}>
        <Header
          showMenu={showMenu}
          ToogleShowMenu={ToogleShowMenu}
          showDropBoxGenres={showDropBoxGenres}
          ToogleDropBoxGenres={ToogleDropBoxGenres}
          showDropBoxNews={showDropBoxNews}
          ToogleDropBoxNews={ToogleDropBoxNews}
        />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
