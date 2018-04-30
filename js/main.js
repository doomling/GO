$(document).on('load' , onViewport("#quote", "active", 0, function() {
  $('#quote').removeClass('hidden').addClass('fadein');
}));

$(document).on('load' , onViewport("#box-text", "active", 0, function() {
  $('#box-text').removeClass('hidden').addClass('fadein');
}));

$(document).on('load' ,  function() {
  $('#slogan').addClass('fadein');
});

let counter = 1;
$('#slider').on('click', function() {
  if (counter <= 5) {
  $('#img' + (counter - 1)).remove();
  $('#slider').append('<img src="img/jpg/'+ counter +'.jpg" id="img'+ counter +'">');
  counter++;
} else {
  $('#img' + (counter - 1)).remove();
  counter = 1;
    $('#slider').append('<img src="img/jpg/0.jpg" id="img0">');
}
});

$('#hamburger').on('click', function() {
  $('#menu-content').removeClass('hidden').addClass('hamburger-content');
});

$('#close').on('click', function() {
  $('#menu-content').addClass('hidden').removeClass('hamburger-content');
});

$('#menu-content li').on('click', function() {
  console.log('mama');
  $('#menu-content').addClass('hidden').removeClass('hamburger-content');
});

// third party code

function onViewport(el, elClass, offset, callback) {
  /*** Based on http://ejohn.org/blog/learning-from-twitter/ ***/
  var didScroll = false;
  var this_top;
  var height;
  var top;

  if(!offset) { var offset = 0; }

  $(window).scroll(function() {
      didScroll = true;
  });

  setInterval(function() {
    if (didScroll) {
      didScroll = false;
      top = $(this).scrollTop();

      $(el).each(function(i){
        this_top = $(this).offset().top - offset;
        height   = $(this).height();

        // Scrolled within current section
        if (top >= this_top && !$(this).hasClass(elClass)) {
          $(this).addClass(elClass);

          if (typeof callback == "function") callback(el);
        }
      });
    }
  }, 100);
}

/* mercado pago
(function(){function $MPC_load(){window.$MPC_loaded !== true && (function(){var s = document.createElement("script");s.type = "text/javascript";s.async = true;s.src = document.location.protocol+"//secure.mlstatic.com/mptools/render.js";var x = document.getElementsByTagName('script')[0];x.parentNode.insertBefore(s, x);window.$MPC_loaded = true;})();}window.$MPC_loaded !== true ? (window.attachEvent ?window.attachEvent('onload', $MPC_load) : window.addEventListener('load', $MPC_load, false)) : null;})();
*/
