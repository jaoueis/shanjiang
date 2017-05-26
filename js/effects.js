// JavaScript Document

(function() {
	"use strict";
	console.log("SEAF Fired");
//Variables
	var bg = document.querySelector("body"), head = document.querySelector("header");
	
	var guide = document.querySelector("#guide");
	var screenPOS;
	var height;
	
//Functions
	function bgFadeIn() {
		TweenMax.to(bg, 2, {opacity: "1"});
		TweenMax.delayedCall(1.5, headerSlideIn);
	}
	
	function headerSlideIn() {
		TweenMax.to(head, .5, {top: "0px"});
	}
	
	function iconsFadeIn() {
		screenPOS=window.pageYOffset;
		height=guide.offsetTop;
		if(screenPOS+350>height) {
			guide.style.opacity=1;
			window.removeEventListener("scroll", iconsFadeIn, false);
			console.log("fired from iconsfadein");
		}
	}
	
//Listeners
	window.addEventListener("load", bgFadeIn, false);
	
	window.addEventListener("scroll", iconsFadeIn, false);
	
})();