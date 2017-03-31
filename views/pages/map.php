<div class="return">
  <a href="timeline">
    <img src="assets/icons/backward-arrow.svg" alt="return">
  </a>
</div>
<div class="nav">
  <div>
    <p class="rocket">launch location</p>
    <p class="map-a"><a href="dataviz">Number of Rocket Launched</a></p>
  </div>
</div>
<div class="container-dataviz">
  <div class="legend">
    <div class="usa">
      <div class="green-past"></div>
      <p>USA</p>
    </div>
    <div class="urss">
      <div class="red-past"></div>
      <p>URSS</p>
    </div>
  </div>
  <div class="zoom">
    <p>Click on the legend to zoom on the launches sites</p>
    <p class="reset">Reset zoom</p>
  </div>
  <div id="map"></div>
</div>
<script src='assets/js/map.js'>
</script>
<script async defer
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBPTN1G3Y_hvRJYDoN5ZplEIEESulDvqws&callback=initMap"></script>
