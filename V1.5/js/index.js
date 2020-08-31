Kakao.init("0b24d43fac19bb4524f58083eb6b5439");
// Kakao.Link.createDefaultButton(settings);
Kakao.Link.createDefaultButton({
  container: "#kakao-link-btn",
  objectType: "feed",
  content: {
    title: "Forest Snap",
    description: "궁금한 꽃, 버섯, 열매, 풀 사진을 찍어 찾아보세요",
    link: {
      mobileWebUrl: "https://developers.kakao.com",
      androidExecParams: "test",
    },
  },
  buttons: [
    {
      title: "웹으로 이동",
      link: {
        mobileWebUrl: "https://developers.kakao.com",
      },
    },
  ],
});

