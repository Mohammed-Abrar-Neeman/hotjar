import Hotjar from '@hotjar/browser';
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {

const siteId = 4988481;
const hotjarVersion = 6;

Hotjar.init(siteId, hotjarVersion);

// Initializing with `debug` option:
Hotjar.init(siteId, hotjarVersion, {
  debug: true
});

  return <Component {...pageProps} />;
}
