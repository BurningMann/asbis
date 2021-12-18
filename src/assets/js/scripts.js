if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
  document.querySelector('html').classList.add('mobile') 
}

if(navigator.platform.match('Mac') !== null) {
  document.body.setAttribute('class', 'OSX');
}

window.onload = function(){
  
  function checkInner(width){
    if(window.innerWidth <= width){
      return true
    }else{
      return false
    }
  }

  $(window).resize(function() {

  });
  
  /* BURGER */
  $('.mobile-menu').click(function() {
    if($(this).is('.active')) {
        $(this).removeClass('active');
    } else {
        $(this).addClass('active');
    }
    $(".header-menu").toggleClass("active")
    $(".search-mobile").toggleClass("mt-20")
  });


  /*BURGER DROP*/
  $(".header-menu .title_svg").click(function(){
    $(this).toggleClass("active")
    $(this).siblings(".menu__links").slideToggle().css("display", "flex")
  })

  /* DEV SCRIPTS */

  $(".sitemap__opener").click(function(){
    $('.sitemap').toggleClass('open')
    $(this).toggleClass('active')
  })

  if(location.host.includes('localhost')){
    $('.sitemap__link').map(function(index,element){
      let link = $(element).attr('href')
      let re = /\/milady/gi;
      $(element).attr('href',link.replace(re,''))
    })
  }
    
}