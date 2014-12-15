/**
 *  jQuery EasingScroll - v1.0.0
 *  Easy animated scrolling
 *  http://bryanparonto.com
 *
 *  Made by Bryan Paronto <bryan@bryanparonto.com>
 *  Under MIT License
 *
 *  This plugin REQUIRES jQuery Easing min v1.3 
 *  http://gsgd.co.uk/sandbox/jquery/easing/
 */
/**
 * 
 * Example Usage:
 *   js: (in DOM-ready wrapper)
 *
 *  $('[data-scroll-to]').easingScroll();
 *
 *  The selector should match the attribute contaniing the scrollTo target
 *   
 *  html:
 *  <ul>
 *      <li><a href="#leadership" data-scroll-to="#leadership">Leadership</a></li>
 *      <li><a href="#our-values" data-scroll-to="#our-values">Our Values</a></li>
 *      <li><a href="#statistics" data-scroll-to="#statistics">Statistics</a></li>
 *  </ul>
 *
 */

;(function ( $, window, document, undefined ) {


    $.fn.easingScroll = function ( options ) {

        console.log('easingScroll');

        var defaults = {    
            el: $('[data-scroll-to]'),
            offsetTop: 0,
            easing: 'easeInOutQuint',
            duration: 500
        };

        

        // Extend out defaults with passed in options.
        var settings = $.extend( {}, defaults, options );

        this.each(function() {

            var $this = $(this);

            $this.click(function(e){
                e.preventDefault();

                var $target = $( $this.attr( attrTrim( settings.el.selector ) ) );

                var scrollTopOffset = $target.offset().top - settings.offsetTop;

                $('html, body').animate({
                    scrollTop: scrollTopOffset
                }, settings.duration, settings.easing );
            })
        });

        // chain jQuery functions
        return this;
    };



    /**
     * Trims square brackets off a string
     */
    var attrTrim = function( str ){
        return str.replace('[', '').replace(']','');
    };



})( jQuery, window, document );

