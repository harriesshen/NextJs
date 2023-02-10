import RepoCard from "react-repo-card";
import styles from "../styles/next.module.css";
export const getStaticProps = async () => {
  //靜態生成
  // for SEO , 在使用者進入前頁面所需數據 , 預渲染
  // 在服務器上運行 非客戶端
  //如果是以請求的方式獲取數據的話 使用服務器端渲染 server-side-rendering(getServerSideProps)
  const res = await fetch("https://api.github.com/repos/harriesshen/NextJs");
  const data = await res.json();
  console.log(data.owner.login);
  return {
    props: {
      data,
    },
  };
};
export default function Next({ data }) {
  return (
    <>
      <div className={`d-flex rounded flex-column p-3 ${styles.nextBorder}`}>
        <img
          src={`${data.owner.avatar_url}`}
          width={"15%"}
          className="pb-2"
        ></img>
        <span>{data.name}</span>
        <span>{data.owner.login}</span>
        <p className="my-2">The Nextjs for example</p>
        <div>
          <span>{`${data.forks}`}</span>
          <span className="px-2">Forks</span>
          <span>{`${data.watchers}`}</span>
          <span className="px-2">watchers</span>
        </div>
      </div>
    </>
  );
}
