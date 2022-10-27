import "../styles/globals.css";
import type { AppProps } from "next/app";
// import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThemeProvider } from "../src/context/userContext";
import { EmployeeProvider } from "../src/context/Employee";

function MyApp({ Component, pageProps }: any) {
  return (
    <>
      <EmployeeProvider>
        <ThemeProvider>
          <Component {...pageProps} />
        </ThemeProvider>
      </EmployeeProvider>
      {/* <ToastContainer hideProgressBar={false} limit={1} /> */}
    </>
  );
}

export default MyApp;
