// JavaScript Document 
(function () {
	"use strict"; 
	console.log("SEAF Fired");
	
//Variables
	var thambnail = document.querySelectorAll(".pic");
	var photos = ["shire", "rivendell", "elvendom", "argonath", "mordor"];
	var lightbox = document.querySelector("#lightbox");
	var places = document.querySelector("#places");
	var close = document.querySelector("#close");

//Functions
	function lightboxShow(evt) {
		evt.preventDefault();
		lightbox.style.display = "block";
		//controlled by dataoffset in all the anchors
		places.src="images/"+photos[evt.currentTarget.dataset.offset]+".jpg";
	}
	
	function closeLightbox() {
		lightbox.style.display = "none";
	}

//Listeners
	for(var i=0; i<thambnail.length; i++) {
		thambnail[i].addEventListener("click", lightboxShow, false);
	}
	
	close.addEventListener("click", closeLightbox, false);
})();
