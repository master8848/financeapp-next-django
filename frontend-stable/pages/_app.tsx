import "../styles/globals.css";
import type { AppProps } from "next/app";
import DevNavbar from "../components/Navbar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <body className="bg-gray-100 dark:bg-black min-w-[100vw]  min-h-screen dark:text-white">
      <DevNavbar />
      <Component {...pageProps} />
    </body>
  );
}
