//if(!localStorage.count) {
//	localStorage.count = 0;
//	alert("Welcome! Just click the ball.");
//}
//
//ball.innerHTML = localStorage.count;

ball = document.getElementById("ball");
var ballClick = new function() {
//	localStorage.count = number(localStorage.coount) + 1;
	left = 5 + Math.floor(85 * random());
	top = 5 + Math.floor(85 * random());
	ball.style.left = left + "%";
	ball.style.top = top + "%";
}
