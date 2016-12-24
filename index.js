var greenBackground = "rgba(10,50,0,0.9)";
var greenBorder = "rgba(10,50,0,0.1)";
var royalBackground = "rgba(33,45,64,0.9)";
var royalBorder = "rgba(33,45,64,0.1)";

var balls = document.getElementsByClassName("ball");
for (var i=0; i < balls.length; i++) {
	balls[i].setAttribute('onclick','ballClick()');
	balls[i].ballcolor = "green";
	balls[i].style.backgroundColor = greenBackground;
	balls[i].style.borderColor = greenBorder;
}

function ballClick() {
	var ball = event.target;
		switch (ball.ballcolor) {
			case "green":
				ball.style.backgroundColor = royalBackground;
				ball.style.borderColor = royalBorder;
				ball.innerHTML = "";
				ball.ballcolor = "royal";
				ball.style.top = null;
				ball.style.bottom = "0vmax";
				ball.style.margin = "0px 0px 0px auto";
				break;
			case "royal":
				ball.style.backgroundColor = greenBackground;
				ball.style.borderColor = greenBorder;
				ball.innerHTML = "";
				ball.ballcolor = "green";
				ball.style.bottom = null;
				ball.style.top = "0vmax";
				ball.style.margin = "0px auto 0px 0px";
				break;
		}
}
