import Layout from "../components/Layout/Layout";
import "antd/dist/reset.css";
import "../style.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
