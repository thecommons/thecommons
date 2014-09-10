/**
 * Created by alistair on 9/7/14.
 */

var map;
var qbLatLong = new google.maps.LatLng(32.748934, -117.128582);

function initialize() {
    var mapOptions = {
        center: qbLatLong,
        zoom: 15,
        zoomControl: true
    };
    map = new google.maps.Map(document.getElementById("map"), mapOptions);

    var marker = new google.maps.Marker({
        position: qbLatLong,
        map: map,
        title: 'The Commons'
    });
    /*
    var infoContent = '<address><strong>The Commons</strong><br>'
        +'Queen Bee\'s Arts & Cultural Center<br>'
        +'3925 Ohio St<br>'
        +'San Diego 92104'
        +'</address>';

    var infowindow = new google.maps.InfoWindow({
        content: infoContent,
        position: qbLatLong
    });

    infowindow.open(map);
    */
}
google.maps.event.addDomListener(window, 'load', initialize);

google.maps.event.addDomListener(window, 'resize', function () {
    map.setCenter(qbLatLong);
});