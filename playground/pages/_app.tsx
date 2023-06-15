import Layout from "../components/Layout/Layout";
import "antd/dist/reset.css";
import "../style.css";
import { CartProvider } from "store/Cart/cartContext";


export default function MyApp({ Component, pageProps }) {
  return (
    <CartProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CartProvider>
  );
}
