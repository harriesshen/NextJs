import "bootstrap/dist/css/bootstrap.css";
import "../styles/global.css";

import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import Layout from "../components/index_layout";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    //因為Next是SSR(服務器端渲染)
    //所以document在頁面加載完成之前都尚未準備好，會導致Bootstrap的JS檔執行錯誤
    //必須在加載成功後進行JS檔案的加載
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  });
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Script
          src="https://kit.fontawesome.com/c3ac91c552.js"
          crossorigin="anonymous"
        ></Script>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
