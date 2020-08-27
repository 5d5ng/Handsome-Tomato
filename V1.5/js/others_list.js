

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


// 나중에 식물 대표 사진들 다 저장했을 때 사진 붙이면 됨
var category;
var valueList = [];
document.addEventListener("DOMContentLoaded", function () {
  var data = location.href.split("&");
  var result3 = data[1].split("=");

  valueList.push(result3[1]);
  var result4 = data[2].split("=");

  valueList.push(result4[1]);

  var result5 = data[3].split("=");

  valueList.push(result5[1]);

  var result6 = data[4].split("=");
  category = result6[1];
  for (var i = 1; i <= 3; i++) {
    document.getElementById("s" + i).innerHTML = decodeURI(valueList[i - 1]);
  }

  if (decodeURIComponent(category) == "flowerpic") {
    window.addEventListener("load", function () {
      document.getElementById("title_set").innerHTML =
        "비슷하게 생긴 이런 꽃들도 있어요";
    });
  } else if (decodeURIComponent(category) == "fruitspic") {
    window.addEventListener("load", function () {
      document.getElementById("title_set").innerHTML =
        "비슷하게 생긴 이런 과일들도 있어요";
    });
  } else if (decodeURIComponent(category) == "mushroompic") {
    window.addEventListener("load", function () {
      document.getElementById("title_set").innerHTML =
        "비슷하게 생긴 이런 버섯들도 있어요";
    });
  } else {
    window.addEventListener("load", function () {
      document.getElementById("title_set").innerHTML =
        "비슷하게 생긴 이런 풀들도 있어요";
    });
  }
  for (var i = 1; i <= 3; i++) {
    DisplayPic(category, "img" + String(i), valueList[i - 1]);
  }
});
for (var i = 1; i <= 3; i++) {
  toDic(i);
}
function toDic(value) {
  //위키백과로 이동하게함 value는 숫자
  document
    .getElementById("item-" + value)
    .addEventListener("click", function () {
      window.location.href =
        "https://ko.wikipedia.org/wiki/" + valueList[value - 1]; //item-1부터 시작이라 -1뺌
    });
}

function MoveToPic() {
  window.location.href = category + ".html";
}
function MoveToHome() {
  window.location.href = "index.html";
}
function DisplayPic(category, name, value) {
  var div = document.getElementById(name);
  var arr = [".jpg", ".jpeg", ".png"];
  div.src = category + "/" + value + arr[0];
  div.onerror = function () {
    div.src = category + "/" + value + arr[1];
    div.onerror = function () {
      div.src = category + "/" + value + arr[2];
      div.onerror = function () {
        div.src = category + "/" + "이미지자료없음.jpg";
      };
    };
  };
}
// SDK를 초기화 합니다. 사용할 앱의 JavaScript 키를 설정해 주세요.
Kakao.init("0b24d43fac19bb4524f58083eb6b5439");

// SDK 초기화 여부를 판단합니다.
console.log(Kakao.isInitialized());
Kakao.Link.createDefaultButton({
  container: "#kakao-link-btn",
  objectType: "feed",
  content: {
    title: "디저트 사진",
    description: "아메리카노, 빵, 케익",
    imageUrl: "https://htomato.netlify.app/img/" + category + ".png",
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
    {
      title: "앱으로 이동",
      link: {
        mobileWebUrl: location.href,
      },
    },
  ],
});