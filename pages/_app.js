import "../styles/globals.css";
import "../styles/Pagination.css";
import "bootstrap/dist/css/bootstrap.css";
import Footer from "../components/Footer";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
