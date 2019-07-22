(function(){
  Object.keys(document.getElementsByClassName('img-parallax')).forEach(
    function (key){ 

    var img = document.querySelectorAll('img')[key];
    var imgParent = img.parentNode;
  
      function parallaxImg () {
        var speed = img.dataset.speed;
        var imgY = imgParent.offsetTop;                
        var winY = this.scrollY;
        var winH = this.innerHeight;
        var parentH = imgParent.offsetHeight;
        var winBottom = winY + winH;
        var imgBottom = ((winBottom - imgY) * speed);      
        var imgTop = winH + parentH;
        
        imgPercent = ((imgBottom / imgTop) * 100) + (50 - (speed * 50));        
        img.style.top =   imgPercent + '%';
        img.style.transform = 'translate(-50%, -' + imgPercent + '%)';
    }
  
  document.addEventListener("scroll", function(event){
    parallaxImg();
  });
  
  parallaxImg();  
  })

  //small fixes if screen is not 3/4
  var screenWidth = screen.width;
  var screenHeight = screen.height;
  if(screenWidth/screenHeight < 0.75){
    Object.values(document.getElementsByClassName('block')).forEach( 
      function (value){  
        value.style.height = '50%';   
      })
}
})()


