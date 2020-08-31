/**
 *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
 *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables*/
/*
        var disqus_config = function () {
        this.page.url = PAGE_URL;  // Replace PAGE_URL with your page's canonical URL variable
        this.page.identifier = PAGE_IDENTIFIER; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
        };
        */
(function () {
  // DON'T EDIT BELOW THIS LINE
  var d = document,
    s = d.createElement("script");
  s.src = "https://handsometomato.disqus.com/embed.js";
  s.setAttribute("data-timestamp", +new Date());
  (d.head || d.body).appendChild(s);
})();



var rname1;
var rname2;
var rname3;
var rname4;
var category;
document.addEventListener("DOMContentLoaded", function () {
  // 5까지 나누기
  var temp = location.href.split("?"); //주소?로 나누기
  var data = temp[1].split("&"); //?뒷부분 &로 나누기
  var result1 = data[0].split("="); //&로 나눠진앞부분 =으로 나누기
  rname1 = result1[1]; //=으로 나눈부분 중 뒷부분(첫번째 정답)
  var result2 = data[1].split("="); //&로 나눠진뒷부분 =으로 나누기
  rname2 = result2[1]; //=으로 나눈부분 중 뒷부분(두번째 정답)
  var result3 = data[2].split("=");
  rname3 = result3[1];
  var result4 = data[3].split("=");
  rname4 = result4[1];
  var result5 = data[4].split("=");
  category = result5[1];
  document.getElementById("rname").innerText = decodeURIComponent(rname1); //id=rname인 부분을 rname1값으로 바꾸기

  DisplayPic(category);
});

function MoveToResult2() {
  window.location.href =
    "others_list.html?&index2=" +
    rname2 +
    "&index3=" +
    rname3 +
    "&index4=" +
    rname4 +
    "&category=" +
    category;
}

function MoveToHome() {
  window.location.href = "index.html";
}
function MoveToDic() {
  window.location.href = "https://ko.wikipedia.org/wiki/" + rname1;
}
function DisplayPic(category) {
  var img = new Image();
  var div = document.getElementById("pic");
  img.src = category + "/" + rname1 + ".jpg";
  console.log(img.src);
  img.onload = function () {
    div.appendChild(img);
  };
  img.onerror = function () {
    img.src = category + "/" + rname1 + ".jpeg";
    img.onload = function () {
      div.appendChild(img);
    };
    img.onerror = function () {
      img.src = category + "/" + rname1 + ".png";
      img.onload = function () {
        dib.appendChild(img);
      };
      img.onerror = function () {
        img.src = category + "/" + "이미지자료없음.jpg";
        div.appendChild(img);
      };
    };
  };
  img.style.height = "200px";
  img.style.width = "200px";
}

// SDK를 초기화 합니다. 사용할 앱의 JavaScript 키를 설정해 주세요.
Kakao.init("0b24d43fac19bb4524f58083eb6b5439");

// SDK 초기화 여부를 판단합니다.
console.log(Kakao.isInitialized());
Kakao.Link.createDefaultButton({
  container: "#kakao-link-btn",
  objectType: "feed",
  content: {
    title: "ForestSnap",
    description: "어떤 식물일까? 결과 확인하기",
    imageUrl:
      "https://htomato.netlify.app/img/"+category+".png",
    link: {
      mobileWebUrl: "https://developers.kakao.com",
      androidExecParams: "test",
    },
  },
  social: {
    likeCount: 10,
    commentCount: 20,
    sharedCount: 30,
  },
  buttons: [
    {
      title: "웹으로 이동",
      link: {
        mobileWebUrl: location.href,
      },
    },
  ],
});
