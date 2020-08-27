// More API functions here:
// https://github.com/googlecreativelab/teachablemachine-community/tree/master/libraries/image

// the link to your model provided by Teachable Machine export panel
// const URL = "https://teachablemachine.withgoogle.com/models/WcMqNVdhk/"; 수정 전

const map = new Map();
var mushroomName = ['가지버섯','개나리광대버섯'];
map.set('붉은꼭지버섯',1);



const URL = "https://teachablemachine.withgoogle.com/models/CFVuZSqIR/";

let model, labelContainer, maxPredictions;

// Load the image model and setup the webcam
window.onload = async function init() {
  const modelURL = URL + "model.json";
  const metadataURL = URL + "metadata.json";

  // load the model and metadata
  // Refer to tmImage.loadFromFiles() in the API to support files from a file picker
  // or files from your local hard drive
  // Note: the pose library adds "tmImage" object to your window (window.tmImage)
  model = await tmImage.load(modelURL, metadataURL);
  maxPredictions = model.getTotalClasses();

  labelContainer = document.getElementById("label-container");
  for (let i = 0; i < maxPredictions; i++) {
    // and class labels
    labelContainer.appendChild(document.createElement("div"));
  }
};

// run the webcam image through the image model
async function predict() {
  $("#triggerUpload").hide();
  $(".btn").hide();
  $("#filePicker").hide();
  $(".fileName").hide();
  $("#back").hide();
  $("#container").show("fast", async () => {
    var image = document.getElementById("flower-image");
    const prediction = await model.predict(image, false);
    prediction.sort(function (a, b) {
      return a.probability > b.probability
        ? -1
        : a.probability < b.probability
        ? 1
        : 0;
    });
    MoveToSearch(
      prediction[0].className,
      prediction[1].className,
      prediction[2].className,
      prediction[3].className
    );
  });
}
function MoveToSearch(name, name2, name3, name4) {
  window.location.href =
    "resultpage.html?index=" +
    map.get(name) +
    "&index2=" +
    name2 +
    "&index3=" +
    name3 +
    "&index4=" +
    name4 +
    "&category=" +
    decodeURIComponent(valsplit[0]); //다음페이지에 정답두개 전송
}

var triggerUpload = document.getElementById("triggerUpload"),
  upInput = document.getElementById("filePicker"),
  preview = document.querySelector(".preview");

//force triggering the file upload here...
triggerUpload.onclick = function () {
  upInput.click();
};

upInput.onchange = function (e) {
  var uploaded = this.value,
    ext = uploaded.substring(uploaded.lastIndexOf(".") + 1),
    ext = ext.toLowerCase(),
    fileName = uploaded.substring(uploaded.lastIndexOf("\\") + 1),
    accepted = ["jpg", "png", "gif", "jpeg"];

  /*
    ::Add in blank img tag and spinner
    ::Use FileReader to read the img data
    ::Set the image source to the FileReader data
  */
  function showPreview() {
    preview.innerHTML = "<div class='loadingLogo'></div>";
    preview.innerHTML += '<img id="flower-image" />';
    var reader = new FileReader();
    reader.onload = function () {
      var img = document.getElementById("flower-image");
      img.src = reader.result;
    };
    reader.readAsDataURL(e.target.files[0]);
    preview.removeChild(document.querySelector(".loadingLogo"));
    document.querySelector(".fileName").innerHTML =
      fileName + "<b> Uploaded!</b>";
  }

  //only do if supported image file
  if (new RegExp(accepted.join("|")).test(ext)) {
    showPreview();
  } else {
    preview.innerHTML = "";
    document.querySelector(".fileName").innerHTML =
      "Hey! Upload an image file, not a <b>." + ext + "</b> file!";
  }
};
