import "@/styles/globals.css";

import NextProgress from "../hooks/NextProgress";
export default function App({ Component, pageProps }) {
  return (
    <>
      <NextProgress />
      <Component {...pageProps} />
    </>
  );
}
