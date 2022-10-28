import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar className="sticky top-0" />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
