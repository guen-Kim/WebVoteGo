const main = document.querySelector("#main");
const qna = document.querySelector("#qna");
const result = document.querySelector("#result");
const endPoint = 10; // 상태바를 위한 단계 수
var select = [0, 0, 0, 0, 0];   // 타입에 대한 점수 배열
var curQIdx = -1;   // 현재 qIdx의 값 저장하는 변수
var curPerson = []; // 현재 선택된 후보 배열
var state = 0 ; //현재의 단계를 저장하는 변수

// 배열에서 가장 높은 값을 가진 배열 요소 반환(최종 후보 추천)
function calResult() {
  var result = select.indexOf(Math.max(...select)); //전개 구문
  return result;
}

// 사용자가 클릭한 결과에 따라 결과 페이지를 동적으로 작성하는 함수
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
  imgDiv.appendChild(resultImg);                      // 태그에 객체 삽입

}



// 결과 페이지가 자연스럽게 출력되도록 애니메이션이 구현된 함수
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
  }) 
  setResult();
}





//답변(answer) 객체 생성, 삽입, 답변 데이터 삽입 구현
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
      saveState(qIdx);
      console.log("현재 target.value :" + target);

      // 점수 추가 알고리즘
      switch (qIdx) {
        case 0:
          select[target - 1] += 9;
          break;
        case 1:
          select[target - 1] += 8;
          break;
        case 2:
          select[target - 1] += 7;
          break;
        case 3:
          select[target - 1] += 6;
          break;
        case 4:
          select[target - 1] += 5;
          break;
        case 5:
            select[target - 1] += 4;
          break;
        case 6:
          select[target - 1] += 3;
          break;
      default :
        select[target - 1] += 2;
      }
     
      curPerson.push(target); // 선택된 후보 저장
      for (let i = 0; i < children.length; i++) {
        children[i].style.display = 'none';                 // fadeOut 속성으로 점차 0까지 투명해지면서 답변(answer) button객체 사라짐.
      }
      goNext(++qIdx);                                        // 다음 질문으로
      state = ++qIdx;                                         // 단계증가
    }, 450)
  }, false);
}


// 다음 질문(q) 삽입 과 질문(q)에 대한 답변(answer) 추가 및  진행도에 따른 상태바 
function goNext(qIdx) {
  if (qIdx === endPoint) {                              // 모든 QnA가 끝났다면
    goResult();                                         // 결과페이지 생성 함수
    console.log(select);
    return;
  }
  var q = document.querySelector('.qBox');
  q.innerHTML = qnaList[qIdx].q;                         // 다음 질문(q) 삽입 

  for (let i in qnaList[qIdx].a) {                        // 질문(q)에 대한 답변(answer) 추가
    addAnswer(qnaList[qIdx].a[i].answer, qIdx, i);     
  }
  var status = document.querySelector('.statusBar');
  status.style.width = (100 / endPoint) * (qIdx + 1) + '%';    // 진행도에 따른 상태바 

}

// 현재 qIdx를 저장 for goBack 함수에서 사용될 변수 curQIdx
function saveState(qIdx) {
  curQIdx = qIdx;
}

// 뒤돌아가기 기능 구현 
function goBack() {
  if(curQIdx == -1){
    alert("하나라도 선택해야 합니다!!");
    return;
  }
 
  var children = document.querySelectorAll('.answerList');  //답변(answer) button객체  모두 켈력션으로 반환
    // 애니매이션 스타일 속성 추가
    for (let i = 0; i < children.length; i++) {
      children[i].disabled = true;                            // 버튼 디폴트 액션 비활성화
      children[i].style.WebkitAnimation = "fadeOut 0.5s";     // 객체가 사라질때 애니매이션 스타일 프로퍼티 
      children[i].style.animation = "fadeOut 0.5s";           // 객체가 사라질때 애니매이션 스타일 프로퍼티
    }
  
    setTimeout(() => {      
     console.log("curQIdx : "+ curQIdx);

     // 직전 선택된 후보의 점수에서 추가된 점수 빼는 알고리즘
      switch (curQIdx) {
        case 0:
          select[curPerson[curPerson.length-1]-1] -= 9;
          break;
        case 1:
          select[curPerson[curPerson.length-1]-1] -= 8;
          break;
        case 2:
          select[curPerson[curPerson.length-1]-1] -= 7;
          break;
        case 3:
          select[curPerson[curPerson.length-1]-1] -= 6;
          break;
        case 4:
          select[curPerson[curPerson.length-1]-1] -= 5;
          break;
        case 5:
            select[curPerson[curPerson.length-1]-1] -= 4;
          break;
        case 6:
          select[curPerson[curPerson.length-1]-1] -= 3;
          break;
      default :
        select[curPerson[curPerson.length-1]] -= 2;
        console.log("test");
      }
      curPerson.pop(); // 배열에서 후보 삭제
      console.log("curPerson : "+ curPerson);
      console.log("점수 현황 : "+ select);
    
      for (let i = 0; i < children.length; i++) {
        children[i].style.display = 'none';                 // fadeOut 속성으로 점차 0까지 투명해지면서 답변(answer) button객체 사라짐.
      }
      goNext(curQIdx);                                        // 다음 질문으로
      state = --curQIdx;
    }, 450)
}

// 시작버튼을 클릭 시, main 화면의 상태를 none으로 만들고 qna 화면을 출력한다.
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
    goNext(qIdx);   // 질문, 답변 생성
  }, 450);
}




