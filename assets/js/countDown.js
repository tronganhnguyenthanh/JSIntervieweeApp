let countDown = 60
setInterval(() => {
 redirectPageWithCountDown()
},1000);
function redirectPageWithCountDown(){
  countDown = countDown - 1
  document.querySelector("#countDownTimer").innerHTML = "<h1>" + countDown + "</h1>"
  if(countDown <= 0){
   window.location.href = "index.html"
   return 0
  }
}