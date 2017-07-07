$(document).ready(function() {
	$('.container').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		centerMode: true,
		arrows: true,
	});

	var ID_ALBUM = '993671707412628'
	var ACCESS_TOKEN = 'EAAUmIopVGCsBABmBrSSy9BJ4sQOfZCLphPcLlrDAPx08yonAi2r6cZCGZC6TBE8joVtEX3Pfhi3vEVLLSGNietxfnRtjTkugN9ZBHyDBFfqr6UrsW4xzxZBqw89xWivQ42tCuL2Wl3jSserMGPacn6JCHG9QkVFJkZBqLmKoSSxAZDZD';
	var GALLERY = "https://graph.facebook.com/"+ID_ALBUM+"/photos?fields=images&limit=80&access_token="+ACCESS_TOKEN;

	$.ajax({
		url: GALLERY,
		method: 'GET',
		contentType: 'application/json',
		success: celebrate
	});

	function celebrate(response){
		for (i=0; i<Object.keys(response.data).length; i++)	{
			var url = response.data[i].images[8].source; 
			$('.container').slickAdd('<div class="item"><img src="'+url+'" /></div>');
		}
	}

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