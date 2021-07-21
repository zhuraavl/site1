

function initialize() {

    var markers = new Array();

    var mapOptions = {
        zoom: 5,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        center: new google.maps.LatLng(1, 1),
        
    };





var mapOneContent =
    '<div class="marker-box"><h4>Bagel bin</h4><p>110 S Washington St</p><img src="media/mapmarker.jpg"><p>Bagel Bin a seat at the bar or by the fireplace and start the evening off right with onion rings the size of your face, served on a branding iron, and super-creative pizzas.</p><div class="buttons-row"><a href="">Direction</a><a href="">Website</a></div></div>'



    var locations = [
        [new google.maps.LatLng(0, 0), 'Marker 1', mapOneContent],
        [new google.maps.LatLng(0, 1), 'Marker 2', 'Infowindow content for Marker 2'],
        [new google.maps.LatLng(0, 2), 'Marker 3', 'Infowindow content for Marker 3'],
        [new google.maps.LatLng(1, 0), 'Marker 4', 'Infowindow content for Marker 4'],
        [new google.maps.LatLng(1, 1), 'Marker 5', 'Infowindow content for Marker 5'],
        [new google.maps.LatLng(1, 2), 'Marker 6', 'Infowindow content for Marker 6']
    ];

    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

    var infowindow = new google.maps.InfoWindow();

    

    for (var i = 0; i < locations.length; i++) {

        // Append a link to the markers DIV for each marker
        $('#markers').append('<a class="marker-link" data-markerid="' + i + '" href="#">' + locations[i][1] + '</a> ');

        var marker = new google.maps.Marker({
            position: locations[i][0],
            map: map,
            title: locations[i][1],
        });

        // Register a click event listener on the marker to display the corresponding infowindow content
        google.maps.event.addListener(marker, 'click', (function (marker, i) {

            return function () {
                infowindow.setContent(locations[i][2]);
                infowindow.open(map, marker);
                var activeEle = (locations[i][1]);
                $('.marker-link').removeClass('active')
                $('.marker-link:contains('+activeEle+')').addClass('active');
            }

        })(marker, i));

        

        // Add marker to markers array
        markers.push(marker);
    }

    // Trigger a click event on each marker when the corresponding marker link is clicked
    $('.marker-link').on('click', function () {
        $('.marker-link').removeClass('active');
        $(this).addClass('active');
        google.maps.event.trigger(markers[$(this).data('markerid')], 'click');
    });

}




initialize();