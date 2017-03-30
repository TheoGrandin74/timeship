<?php

define('ROOT', dirname(__FILE__));
require 'views/functions/class.cache.php';
$Cache = new Cache(ROOT.'/tmp', 60);
$headers = array( 
  'Accept: application/json'
);

$ua = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36';

// Instantiate curl


if(! $launches = $Cache->read('launches'))
{
  $curl = curl_init();
  curl_setopt($curl, CURLOPT_URL, 'https://launchlibrary.net/1.2/launch?startdate=1961-01-01&enddate=1975-12-31&limit=56&mode=verbose');
  curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
  curl_setopt($curl, CURLOPT_HTTPHEADER, $headers); 
  curl_setopt($curl, CURLOPT_USERAGENT, $ua);
  curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
  $result = curl_exec($curl);
  curl_close($curl);

  // Json decode
  $result = json_decode($result);
  $launches = $result;
  $Cache->write('launches', $launches);

}