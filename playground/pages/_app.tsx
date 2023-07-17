import { useReportWebVitals } from "next/web-vitals";
import Layout from "../components/Layout/Layout";
import "antd/dist/reset.css";
import "../style.css";
import { CartProvider } from "store/Cart/cartContext";

export default function MyApp({ Component, pageProps }) {
  useReportWebVitals(metric => console.log("reportWebVitals",metric));

  return (
    <CartProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CartProvider>
  );
}
