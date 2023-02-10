import Head from "next/head";
import styles from "../../styles/next.module.css";
export async function getStaticProps(context) {
  const res = await fetch(
    `https://api.github.com/users/${context.params.user}`
  );
  const data = await res.json();
  return {
    props: { data },
    revalidate: 24 * 60 * 60,
  };
}
export async function getStaticPaths() {
  const res = await fetch("https://api.github.com/users");
  const data = await res.json();
  const paths = data.slice(0, 1000).map((u) => ({ params: { user: u.login } }));

  return { paths, fallback: "blocking" };
}
export default function User({ data }) {
  // console.log("data", data);
  if ("message" in data && data.message == "Not Found") {
    return (
      <div className="text-center text-light">
        <h3>404 Not Found</h3>
        <p>Try Other User</p>
      </div>
    );
  }
  return (
    <>
      <Head>
        <title>
          {data.name
            ? `${data.name} | 2023 harries NextJs `
            : "A user | 2023 harries NextJs"}
        </title>
        <meta
          name="description"
          content="2023 harriesshen Nextjs Fetch GitHub API"
        ></meta>
        <link rel="icon" href="../../public/favicon.ico"></link>
      </Head>
      <div className={`d-flex rounded flex-column p-3 ${styles.nextBorder}`}>
        <img src={`${data.avatar_url}`} width={"15%"} className="pb-2"></img>

        <span>{data.login}</span>
        <p className="my-2">The Nextjs for example</p>
        <div>
          <span>{`${data.followers}`}</span>
          <span className="px-2">Followers</span>
          <span>{`${data.following}`}</span>
          <span className="px-2">Following</span>
        </div>
      </div>
    </>
  );
}
