import { cssBundleHref } from "@remix-run/css-bundle";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import rootStyles from "./styles/root.css";
import faviconCrunchyLogo from "../public/img/favicon-32x32-CrunchyLogo.png"

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
    rel: 'icon',
    type: 'image/png',
    sizes: '32x32',
    href: faviconCrunchyLogo
  },
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
