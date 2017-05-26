(function() {
	"use strict";
	
//Variables
	var trailer = document.querySelector("#trailerVideo");
	var teaser = document.querySelector("#trailerSecondV");
	var playButton1 = document.querySelector("#trailerPlay");
	var playButton2 = document.querySelector("#teaserPlay");
	var trailerOgg = document.querySelector("#trailerOgg");
	var trailerWebm = document.querySelector("#trailerWebm");
	var teaserOgg = document.querySelector("#teaserOgg");
	var teaserWebm = document.querySelector("#teaserWebm");
	
//Funcations
	function togglePlay1() {
		console.log("fired from togglePlay");
		if(trailer.paused){
			trailer.play();
			playButton1.src = "images/"+"pause"+".svg";
		}
		else{
			trailer.pause();
			playButton1.src = "images/"+"play"+".svg";
		}
	}
	
	function togglePlay2() {
		//console.log("fired from togglePlay");
		if(teaser.paused){
			teaser.play();
			playButton2.src = "images/"+"pause"+".svg";
		}
		else{
			teaser.pause();
			playButton2.src = "images/"+"play"+".svg";
		}
	}
	
	function swapSource1(evt) {
		if(evt.currentTarget.id=="#trailerOgg"){
			trailer.src="videos/trailer.ogv";
		}else{
			trailer.src="videos/trailer.ogv";
		}
		//console.log(evt.currentTarget.id);
	}
	
	function swapSource2(evt) {
		if(evt.currentTarget.id=="#trailerWebm"){
			trailer.src="videos/trailer.webm";
		}else{
			trailer.src="videos/trailer.webm";
		}
		//console.log(evt.currentTarget.id);
	}
	
	function swapSource3(evt) {
		if(evt.currentTarget.id=="#teaserOgg"){
			teaser.src="videos/teaser_trailer.ogv";
		}else{
			teaser.src="videos/teaser_trailer.ogv";
		}
		console.log(evt.currentTarget.id);
	}
	
	function swapSource4(evt) {
		if(evt.currentTarget.id=="#teaserWebm"){
			teaser.src="videos/teaser_trailer.webm";
		}else{
			teaser.src="videos/teaser_trailer.webm";
		}
		console.log(evt.currentTarget.id);
	}
	
	
//Listeners
		playButton1.addEventListener("click", togglePlay1, false);
		playButton2.addEventListener("click", togglePlay2, false);
	
		trailerOgg.addEventListener("click", swapSource1, false);
		trailerWebm.addEventListener("click", swapSource2, false);
	
		teaserOgg.addEventListener("click", swapSource3, false);
		teaserWebm.addEventListener("click", swapSource4, false);
	
})();