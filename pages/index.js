import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const [user, setUser] = useState("");
  const [repo, setRepo] = useState("");
  const { push } = useRouter();

  return (
    <>
      <Head>
        <title>{siteTitle}</title>
        <link rel="icon" href="../public/favicon.ico" />
      </Head>
    </>
  );
}
