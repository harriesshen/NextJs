import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import Star from "./star";
const name = "harries";
export const siteTitle = "沈舜鴻 Harries 前端工程師";

export default function Layout({ children, home }) {
  const { pathname } = useRouter();
  //畫面資料(name,url)
  const data = [
    {
      name: "My GitHub",
      url: "next",
    },
    {
      name: "InfiniteScroll",
      url: "scroll",
    },
    {
      name: "GitHub User&Repo",
      url: "github",
    },
  ];
  //建立右側View按鈕
  const createBtn = (data) => {
    return data.map((data) => (
      <div key={`${data.name}ID`}>
        <button type="button" className="btn my-2">
          <Link className="" href={`/${data.url}`}>
            {data.name}
          </Link>
        </button>
      </div>
    ));
  };
  return (
    <>
      <div className={`${styles.container} container-fluid`}>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="前端工程師 沈舜鴻 NextJs ReactJs 履歷"
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
        <div className="row ">
          <div className={`col-3 ${styles.rowColor}`}>
            <img className={`mt-3`} width={300} height={250} />
            <Star />
            <i className={`fa-regular fa-star fa-xl`}></i>
            {createBtn(data)}
          </div>
          <div className={`offset-1 col-7 ${styles.rowColor} rounded`}>
            <div className="d-flex justify-content-center align-content-center h-100 flex-wrap ">
              <div className={`${styles.layout}`}>{children}</div>
            </div>
          </div>
        </div>
      </div>
      <div className={`text-light ${styles.footer}`}>
        <p className="mb-0">
          {pathname == "/" ? `You are at` : "Go back to"}&nbsp;
          <a className="text-light" href={"/"}>
            Home
          </a>
        </p>
      </div>
    </>
  );
}
