$(document).ready(function(){

    $(function() {
       $('select').selectric();
    });

   function moveSecondCopyImage(width) {
       if (width <= 900) {
           $('.right2').insertAfter('.copy-area-1 .right');
       } else {
           $('.right2').insertAfter('.copy-area-2 .left');
       }
   }
   moveSecondCopyImage( $(window).width() );
       $(window).on('resize', function(){
           moveSecondCopyImage( $(this).width() );
   });

    window.onload = function () {

        var blue = '#2980b9';
        var l = Snap('#logo');
        var p = l.select('path');

        l.append(p);

        p.attr({
            fill: blue,
            stroke: '#0066CC',
        });

        setInterval( function x() {
            var logoTitle = 'Leave it to a Geek';
            var logoRandom = '';
            var logoTitleContainer = l.text(0, '98%', '');
            var possible = "10";
            logoTitleContainer.attr({
                fontSize: 120,
                fontFamily: 'ikaros',
                fontWeight: '600',
                fill: '#003d32'
            });

            function generateRandomTitle(i, logoRandom) {
                setTimeout( function() {
                    logoTitleContainer.attr({ text: logoRandom });
                }, i*130 );
                setInterval( function x() {
                    $("#logo text").hide();
                    $("#logo text:last-of-type").show();
                    return x;
                }(), 5000 );

            }

            for( var i=0; i < logoTitle.length+1; i++ ) {
                logoRandom = logoTitle.substr(0, i);
                for( var j=i; j < logoTitle.length; j++ ) {
                    logoRandom += possible.charAt(Math.floor(Math.random() * possible.length));
                }
                generateRandomTitle(i, logoRandom);
                logoRandom = '';
            }
            return x;

        }(), 5000 );

    }

    console.log(navigator.userAgent);
    /* Adjustments for Safari on Mac */
    if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
        console.log('Safari detected, applying class...');
        $('svg').attr('class','safari');
    }

    if (navigator.userAgent.indexOf('Edge') != -1) {
        console.log('Microsoft Edge detected, applying class...');
        $('svg').attr('class','edge');
    }

    if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('iPhone') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
        console.log('iPhone detected, applying class...');
        $('svg').attr('class','ios');
    }

    if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('iPad') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
        console.log('iPad detected, applying class...');
        $('svg').attr('class','ios');
    }

});
