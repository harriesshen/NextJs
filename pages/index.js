import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import { loadPosts } from "../lib/load-posts";
export async function getStaticProps() {
  const allPostData = getSortedPostsData();
  // const posts = loadPosts();
  // console.log("post", posts);
  const res = await fetch("https://random-data-api.com/api/v2/users?size=2");
  const data = await res.json();
  return {
    props: {
      data,
      allPostData,
    },
  };
}
export default function Home({ allPostData, data }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[hi, my name is harries , it is my NextJs practice]</p>
        <p>
          (This is a sample website - you’ll be building a site like this in{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
        {data.map((item) => (
          <>
            <p>id:{item.id}</p>
            <p>first_name:{item.first_name}</p>
            <p>last_name:{item.last_name}</p>
          </>
        ))}
      </section>
    </Layout>
  );
}
