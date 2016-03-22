
//function for Google Map:
//directions: https://developers.google.com/maps/tutorials/fundamentals/adding-a-google-map
function initMap(){
	  var mapDiv = document.getElementById('map');
        var map = new google.maps.Map(mapDiv, {
          center: {lat: 38.062303, lng: -78.891959},
          zoom: 6
        });

var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
var marker = new google.maps.Marker({
  position: {lat: 38.062303, lng: -78.891959},
  map: map,
  icon: iconBase + 'schools_maps.png'
});
};


$("document").ready(function(){
	//Scroll to the SecondSection
	$("#linkFromTop, #navFromTop").click(function(e){
		e.preventDefault();
		$("html, body").animate({
			scrollTop: $("#secondSection").offset().top
		}, 1000);
	});
	//to the About Section
	$("#navToAbout").click(function(e){
		e.preventDefault();
		$("html, body").animate({
			scrollTop: $("#aboutMe").offset().top
		}, 1500);
	});

	//to the Top/Home Section
	$("#homeFromTop").click(function(e){
		e.preventDefault();
		$("html, body").animate({
			scrollTop: $("#mainInfo").offset().top
		}, 1500);
	});	

	$(".show-title").mouseenter(function(){
		$(this).css("height", "80px");
		});
	$(".show-title").mouseleave(function(){
		$(this).css("height", "30px");
	});
});
