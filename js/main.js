$(document).ready(function () {
	$(".mobile-menu").on("click", function() {
		$(this).toggleClass("active");
		$("header nav").slideToggle();
	});
});

$(".tabs-panel a").on("click", function(e) {
	e.preventDefault();
	var tabsLinks = [
		$(".tabs-panel a.price1"),
		$(".tabs-panel a.price2")
	];
	var tabsBlocks = [
		$(".tabs-container .tab#price1"),
		$(".tabs-container .tab#price2"),
	];
	tabs(e.target, tabsLinks, tabsBlocks)
});

$("#service-type1 .price-item").on("click", function(e) {
	var tabsLinks = [
		$(".price-item.remont-price1"),
		$(".price-item.remont-price2"),
		$(".price-item.remont-price3")
	];
	var tabsBlocks = [
		$(".service-type div#remont-price1"),
		$(".service-type div#remont-price2"),
		$(".service-type div#remont-price3")
	];
	if ($(e.target).hasClass("price-item")) {
		var target = e.target;
	} else {
		var target = $(e.target).closest(".price-item")
	}
	tabs(target, tabsLinks, tabsBlocks)
});

$("#service-type2 .price-item").on("click", function(e) {
	var tabsLinks = [
		$(".price-item.design-price1"),
		$(".price-item.design-price2"),
		$(".price-item.design-price3")
	];
	var tabsBlocks = [
		$(".service-type div#design-price1"),
		$(".service-type div#design-price2"),
		$(".service-type div#design-price3")
	];
	if ($(e.target).hasClass("price-item")) {
		var target = e.target;
	} else {
		var target = $(e.target).closest(".price-item")
	}
	tabs(target, tabsLinks, tabsBlocks)
});


function tabs(target, tabsLinks, tabsBlocks) {
    for (var i = 0; i < tabsLinks.length; i++) {
        tabsLinks[i].removeClass("active");
        $(target).addClass("active")
        tabsBlocks[i].removeClass("active");
        if (tabsLinks[i].hasClass("active")) {
            tabsBlocks[i].addClass("active");
        };
    };
};