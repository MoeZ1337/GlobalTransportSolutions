$(document).ready(function() {
	showHome();

$(".navbar-brand").on("click", function() {showHome()});
$("#services").on("click", function() {showServices()})
$("#guarentee").on("click", function() {showGuarentee()});
$("#invest").on("click", function() {showInvest()});
$("#careers").on("click", function() {showCareers()});
$("#about").on("click", function() {showAbout()});
})	

function changeMain(page,functions) {
	$.get(page, function(data) {
		$("main").html(data);
		if($.type(functions) === "array") {
			if(functions.length !== 0) { 
				$.each(functions, function(index, func) {
					func();
				})
			}
		} else if($.type(functions) === "function") {
			functions();
		} else {
			console.log("Functions could not be run " + functions);
			$("main").html("<div id='error' class='row'><h1>There was an error<h1></div>");
		}
	}).fail(function() {
		alert("" + page + " could not be loaded.");
	})
}

function addLorem() {
	var lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam faucibus sollicitudin orci. Suspendisse fringilla, turpis eget congue interdum, orci arcu elementum orci, vel fermentum lorem dui sit amet massa. Aenean accumsan, purus ullamcorper viverra tristique, tortor tellus auctor sem, a semper felis orci nec odio. Nullam porttitor elementum mattis. Sed convallis sagittis orci eget mattis. Pellentesque elementum turpis id consequat sagittis. Maecenas a mi non metus interdum interdum sed eget arcu. Nulla nec eros quis nulla luctus gravida nec non felis. Proin magna elit, venenatis nec blandit id, condimentum quis dolor. Etiam congue condimentum orci non convallis. Vestibulum auctor vehicula elit non porttitor."
	$("#lorem").html(lorem)
}

function showHome() {
	changeMain("pages/home.html", owlize);
}

function showServices() {
	changeMain("pages/services.html", [addLorem]);
}

function showGuarentee() {
	changeMain("pages/guarentee.html", []);
}

function showInvest() {
	changeMain("pages/invest.html", []);
}

function showCareers() {
	changeMain("pages/careers.html", []);
}

function showAbout() {
	changeMain("pages/about.html", []);
}

function showError() {
	changeMain("pages/error.html", []);
}

function owlize() {
	$()
	$("#carousel").owlCarousel({
		autoPlay : true,
		jsonPath : "img/imgNames.json",
		jsonSuccess : imgOwlize,
		navigation : true,
		navigationText : [
			"<span class='glyphicon glyphicon-chevron-left'></span>",
			"<span class='glyphicon glyphicon-chevron-right'></span>"],
		singleItem : true,
		stopOnHover : true
	})

	function imgOwlize(data) {
		$.each(data,function(i,img) {
			var $myImg = $("<img/>")
				.attr({"src":img.name,"alt":img.alt})
				.addClass("slide");	
			$("#carousel").append($myImg[0].outerHTML);		
		})
	}
}










