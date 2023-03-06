import Head from "next/head";
import Layout, { siteTitle } from "../components/index_layout";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Github() {
  const [user, setUser] = useState("");
  const [repo, setRepo] = useState("");
  const { push } = useRouter();
  const handleClick = (type = "user") => {
    // console.log("user", user);
    // console.log("repo", repo);
    switch (type) {
      case "user":
        if (user) {
          push({ pathname: "/users/[user]", query: { user } });
        }
        break;
      case "repo":
        if (repo) {
          push({ pathname: "/repos/[user]/[repo]", query: { user, repo } });
        }
        break;
      default:
        break;
    }
  };
  return (
    <>
      <Head>
        <title>{siteTitle}</title>
        {/*<link rel="icon" href="../public/favicon.ico" /> */}
      </Head>

      <div className="input-group mb-3">
        <span className="input-group-text">User</span>
        <input
          type="text"
          className="form-control"
          placeholder="user"
          aria-label="user"
          aria-describedby="button-addon2"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
        <button
          className="btn  btn-secondary"
          type="button"
          id="button-addon2"
          disabled={!user}
          onClick={() => handleClick("user")}
        >
          Go-&gt;
        </button>
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text">Repo</span>
        <input
          type="text"
          className="form-control"
          placeholder="repo"
          aria-label="repo"
          aria-describedby="button-addon3"
          value={repo}
          onChange={(e) => setRepo(e.target.value)}
        />
        <button
          className="btn btn-secondary"
          type="button"
          id="button-addon3"
          disabled={!repo || !user}
          onClick={() => handleClick("repo")}
        >
          Go-&gt;
        </button>
      </div>
    </>
  );
}
