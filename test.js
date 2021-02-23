'use strict'

//현재시간출력
{

  setInterval(function () {
    let today = new Date();
    let arrTime = [today, today.toLocaleDateString(), today.toLocaleTimeString(), today.toLocaleString()]
    let _time = document.querySelector("._time");
    _time.textContent = (arrTime[3]);
  }, 1000)
  // 인풋 버튼 타입 생성 & 삭제
  {
    let art1 = document.querySelector(".art1");
    art1.style = ("display : flex; flex-wrap : wrap; width : 620px; height : 200px;")
    let btn1 = document.querySelector(".btn1");

    btn1.addEventListener("click", function () {
      for (let i = 1; i <= 10; i++) {
        let ranNum = Math.ceil(Math.random() * 999);
        let _input = document.createElement("input");
        let _br = document.createElement("br");
        _input.type = ("button");
        _input.value = (ranNum);
        _input.style = ("height : 20px; margin : 3px; border-radius : 100%; outline : none")
        art1.append(_input, _br);
      }
    });
    let deleteBtn = document.querySelector(".btn1-1");

    deleteBtn.addEventListener("click", function () {
      art1.textContent = " ";
    })
  }

  // 색상랜덤변경
  {

    let _article = document.querySelector(".art2");
    _article.style = ("display : flex; width : 620px; flex-wrap : wrap;");

    for (let i = 1; i <= 115; i++) {
      let _div = document.createElement("div");
      _div.className = (`b${i} box`);
      _div.style = ("width : 20px; height : 20px;  margin : 3px; transition : background 0.6s;");
      _article.append(_div);
    }

    let changeColor = null;

    function startInterval() {
      if (changeColor === null) {
        changeColor = setInterval(function () {
          for (let i = 0; i < 115; i++) {
            var x = Math.ceil(Math.random() * 256);
            var y = Math.ceil(Math.random() * 256);
            var z = Math.ceil(Math.random() * 256);
            let box = document.querySelectorAll(".box");
            let moon = box.item(i);
            moon.style.background = ("rgb(" + x + "," + y + "," + z + ")");
          }
        }, 800);
      }
    }

    let btn2 = document.querySelector(".btn2");
    let btn2_1 = document.querySelector(".btn2_1");

    btn2.addEventListener("click", function () {
      startInterval();
    });
    btn2_1.addEventListener("click", function () {
      clearInterval(changeColor);
      changeColor = null;
    });

  }

  {
    // 스크롤 값 출력
    let click = false;

    let scrollData = document.querySelector(".scrollData");
    scrollData.style = ("width : 100px; display : flex; flex-wrap : wrap; font-size : 40px; font-weight : bold;");
    document.addEventListener("scroll", function () {
      let _scroll = document.documentElement.scrollTop;
      scrollData.textContent = _scroll, " ";
      if (click === false)
        scrollData.textContent = "0";
    })
    let btn4 = document.querySelector(".btn4");
    btn4.addEventListener("click", function () {
      return click = true;
    })
    let btn4_1 = document.querySelector(".btn4-1");
    btn4_1.addEventListener("click", function () {
      return click = false;
    })
  }
}

window.addEventListener("keydown", (e) => {
  let key = document.getElementById(e.key)
  if (key) {
    key.classList.add("pressed")
    key.textContent = "누르는중"
  }
})

window.addEventListener("keyup", (e) => {
  let key = document.getElementById(e.key)
  if (key) {
    key.classList.remove("pressed")
    key.textContent = e.key
  }
})
// currentTarget과 target의 차이
document.querySelector(".targetTest").addEventListener("click", (e) => {
  console.log("선택자로 가져온 element 값의 자식요소 첫번째")
  console.log(e.target)
  console.log("선택자로 가져온 element 값의 요소 전체")
  console.log(e.currentTarget)
})


let popup = document.querySelector(".popup");
let btn = document.querySelector(".popArticle button")
btn.addEventListener("click", ()=>{
  popup.classList.toggle("show");
  document.body.style = ("overflow : hedden;")

  if(btn.textContent === "모달열기"){
    btn.textContent = "모달닫기"
  }else{
    btn.textContent = "모달열기"
  }
})
// 닫기 이벤트
document.querySelector(".close").addEventListener("click", ()=>{
  popup.classList.remove("show")
  btn.textContent = "모달열기"
  document.body.style = ("")
})
