$(document).ready(function(){
    $('.carousel').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        arrows: false
    });

    document.querySelector('form').addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Message sent!');
    });

    document.getElementById('place-order').addEventListener('click', function() {
        window.location.href = 'https://wa.me/9111555679';
    });

    // Initialize and add the map
    function initMap() {
        var location = {lat: -25.344, lng: 131.036};
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 4,
            center: location
        });
        var marker = new google.maps.Marker({
            position: location,
            map: map
        });
    }

    // Load the Google Maps API script
    var script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap`;
    script.async = true;
    document.head.appendChild(script);
});