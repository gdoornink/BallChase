function ballClick() {
	var ball = event.target;
  if(ball.style.margin = "0px auto 0px 0px) {
		ball.style.backgroundColor = "rgb(0,0,0)";
		ball.style.borderColor = "rgba(0,0,0,0.2)";
		ball.innerHTML = "Left";
		} else {
		ball.style.backgroundColor = "rgb(10,50,0)";
		ball.style.borderColor = "rgba(10,50,0,0.2)";
		ball.innerHTML = "Right";
		}
}
