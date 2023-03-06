import Head from "next/head";
import Image from "next/Image";
import team_p1 from "../public/images/202154_210811.jpg";
import team_p2 from "../public/images/202154_210811_2.jpg";
import team_p3 from "../public/images/大資盃_210811.jpg";
import team_p4 from "../public/images/202154_210811.jpg";
import game from "../public/images/game.jpg";
import gameSet from "../public/images/game_set.jpg";
import styles from "../styles/basketball.module.css";
export default function Basketball(props) {
  return (
    <>
      <Head>
        <title>NUTCIM</title>
        <link rel="icon" key="icon" href="/images/basketball_ball.png" />
      </Head>

      <main className={styles.main}>
        <div className="pt-5"></div>
        <div
          id="carouselExampleIndicators"
          className="carousel slide pt-5 pb-3"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
            ></button>
            <button
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
            ></button>
            <button
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className={`carousel-item active ${styles.carousel_item}`}>
              <Image
                className="d-block w-100"
                src={team_p1}
                alt="First slide"
              />
            </div>
            <div className={`carousel-item ${styles.carousel_item}`}>
              <Image
                className="d-block w-100"
                src={team_p2}
                alt="Second slide"
              />
            </div>
            <div className={`carousel-item ${styles.carousel_item}`}>
              <Image
                className="d-block w-100"
                src={team_p3}
                alt="Third slide"
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            data-bs-target="#carouselExampleIndicators"
            //href="#carouselExampleIndicators"
            type="button"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden ">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            data-bs-target="#carouselExampleIndicators"
            // href="#carouselExampleIndicators"
            type="button"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div className="container mt-3">
          <div className="row">
            <div className="col-sm-6 col-lg mb-3">
              <div className={`card ${styles.card}`}>
                <Image
                  className="card-Image-top"
                  src={team_p4}
                  alt="Card Image cap"
                />
                <div className={`card-body ${styles.card_body}`}>
                  <h4 className="card-title">得獎紀錄</h4>
                  <p className="card-text">參與賽事與獎項</p>
                  <button
                    type="button"
                    className={`btn btn-primary fw-bold ${styles.btn} `}
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    Go
                  </button>
                </div>
              </div>
              <div
                className="modal fade"
                id="exampleModal"
                tabIndex="-1"
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
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
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
    </>
  );
}
