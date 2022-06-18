   function Close() 
   {
     document.getElementById('header').style.cssText = 'animation-name:back; animation-duration:1.5s; display:block';
     document.getElementById('open').style.cssText = 'display:none';
     setTimeout(Opener, 1500);
   }
   function Opener()
   {
     document.getElementById('open').style.cssText = 'display:block';
     document.getElementById('header').style.cssText = 'display:none';
   }
   function Open() 
   {
    document.getElementById('close').style.cssText = 'display:block';
    document.getElementById('open').style.cssText = 'display:none';
    document.getElementById('header').style.cssText = 'animation-name:slidein; animation-duration:1.5s; display:block';
   }
