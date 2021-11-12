var video = document.querySelector("#player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate = (video.playbackRate * 0.95);
	console.log("New speed is " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate = (video.playbackRate * 1.05);
	console.log("New speed is " + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Original location " + video.currentTime);
	video.currentTime = video.currentTime + 15;
	if (video.currentTime == 67.403333){
		console.log("Going back to beginning")
		video.loop = true;
		console.log("New location " + 0);
	}
	else{
		console.log("New location " + video.currentTime);
	}
});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted == true){
		video.muted = false;
		console.log("Unmute");
		document.querySelector("#mute").innerHTML = "Mute";
	}
	else {
		video.muted = true;
		console.log("Mute");
		document.querySelector("#mute").innerHTML = "Unmute";
	}
});

document.querySelector("#slider").addEventListener("click", function() {
	var volume = document.getElementById('slider').value;
	video.volume = volume / 100;
	console.log(volume / 100);
	document.querySelector("#volume").innerHTML = volume + "%";
});

document.querySelector("#vintage").addEventListener("click", function() {
	document.body.classList.add('oldSchool');
	console.log("Old School");
});

document.querySelector("#orig").addEventListener("click", function() {
	document.body.classList.remove('oldSchool');
	console.log("Original");
});

