/**
    * ------------------------------------------------------------
    * Scroll Position
    * ------------------------------------------------------------
*/
$(window).scroll(function() {
    // var height = $(window).scrollTop();

    // if(height  > 10) {
    //     $('#header').css('opacity', '0.95');
    // }else{
    //     $('#header').css('opacity', '1');
        
    // }
});


/**
     * ------------------------------------------------------------
     * Slider
     * ------------------------------------------------------------
*/

;

$(document).ready(function(){
      // jQuery('.cycle-slideshow').css('overflow', 'visible')
});



$(document).ready(function(){
     $( '.slide-services' ).cycle();
});

$(document).ready(function(){
      // jQuery('.cycle-slide').not('.cycle-slide.cycle-slide-active').addClass('slider-space')
});

$(document).ready(function(){
      // jQuery('.cycle-slide.cycle-slide-active').addClass('slider-space-active')
});

// $(document).ready(function(){

// $('.cycle-slideshow').on('cycle-before', function (event, optionHash, outgoingSlideEl, incomingSlideEl, forwardFlag) {
     // $(incomingSlideEl).addClass('slider-space-active');
// });

// });

// $(document).ready(function(){

// $('.cycle-slideshow').on('cycle-before', function (event, optionHash, outgoingSlideEl, incomingSlideEl, forwardFlag) {

  // if ($(".slider-space-active")[0]){
    // Do something if class exists
     // $(outgoingSlideEl).removeClass('slider-space-active').addClass('slider-space');
// } else {
    // Do something if class does not exist
     // $(outgoingSlideEl).addClass('slider-space');
// }
// });

// });


/**
     * ------------------------------------------------------------
     * Turn off Console issues
     * ------------------------------------------------------------
*/


// console.log = function() {}





/**
     * ------------------------------------------------------------
     * Slick Js
     * ------------------------------------------------------------
*/
$(function() {
    $("#services-slider").jCarouselLite({
        btnNext: ".next",
        btnPrev: ".prev",
        visible: 5,
        // circular: 
    });
});


/**
     * ----------------------------------------------------------------
     * MatchHeight
     * ----------------------------------------------------------------
*/

$(document).ready(function(){
         $('.div-match-height').matchHeight();
});
$(document).ready(function(){
         $('.div-home-events-stable').matchHeight();
});
$(document).ready(function(){
         $('.div-content-sidebar').matchHeight();
});
$(document).ready(function(){
         $('.single-event-height').matchHeight();
});
$(document).ready(function(){
         $('.right-sidebar-page-stablelizer').matchHeight({
                property: 'min-height',
         });
});

/**
     * ----------------------------------------------------------------
     * Form Placeholder Text
     * ----------------------------------------------------------------
*/

$(document).ready(function(){
         $('input, textarea').placeholder();
});

/**
     * ----------------------------------------------------------------
     * Events Calendar
     * ----------------------------------------------------------------
*/


/**
     * ----------------------------------------------------------------
     * Gallery 
     * ----------------------------------------------------------------
*/


/**
     * ------------------------------------------------------------
     * Media Player
     * ------------------------------------------------------------
*/
$('video,audio').mediaelementplayer();


/**
     * ------------------------------------------------------------
     * Hiding alt
     * ------------------------------------------------------------
*/

$(".gallery-trigger a img").hover(function(){

        // Get the current title
        var title = $(this).attr("title");

        // Store it in a temporary attribute
        $(this).attr("tmp_title", title);

        // Set the title to nothing so we don't see the tooltips
        $(this).attr("title","");

    });

  $(".gallery-trigger a img").click(function(){// Fired when we leave the element

        // Retrieve the title from the temporary attribute
        var title = $(this).attr("tmp_title");

        // Return the title to what it was
        $(this).attr("title", title);

    });

  /**
       * ------------------------------------------------------------
       * Image Lazy Loading 
       * ------------------------------------------------------------
  */


$("img.lazy").show().lazyload({
    // effect : "fadeIn",
     skip_invisible : true
});





  /**
       * ------------------------------------------------------------
       * Accordion
       * ------------------------------------------------------------
  */
try{Typekit.load();}catch(e){}

(function($) {
// What does the accordion plugin do?
$.fn.accordion = function(options) {

  
  if (!this.length) { return this; }

  var opts = $.extend(true, {}, $.fn.accordion.defaults, options);

  this.each(function() {
    var $this = $(this).find('dl');
    
    var $all_panels = $this.find("dd");


      $this.find("dt:first .arrow").addClass('down');
  

    $this.find("dt > a").on('click', function(event){
      
      event.preventDefault();
      
      if(!$(this).parent().hasClass('active'))
      {
      
       $all_panels.slideUp();
       var $active = $('dl .active').removeClass('active');
       
       $(this).parent().next().slideDown().addClass('active');
       $(this).parent().addClass('active');
       

         $active.filter('dt').find('.arrow').removeClass('down');
         $(this).parent().find('.arrow').addClass('down');
       
      }
      
    });

  });

  return this;
};

// default options
$.fn.accordion.defaults = {};
})(jQuery);



// call plugin
$(".accordion").accordion();






   



