import NUTCIM_B from "../public/images/NUTCIM(B).png";
import NUTCIM_W from "../public/images/NUTCIM(W).png";
import NUTC_GIF from "../public/images/NUTC_logo.gif";
import Image from "next/Image";
import styles from "./basketball_layout.module.css";
export default function Basketball_layout({ children, home }) {
  return (
    <>
      <header>
        <nav
          className={`navbar navbar-expand-lg navbar-light fixed-top ${styles.bgColor}`}
        >
          <div className="container-fluid">
            <a className={`navbar-brand ${styles.navbar_brand}`} href="#">
              <div className={styles.logo1}>
                <Image className="logo1" src={NUTCIM_B} alt="123" />
              </div>
              <div className={styles.logo2}>
                <Image className="logo2" src={NUTCIM_W} alt="123" />
              </div>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse " id="navbarNav">
              <ul className="navbar-nav ml-auto">
                <li className={`nav-item active ${styles.nav_item}`}>
                  <a className={`nav-link ${styles.nav_link}`} href="#">
                    首頁 <span className="sr-only"></span>
                  </a>
                </li>
                <li className={`nav-item ${styles.nav_item}`}>
                  <a
                    className="nav-link "
                    href="#"
                    data-toggle="modal"
                    data-target="#exampleModal"
                  >
                    得獎紀錄
                  </a>
                </li>
                <li className={`nav-item ${styles.nav_item}`}>
                  <a className="nav-link  " href="./video.html">
                    比賽影片
                  </a>
                </li>
                <li className={`nav-item ${styles.nav_item}`}>
                  <a className="nav-link  " href="./player.html">
                    球員名單
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      {children}
      <footer className={styles.footer}>
        <div className="container py-3 ">
          <div className="row">
            <div className="col-lg-5 d-flex align-items-center">
              <Image src={NUTC_GIF} alt="123" />
              <Image src={NUTCIM_W} alt="456" />
            </div>
            <div className="col-lg align-self-center text-center">
              <ul className="list-unstyled mt-3 fw-bold align-self-center">
                <li>學校：台中科技大學</li>
                <li>科系：資訊管理科系</li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.link}>
          <div className="container">
            <div className="row ">
              <div className="col-lg">
                <ul className="list-unstyled mt-3 fw-bold d-flex justify-content-around">
                  <li>
                    <a href="#">首頁</a>
                  </li>
                  <li>
                    <a href="#" data-toggle="modal" data-target="#exampleModal">
                      得獎紀錄
                    </a>
                  </li>
                  <li>
                    <a href="./video.html">比賽影片</a>
                  </li>
                  <li>
                    <a href="./player.html">球員名單</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
