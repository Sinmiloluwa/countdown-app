var countDownDate = new Date("Mar 18, 2022 00:00:00").getTime();
console.log(countDownDate);
var x = setInterval(function () {
	var now = new Date().getTime();

	var difference = countDownDate - now;

	var days = Math.floor(difference / (1000 * 60 * 60 *24));
	var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((difference % (1000*60)) / 1000);

	document.getElementById("days").innerHTML = days + "D:";
	document.getElementById("hours").innerHTML = hours + "H:";
	document.getElementById("minutes").innerHTML = minutes + "M:";
	document.getElementById("seconds").innerHTML = seconds + "S";

	document.getElementById("demo").style.color = "white";
	if (difference < 0) {
		clearInterval(x);

		document.getElementById("demo").innerHTML = "EXPIRED";
	}

}, 1000);
