
<?php
$options = array();

if(empty($_GET['mission']))
  $mission = rawurlencode("Vostok 1");
else
  $mission = rawurlencode($_GET['mission']);

foreach($launches as $launch){
  if(is_array($launch)){
    foreach($launch as $_launch){
      if(!empty($_launch-> missions)){
        $options[] = $_launch-> missions[0] -> name;
        if(rawurlencode($_launch-> missions[0] -> name) == $mission){
          $name = $_launch-> missions[0] -> name;
          $description = $_launch-> missions[0] -> description;
          $agency = $_launch -> location -> pads[0] -> agencies[0] -> name;
          $lat = $_launch -> location -> pads[0] -> latitude;
          $long = $_launch -> location -> pads[0] -> longitude;
        }    
      }  
    }
  }
}
?>

<div class="return">
  <a href="timeline">
    <img src="assets/icons/backward-arrow.svg" alt="return">
  </a>
</div>
<div class="container-mission">
  <div class="mission-info">
    <div class="mission-name">
      <h2>Name of the mission</h2>
      <p><?= $name?></p>
      <div class="style"></div>
    </div>
    <div class="mission-description">
      <h2>Mission description</h2>
      <p><?= $description?></p>
      <div class="style"></div>
    </div>
    <div class="agency">
      <h2>Agency</h2>
      <p><?= $agency?></p>
      <div class="style"></div>
    </div>
  </div>
  <div class="map">
    <div class="coord">
      <h2>Coordinates</h2>
      <p><?=$lat?> <?=$long?></p>
      <div class="style"></div>
    </div>
    <div id="map"></div>
  </div>
</div>
<div class="footer">
  <p class="desc-form">Visualize the mission you want :</p>
  <form action='mission_report' method="get">
    <select name="mission" id="misson">
      <?php foreach($options as $option){ ?>
      <option value="<?= $option;?>"><?= $option;?></option>
      <?php } ?>
    </select>
    <input type="submit">
  </form>
</div>
<script>
  function initMap() {
    var crd = {lat: <?= $lat?>, lng: <?= $long?>};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 13,
      center: crd,
      mapTypeId: google.maps.MapTypeId.SATELLITE,
      disableDefaultUI: true
    });
    var marker = new google.maps.Marker({
      position: crd,
      map: map
    });
  }
</script>
<script async defer
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBPTN1G3Y_hvRJYDoN5ZplEIEESulDvqws&callback=initMap"></script>
