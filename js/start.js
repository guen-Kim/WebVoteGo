// 테스트용 파일입니다.

const main = document.querySelector("#main");
const qna = document.querySelector("#qna");
const result = document.querySelector("#result");
const endPoint = 10; // 상태바를 위한 단계 수
var score = 9;
const select = [0, 0, 0, 0, 0];   // 타입에 대한 점수 배열
// 점수가 높은 것 출력

function calResult() {
  var result = select.indexOf(Math.max(...select)); //전개 구문
  return result;
}

function setResult() {
  let point = calResult();
  console.log(point);
  const resultName = document.querySelector('.resultname');
  resultName.style.animation = "bomb 2s";

  resultName.innerHTML = infoList[point].name;
  var resultImg = document.createElement('img');
  const imgDiv = document.querySelector('#resultImg');



  var imgURL = 'img/image' + point + '.png';
  resultImg.src = imgURL;
  resultImg.alt = point;

  resultImg.style.WebkitAnimation = "fadeIn 0.7s";    // 0.45초 후, qna 객체 서서히 투명도 1이 됨
  resultImg.style.animation = "fadeIn 0.7s";
  resultImg.classList.add('resultImg');

  imgDiv.appendChild(resultImg);
  const resultDesc = document.querySelector('.resultDesc');

}




function goResult() {
  qna.style.WebkitAnimation = "fadeOut 0.7s";    // main 객체 서서히 투명도0이 됨
  qna.style.animation = "fadeOut 0.7s";
  setTimeout(() => {
    result.style.WebkitAnimation = "fadeIn 0.7s";    // 0.45초 후, qna 객체 서서히 투명도 1이 됨
    result.style.animation = "fadeIn 0.7s";
    setTimeout(() => {
      qna.style.display = "none";            //  0.45초 후, main 화면 사라짐
      result.style.display = "block"             //  0.45초 후, QnA화면 보이기
    }, 450)
  }) // settime함수 원형보기
  setResult();
}






// DOM 객체 동적 관리 : 답변(answer) 객체 생성, 삽입, 답변 데이터 삽입 구현
function addAnswer(answerText, qIdx, idx) { //idx 선택된 답변
  var a = document.querySelector('.answerBox');
  var answer = document.createElement('button');  // 답변(answer) button객체로 생성
  answer.classList.add('answerList');           // 답변(answer) button객체 class 프로퍼티 추가
  answer.classList.add('fadeIn');               // 애니매이션을 위한 class 프로퍼티 추가

  a.appendChild(answer);                        // 답변(answer) button객체 answerBox 에 삽입
  answer.innerHTML = answerText;               // 답변(answer) 내용 삽입


  //답변(answer) button객체 하나가 선택된다면 다음 질문으로 이동 구현
  answer.addEventListener("click", function () {               //답변(answer) button객체 click이벤트의 함수 등록
    var children = document.querySelectorAll('.answerList');  //답변(answer) button객체  모두 켈력션으로 반환
    // 애니매이션 스타일 속성 추가
    for (let i = 0; i < children.length; i++) {
      children[i].disabled = true;                            // 버튼 디폴트 액션 비활성화
      children[i].style.WebkitAnimation = "fadeOut 0.5s";     // 객체가 사라질때 애니매이션 스타일 프로퍼티 
      children[i].style.animation = "fadeOut 0.5s";           // 객체가 사라질때 애니매이션 스타일 프로퍼티
    }
    // 하나의 버튼을 클릭하면 버튼 버튼 사라지고 보이지 않음
    setTimeout(() => {                                        // 0.45 초 후 아래 명령문 실행
      var target = qnaList[qIdx].a[idx].person;
      console.log("현재 score : " + score);
      console.log("현재 target.value :" + target);

      select[target - 1] += score;                           // 타입에 대한 점수 +
      if (score > 2) {
        --score;
      }

      // qIdx번째 질문의 idx 답변   _ 저장 답변 객체 마다  idx 값 다름

      for (let i = 0; i < children.length; i++) {
        children[i].style.display = 'none';                 // fadeOut 속성으로 점차 0까지 투명해지면서 답변(answer) button객체 사라짐.
      }
      goNext(++qIdx);                                        // 다음 질문으로
    }, 450)
  }, false);
}


// 다음 질문(q) 삽입 과 질문(q)에 대한 답변(answer) 추가 및  진행도에 따른 상태바 
function goNext(qIdx) {
  if (qIdx === endPoint) {                              // 모든 QnA가 끝났다면
    goResult();
    console.log(select);
    return;
  }
  var q = document.querySelector('.qBox');
  q.innerHTML = qnaList[qIdx].q;                         // 다음 질문(q) 삽입 

  for (let i in qnaList[qIdx].a) {                        // 질문(q)에 대한 답변(answer) 추가
    addAnswer(qnaList[qIdx].a[i].answer, qIdx, i);      // i 는 선택된 답변(answer)
  }
  var status = document.querySelector('.statusBar');
  status.style.width = (100 / endPoint) * (qIdx + 1) + '%';    // 진행도에 따른 상태바 

}



// 검사 시작 시 애니메이션 
function begin() {
  main.style.WebkitAnimation = "fadeOut 0.7s";    // main 객체 서서히 투명도0이 됨
  main.style.animation = "fadeOut 0.7s";
  setTimeout(() => {
    qna.style.WebkitAnimation = "fadeIn 0.7s";    // 0.45초 후, qna 객체 서서히 투명도 1이 됨
    qna.style.animation = "fadeIn 0.7s";
    setTimeout(() => {
      main.style.display = "none";            //  0.45초 후, main 화면 사라짐
      qna.style.display = "block"             //  0.45초 후, QnA화면 보이기
    }, 450)
    // 질문
    let qIdx = 0;
    goNext(qIdx);   // 다음 단계로
  }, 450);
}



