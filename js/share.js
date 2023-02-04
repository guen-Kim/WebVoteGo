const url = 'https://baloalgo.netlify.app/';

//결과 + 프로그램 공유
function sendLink1(){
  var resultImg = document.querySelector('#resultImg');
  var resultAlt = resultImg.firstElementChild.alt;
  const shareTitle = '주요 공약으로 알아보는 후보 추천';
  const shareDes = infoList[resultAlt].name;
  const shareImage = url + 'img/image' + resultAlt + '.png';
console.log(shareImage);
  const shareURL = url + 'result' + resultAlt + '.html';
console.log(shareURL);

  Kakao.Link.sendDefault({
    objectType: 'feed',
    content: {
      title: shareTitle,
      description: shareDes,
      imageUrl: shareImage,
      link: {
        mobileWebUrl: shareURL,
        webUrl: shareURL
      },
    },

    buttons: [
      {
        title: '결과확인하기',
        link: {
          mobileWebUrl: shareURL,
          webUrl: shareURL,
        },
      },
    ]
  });
}

//프로그램 공유
function sendLink2(){
  const shareTitle = '주요 공약으로 알아보는 후보 추천';

  Kakao.Link.sendDefault({
    objectType: 'feed',
    content: {
      title: shareTitle,
      description: '조금의 시간만 투자하세요!',
      imageUrl: '../img/logo.png',
      link: {
        mobileWebUrl: url,
        webUrl: url
      },
    },

    buttons: [
      {
        title: '투표바로알GO',
        link: {
          mobileWebUrl: url,
          webUrl: url,
        },
      },
    ]
  });
}