import Layout from "../components/Layout";
import "../styles/globals.css";
import { IpWrapper } from "../context/ipContext";

function MyApp({ Component, pageProps }) {
  return (
    <IpWrapper>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </IpWrapper>
  );
}

export default MyApp;
