import "../styles/globals.css";
import type { AppProps } from "next/app";
// import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThemeProvider } from "../src/context/userContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
      {/* <ToastContainer hideProgressBar={false} limit={1} /> */}
    </>
  );
}

export default MyApp;
