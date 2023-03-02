import Head from "next/head";
import Image from "next/Image";
// import Link from "next/link";
// import image from "../public/images";
import NUTCIM_B from "../public/images/NUTCIM(B).png";
import NUTCIM_W from "../public/images/NUTCIM(W).png";
import TEAM_P1 from "../public/images/202154_210811.jpg";
import TEAM_P2 from "../public/images/202154_210811_2.jpg";
import TEAM_P3 from "../public/images/大資盃_210811.jpg";
import TEAM_P4 from "../public/images/202154_210811.jpg";
import game from "../public/images/game.jpg";
import gameSet from "../public/images/game_set.jpg";
import NUTC_GIF from "../public/images/NUTC_logo.gif";
import backetball from "../public/images/basketball-ball.png";
import styles from "../styles/basketball.module.css";
export default function Basketball(props) {
  return (
    <>
      <Head>
        <title>NUTCIM</title>
        <link
          rel="icon"
          key="icon"
          href="../public/images/basketball-ball.png"
        />
      </Head>
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
      <main className={styles.main}>
        <div className="pt-5"></div>
        <div
          id="carouselExampleIndicators"
          className="carousel slide pt-5 pb-3"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className={`carousel-item active ${styles.carousel_item}`}>
              <Image
                className="d-block w-100"
                src={TEAM_P1}
                alt="First slide"
              />
            </div>
            <div className={`carousel-item ${styles.carousel_item}`}>
              <Image
                className="d-block w-100"
                src={TEAM_P2}
                alt="Second slide"
              />
            </div>
            <div className={`carousel-item ${styles.carousel_item}`}>
              <Image
                className="d-block w-100"
                src={TEAM_P3}
                alt="Third slide"
              />
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
        <div className="container mt-3">
          <div className="row">
            <div className="col-sm-6 col-lg mb-3">
              <div className={`card ${styles.card}`}>
                <Image
                  className="card-Image-top"
                  src={TEAM_P4}
                  alt="Card Image cap"
                />
                <div className={`card-body ${styles.card_body}`}>
                  <h4 className="card-title">得獎紀錄</h4>
                  <p className="card-text">參與賽事與獎項</p>
                  <button
                    type="button"
                    className={`btn btn-primary fw-bold ${styles.btn} `}
                    data-toggle="modal"
                    data-target="#exampleModal"
                  >
                    Go
                  </button>
                </div>
              </div>
              <div
                className="modal fade"
                id="exampleModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">
                        得獎紀錄
                      </h5>
                      <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      <table className="table">
                        <thead className="thead-dark">
                          <tr>
                            <th scope="col">#</th>
                            <th scope="col">比賽名稱</th>
                            <th scope="col">名次</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">1</th>
                            <td>109學年度校長盃籃球比賽</td>
                            <td>冠軍</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg mb-3">
              <div className={`card ${styles.card}`}>
                <Image
                  className="card-Image-top"
                  src={game}
                  alt="Card Image cap"
                />
                <div className={`card-body ${styles.card_body}`}>
                  <h4 className="card-title">比賽影片</h4>
                  <p className="card-text">賽事影片回顧</p>
                  <button
                    href="./video.html"
                    className={`btn btn-primary fw-bold ${styles.btn} `}
                  >
                    Go
                  </button>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg mb-3">
              <div className={`card ${styles.card}`}>
                <Image
                  className="card-Image-top"
                  src={gameSet}
                  alt="Card Image cap"
                />
                <div className={`card-body ${styles.card_body}`}>
                  <h4 className="card-title">球員名單</h4>
                  <p className="card-text">參與球員名單</p>
                  <button
                    href="./player.html"
                    className={`btn btn-primary fw-bold ${styles.btn} `}
                  >
                    Go
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
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
