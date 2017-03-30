<?php

class Cache
{

  public $dirname;

  public $duration; // cache lifetime (min)

  public function __construct($dirname, $duration){
    $this->dirname = $dirname;
    $this->duration = $duration;
  }

  public function write($filename, $content)
  {
    return file_put_contents($this->dirname.'/'.$filename.'.JSON', json_encode($content));
  }

  public function read($filename)
  {
    $file = $this->dirname.'/'.$filename.'.JSON';
    if(!file_exists($file))
    {
      return false;
    }  
    $lifetime = (time() - filemtime($file)) / 60;
    if($lifetime > $this->duration)
    {
      return false;
    }    
    return json_decode(file_get_contents($file));
  }


  public function delete($filename)
  {
    $file = $this->dirname.'/'.$filename.'.JSON';
    if(file_exists($file))
    {
      unlink($file);
    }
  }


  public function clear($filename)
  {
    $files = glob($this->dirname.'/*');
    foreach($files as $file)
    {
      unlink($file);
    }
  }

}