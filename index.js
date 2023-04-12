const startbtn = document.querySelector(".btn1");
const stopbtn = document.querySelector(".stop1");
const resetbtn = document.querySelector(".reset1");
const information = document.querySelector(".span1");


var i = 0;
information.innerHTML = 0;
function clock() {
  information.innerHTML = i 
  i++;
}


startbtn.addEventListener("click", function () {
  time = setInterval(clock, 1000);
  stopbtn.disabled = false;
  startbtn.disabled = true;
});


stopbtn.addEventListener("click", function () {
  clearInterval(time);
  stopbtn.disabled = true;
  startbtn.disabled = false;
});


resetbtn.addEventListener("click", function (e) {
  clearInterval(time);
  i = 0;
  information.innerHTML = 0;
  startbtn.disabled = false;
  stopbtn.disabled = false;
});


information2.innerHTML = 0;
function clock2() {
  span1.innerHTML = i + "m"
  if(i === 2000){
    stopbtn2.disabled = true;
    clearInterval(timer);
  }
  i++
}