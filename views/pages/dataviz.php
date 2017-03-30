<div class="return">
  <a href="timeline">
    <img src="assets/icons/backward-arrow.svg" alt="return">
  </a>
</div>
<div class="nav">
  <div>
    <p class="rocket">Number of Rocket Launched</p>
    <p class="map-a"><a href="map">launch location</a></p>
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
  <div class="canvas">
    <canvas id="myChart" height="350" width="800"></canvas>
  </div>
</div>
<div class="footer">
  <p class="desc-form">Visualize the mission you want :</p>
  <form action='mission_report' method="get">
    <select name="mission" id="misson">
      <option value="1961">1961</option>
      <option value="1962">1962</option>
      <option value="1963">1963</option>
      <option value="1964">1964</option>
      <option value="1965">1965</option>
      <option value="1966">1966</option>
      <option value="1967">1967</option>
      <option value="1968">1968</option>
      <option value="1969">1969</option>
      <option value="1970">1970</option>
      <option value="1971">1971</option>
    </select>
  </form>
</div>
<!--<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.19.1/TweenMax.min.js"></script>
-->
<script src="assets/js/Chart.js"></script>
<script src="assets/js/dataviz.js"></script>