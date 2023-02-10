import Head from "next/head";
import styles from "../../../styles/next.module.css";
export async function getServerSideProps(context) {
  const res = await fetch(
    `https://api.github.com/repos/${context.params.user}/${context.params.repo}`
  );
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}

export default function Repo({ data }) {
  console.log("data", data);
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
        <title>{data.name || "A user"} | 2023 harries NextJs</title>
        <meta
          name="description"
          content="2023 harriesshen Nextjs Fetch GitHub API"
        ></meta>
        <link rel="icon" href="../../public/favicon.ico"></link>
      </Head>
      <div className={`d-flex rounded flex-column p-3 ${styles.nextBorder}`}>
        <img
          src={`${data.owner.avatar_url}`}
          width={"15%"}
          className="pb-2"
        ></img>

        <h4>{data.name}</h4>
        <span>{data.owner.login}</span>
        <div>
          <span>{`${data.forks}`}</span>
          <span className="px-2">Forks</span>
          <span>{`${data.watchers}`}</span>
          <span className="px-2">Watchers</span>
        </div>
      </div>
    </>
  );
}
