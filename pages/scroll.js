import { useState } from "react";
import styles from "../styles/scroll.module.css";
import InfiniteScroll from "react-infinite-scroll-component";
export default function Scroll({ res }) {
  const [posts, setPosts] = useState(res);
  const [hasMore, setHasMore] = useState(true);

  const getMorePosts = async () => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/todos?_start=${posts.length}&_limit=10`
    );
    const newPosts = await res.json();
    setPosts((posts) => [...posts, ...newPosts]);
  };
  return (
    <div className="container">
      <InfiniteScroll
        dataLength={posts.length}
        next={getMorePosts}
        hasMore={hasMore}
        loader={<h3> Loading...</h3>}
        endMessage={<h4>Nothing more to show</h4>}
      >
        {posts.map((item) => (
          <div key={item.id} className={`${styles.info}`}>
            <div className="row justinfy-content-center">
              <span className="">{item.id}</span>
            </div>
            <div className="row">
              <span className={`col ${styles.over_text}`}>{item.title}</span>
            </div>
          </div>
        ))}
      </InfiniteScroll>
    </div>
  );
}

export const getStaticProps = async () => {
  const data = await fetch(
    `https://jsonplaceholder.typicode.com/todos?_limit=10`
  );
  // await console.log("data", res.json());
  // await data.text();
  const res = await data.json();
  // console.log("data2", JSON.stringify(data));
  return {
    props: { res },
  };
};
