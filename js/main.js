$(document).ready(function () {
	$(".mobile-menu").on("click", function() {
		$(this).toggleClass("active");
		$("header nav").slideToggle();
	});
});