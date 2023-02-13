import styles from "./star.module.css";
export default function Star() {
  return <div className="">{ShowStar()}</div>;
}
const ShowStar = () => {
  var fiveStar = []; //列印五顆星

  //星星監聽
  const starListener = (e) => {
    //得分亮起 無得分暗下
    var regular = "fa-regular";
    var solid = "fa-solid";
    var starId = e.target.id; //星星ID
    var point = 0; //得分
    var allClear = document.getElementsByClassName("fa-star");
    //全空白或單獨空白

    for (var i = 0; i < 5; i++) {
      if (allClear[i].classList.value.includes("fa-solid")) {
        allClear[i].classList.remove(solid);
        allClear[i].classList.add(regular);
      }
    }

    switch (starId) {
      case "star1":
        point = 1;
        break;
      case "star2":
        point = 2;
        break;
      case "star3":
        point = 3;
        break;
      case "star4":
        point = 4;
        break;
      case "star5":
        point = 5;
        break;
      default:
        break;
    }
    var i = 1; //執行次數(與得分相同)

    //設定星星

    if (!e.target.classList.value.includes("fa-solid")) {
      console.log("填滿到", point);
      while (i <= point) {
        document.getElementById(`star${i}`).classList.remove(regular);
        document.getElementById(`star${i}`).classList.add(solid);
        i++;
      }
    }
  };
  for (var i = 1; i <= 5; i++) {
    fiveStar.push(
      <i
        className="fa-regular fa-star fa-xl"
        onClick={(e) => starListener(e)}
        id={`star${i}`}
        key={`star${i}`}
      ></i>
    );
  }
  return fiveStar;
};
