// Initialise set variables and variables from DOM
var mode = "light";
var vehicalDetails = [
  ["$4,195", "355 HP", "129 V8"],
  ["$7,000", "450 HP", "200 V8"],
  ["$6,509", "370 HP", "170 V8"],
  ["$5,195", "360 HP", "200 V9"],
  ["$4,195", "355 HP", "129 V8"],
  ["$10,195", "500 HP", "900 V10"],
];
var l = vehicalDetails.length;
var i = 1;
var img = document.getElementById("crousel-img");
var det = document.getElementsByClassName('info');
var hex = document.getElementsByClassName("hexagonImg");
var modeSwitch = document.getElementsByClassName("fa-regular");
var container = document.getElementById("container");
var loading = document.getElementsByClassName("loading");

// Function to change the images for crousel and hex menu

function changeImgesForAll(direction) {
  var hexDot = hex[0].src.indexOf('.', 34);
  var imgDot = img.src.indexOf('.', 34);
  if (i == 6 && direction == 1) {
    i = 1;
  }
  else if (i == 1 && direction == -1) {
    i = 6;
  }
  else {
    i += direction;
  }
  img.src = img.src.slice(0, imgDot - 1) + (i) + img.src.slice(imgDot, img.src.length); // set the image
  for (var j = 0; j < hex.length; j++) {
    next = j + i + 1;
    if (next > 6) {
      next = 1 + j;
    }
    hex[j].src = (hex[0].src.slice(0, hexDot - 1) + (next) + hex[0].src.slice(hexDot, hex[0].src.length));
  }
  for (j = 0; j < det.length; j++) {
    det[j].innerHTML = vehicalDetails[i - 1][j]
  }
}

// Function to keep the crousel going

var functions = (function () { // function expression closure to contain variables
  function toggle() {
    i = (i + 1) // update the counter
    if (i > 6) {
      i = 1;
    }
    changeImgesForAll(1);
  }
  setInterval(toggle, 7000);
}
)();

// Function to control images using hex menu

function changeUsingHex(index) {
  var src = hex[index].src.indexOf('.', 34);
  var name = hex[index].src.slice(34, src);
  name = parseInt(name);
  i = name;
  changeImgesForAll(0);
}

function loadMode() {
  loading[0].style.display = 'none'
  container.style.display = '';
}

function switchMode(mode) {
  if (mode == 'light') {
    container.style.display = 'none';
    document.body.style.backgroundColor = 'rgb(199, 197, 197)'
    loading[0].style.display = 'block';
    setTimeout(loadMode, 4000);
    modeSwitch[1].style.display = '';
    modeSwitch[0].style.display = 'none';
    container.style.backgroundImage = 'url(src/bg.png)';
    document.documentElement.style.setProperty('--element-colors', 'black');
  }
  else {
    container.style.display = 'none';
    document.body.style.backgroundColor = 'rgb(43, 42, 42)'
    loading[0].style.display = 'block';
    setTimeout(loadMode, 4000);
    modeSwitch[0].style.display = '';
    modeSwitch[1].style.display = 'none';
    container.style.backgroundImage = 'url(src/dark-bg.png)';
    document.documentElement.style.setProperty('--element-colors', 'gray');

  }
}


//Set light mode as default
modeSwitch[0].style.display = 'none'; 