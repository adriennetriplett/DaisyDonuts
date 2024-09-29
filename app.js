var donutDay = new Date("June 06, 2025 00:00:00").getTime();
  
var x = setInterval(function() {
	var now = new Date().getTime();
	var t = donutDay - now;
	var days = Math.floor(t / (1000 * 60 * 60 * 24));
	var hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60));
	var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((t % (1000 * 60)) / 1000);
	document.getElementById("countdown-day").innerHTML =days ;
	document.getElementById("countdown-hour").innerHTML =hours;
	document.getElementById("countdown-minute").innerHTML = minutes; 
	document.getElementById("countdown-second").innerHTML =seconds; 
	if (t < 0) {
        clearInterval(x);
        document.getElementById("countdown-end").innerHTML = "Today is National Donut Day!";
        document.getElementById("countdown-day").innerHTML ='0';
        document.getElementById("countdown-hour").innerHTML ='0';
        document.getElementById("countdown-minute").innerHTML ='0' ; 
        document.getElementById("countdown-second").innerHTML = '0'; 
	}
}, 1000);