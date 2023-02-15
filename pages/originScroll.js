import { use, useEffect, useRef, useState } from "react";
import styles from "../styles/originScroll.module.css";
export default function OriginScroll() {
  const [currentPage, setCurrentPage] = useState(1);
  const [endofPage, setEndOfPage] = useState(true);
  const stop = useRef(false);
  const cardIncrease = 9;
  const cardLimit = 27;
  const [pageCount, setPageCount] = useState(
    Math.ceil(cardLimit / cardIncrease)
  );
  useEffect(() => {
    const cardTotalElem = document.getElementById("card-total");
    cardTotalElem.innerHTML = cardLimit;
    window.addEventListener("scroll", handleInfiniteScroll);
  }, [typeof window]);

  const getRamdonColor = () => {
    const h = Math.floor(Math.random() * 360);
    return `hsl(${h}deg,90%,85%)`;
  };
  const createCard = (index) => {
    const container = document.getElementById("card-container");
    const card = document.createElement("div");
    card.className = "cards";
    card.innerHTML = index;
    card.style.backgroundColor = getRamdonColor();
    container.appendChild(card);
  };
  const handleInfiniteScroll = () => {
    setTimeout(() => {
      const endofPage =
        window.innerHeight + window.pageYOffset >= document.body.offsetHeight;
      console.log("增頁", !stop.current, endofPage);
      if (endofPage && !stop.current) {
        setCurrentPage((currentPage) => currentPage + 1);
      } else if (stop.current) {
        window.removeEventListener("scroll", handleInfiniteScroll);
      }
    }, 500);
  };
  const addCards = () => {
    const cardCountElem = document.getElementById("card-count");
    const startRange = (currentPage - 1) * cardIncrease;
    const endRange =
      currentPage == pageCount ? cardLimit : currentPage * cardIncrease;
    cardCountElem.innerHTML = endRange;
    for (let i = startRange + 1; i <= endRange; i++) {
      createCard(i);
    }
  };

  useEffect(() => {
    console.log("到達頁尾->建立DIV", currentPage, "/", pageCount);

    if (currentPage > pageCount) {
      stop.current = true;
      const loader = document.getElementById("loader");
      loader.remove();
    } else {
      addCards();
    }
  }, [currentPage]);
  // if (endofPage && typeof window) {
  //   addCards(currentPage + 1);
  // }
  return (
    <>
      <div className={styles.cardContainer} id="card-container"></div>
      <div id="loader" className={styles.loader}>
        <div className={`${styles.skeletonCard}`}></div>
        <div className={`${styles.skeletonCard}`}></div>
        <div className={`${styles.skeletonCard}`}></div>
      </div>
      <div className={styles.cardActions}></div>
      <span className="d-flex justify-content-center">
        <span id="card-count"></span> &nbsp; of &nbsp;
        <span id="card-total"></span> &nbsp; cards
      </span>
    </>
  );
}
