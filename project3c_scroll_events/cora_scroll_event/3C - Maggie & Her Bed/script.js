// const progressTag = document.querySelector(".progress_bar");
document.addEventListener("scroll", function () {
  const pixelsScrolled = window.scrollY;
console.log(pageHeight)

const pageHeight = bodyTag.getBoundingClientrRect().height

const totalScrollableDistance = pageHeight - window.innerHeight;

const percentage = pixelsScrolled/ totalScrollableDistance;

progressTag.style.width = `${percentage *100}%`;
})


$('.img-parallax').each(function(){
  var img = $(this);
  var imgParent = $(this).parent();
  function parallaxImg () {
    var speed = img.data('speed');
    var imgY = imgParent.offset().top;
    var winY = $(this).scrollTop();
    var winH = $(this).height();
    var parentH = imgParent.innerHeight();


          
    var winBottom = winY + winH;

    
    if (winBottom > imgY && winY < imgY + parentH) {
      
      var imgBottom = ((winBottom - imgY) * speed);
      
      var imgTop = winH + parentH;
      
      var imgPercent = ((imgBottom / imgTop) * 100) + (50 - (speed * 50));
    }
    img.css({
      top: imgPercent + '%',
      transform: 'translate(-50%, -' + imgPercent + '%)'
    });
  }
  $(document).on({
    scroll: function () {
      parallaxImg();
    }, ready: function () {
      parallaxImg();
    }
  });
});