import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import { loadPosts } from "../lib/load-posts";
import Date from "../components/date";
import { getSortedPostsData } from "../lib/posts";
import { GetStaticPaths,GetStaticProps,GetServerSideProps } from "next";
export const getStaticProps: GetStaticProps = async ()=> {
  //靜態生成
  // for SEO , 在使用者進入前頁面所需數據 , 預渲染
  // 在服務器上運行 非客戶端
  //如果是以請求的方式獲取數據的話 使用服務器端渲染 server-side-rendering(getServerSideProps)
  const allPostsData = getSortedPostsData();
  const res = await fetch("https://random-data-api.com/api/v2/users?size=2");
  const data = await res.json();
  console.log(allPostsData);
  return {
    props: {
      data,
      allPostsData,
    },
  };
}
export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <link rel="icon" href="../public/favicon.ico" />
      </Head>
      {allPostsData.map(({ id, title, date }) => (
        <li className={utilStyles.listItem} key={id}>
          <Link href={`/posts/${id}`}>{title}</Link>
          <br />
          <small className={utilStyles.lightText}>
            <Date dateString={date} />
          </small>
        </li>
      ))}
      <span>123123</span>
    </Layout>
  );
}
