import "../styles/global.css";
import "bootstrap/dist/css/bootstrap.css";
import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          src="https://kit.fontawesome.com/c3ac91c552.js"
          crossorigin="anonymous"
        ></script>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
