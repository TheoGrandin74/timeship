<?php
  include 'config.php';
  $q = isset($_GET['q']) ? $_GET['q'] : '';
    if($q == '' || $q == 'home'){
      $page = 'home';
    }
    else if($q == 'timeline'){
      $page = 'timeline';
    }
    else if($q == 'mission_report'){
      $page = 'mission_report';
    }
    else if($q == 'dataviz'){
      $page = 'dataviz';
    }
    else if($q == 'map'){
      $page = 'map';
    }
    else
    {
      $page = '404';
    }

    include 'views/partials/header.php';
    include 'views/pages/'.$page.'.php';
    include 'views/partials/footer.php';

?>