(function () {
  function initRestaurantReviewMap() {
    var config = window.restaurantReviewMapConfig || {};
    var locations = window.restaurantReviewLocations || [];
    var containerId = config.containerId || 'restaurant-review-map';
    var mapContainer = document.getElementById(containerId);

    if (!mapContainer || !window.L || !Array.isArray(locations) || locations.length === 0) {
      return;
    }

    var map = L.map(containerId, {
      scrollWheelZoom: false,
      dragging: true,
      tap: true
    });

    var tileUrl = (config.tiles && config.tiles.url) || 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    var tileOptions = Object.assign({
      attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
    }, config.tiles && config.tiles.options ? config.tiles.options : {});

    L.tileLayer(tileUrl, tileOptions).addTo(map);

    var markers = [];
    locations.forEach(function (location) {
      if (!location) {
        return;
      }
      var lat = Number(location.latitude);
      var lng = Number(location.longitude);
      if (!Number.isFinite(lat) || !Number.isFinite(lng)) {
        return;
      }

      var marker = L.marker([lat, lng]).addTo(map);
      var popupContent = '<strong>' + (location.title || 'Restaurant') + '</strong>';
      if (location.address) {
        popupContent += '<br />' + location.address;
      }
      if (location.url) {
        popupContent += '<br /><a href="' + location.url + '">Read review</a>';
      }
      marker.bindPopup(popupContent);
      markers.push(marker);
    });

    if (markers.length === 0) {
      map.remove();
      mapContainer.innerHTML = '<p class="restaurant-review-map__empty">Location data unavailable.</p>';
      return;
    }

    if (markers.length === 1) {
      var center = markers[0].getLatLng();
      var zoom = Number(config.zoom);
      if (!Number.isFinite(zoom)) {
        zoom = 15;
      }
      map.setView(center, zoom);
    } else {
      var group = L.featureGroup(markers);
      map.fitBounds(group.getBounds().pad(0.1));
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initRestaurantReviewMap);
  } else {
    initRestaurantReviewMap();
  }
})();
