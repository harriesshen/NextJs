import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import { loadPosts } from "../lib/load-posts";
import Date from "../components/date";
import { getSortedPostsData } from "../lib/posts";
import { GetStaticPaths,GetStaticProps,GetServerSideProps } from "next";
import { useState } from "react";
export const getStaticProps: GetStaticProps = async ()=> {
  //靜態生成
  // for SEO , 在使用者進入前頁面所需數據 , 預渲染
  // 在服務器上運行 非客戶端
  //如果是以請求的方式獲取數據的話 使用服務器端渲染 server-side-rendering(getServerSideProps)
  const allPostsData = getSortedPostsData();
  const res = await fetch("https://api.github.com/repos/harriesshen/NextJs");
  const data = await res.json();
  return {
    props: {
      data,
      allPostsData,
    },
  };
}
export default function Home({ data }) {
  const [user,setUser] = useState("")
  const [repo,setRepo] = useState("")
  const handleClick = () =>{
    console.log('user',user)
    console.log('repo',repo)
  }
  return (
    <>
      <Head>
        <title>{siteTitle}</title>
        <link rel="icon" href="../public/favicon.ico" />
      </Head>
      <p>See what is <Link href={"/next"}>NextJs</Link></p>
      <div className="input-group mb-3">
        <span className="input-group-text">User</span>
        <input type="text" className="form-control" placeholder="user" aria-label="user" aria-describedby="button-addon2" value={user} onChange={(e)=>setUser(e.target.value)}/>
        <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={()=>handleClick()}>Button</button>
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text">Repo</span>
        <input type="text" className="form-control" placeholder="repo" aria-label="repo" aria-describedby="button-addon3" value={repo} onChange={(e)=>setRepo(e.target.value)}/>
        <button className="btn btn-outline-secondary" type="button" id="button-addon3" onClick={()=>handleClick()}>Button</button>
      </div>
    </>
  );
}
