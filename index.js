function ballClick() {
	var ball = event.target;
	if(!ball.ballside) {
		ball.ballside = "left";
		alert(ball.ballside);
	}
	if(ball.ballside = "left") {
		ball.style.backgroundColor = "rgb(0,0,0)";
		ball.style.borderColor = "rgba(0,0,0,0.2)";
		ball.innerHTML = "Right";
		ball.style.margin = "0px 0px 0px auto";
		ball.ballside = "right";
	} else {
		ball.style.backgroundColor = "rgb(10,50,0)";
		ball.style.borderColor = "rgba(10,50,0,0.2)";
		ball.innerHTML = "Left";
		ball.style.margin = "0px auto 0px 0px";
		ball.ballside = "left";
	}
}
