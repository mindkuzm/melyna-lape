$(document).ready(function() {
});
function initMap() {
	var uluru = {lat: 54.911680, lng: 23.937070};
	var map = new google.maps.Map(document.getElementById('map'), {
	    zoom: 13,
	    center: uluru
	});
	var marker = new google.maps.Marker({
	    position: uluru,
	    map: map
	});
}