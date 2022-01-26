var html = document.querySelector("html");
var body = document.querySelector("body");
window.onbeforeunload = function () {
	var style = getComputedStyle(html);
	var scroll = style.getPropertyValue("scroll-behavior");
	body.style.scrollBehavior = "unset";
	window.scrollTo(0, 0);
}