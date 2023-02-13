import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import Star from "./star";
const name = "harries";
export const siteTitle = "Next.js Sample";

export default function Layout({ children, home }) {
  const { pathname } = useRouter();
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div className="container">
        <div className="row justify-content-center">
          <div className={`${styles.layout} col-4`}>
            {children}
            <div className={`m-3 text-light ${styles.footer}`}>
              <p className="mb-0">
                {pathname == "/" ? `You are at` : "Go back to"}&nbsp;
                <a className="text-light" href={"/"}>
                  Home
                </a>
              </p>

              <Star></Star>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
