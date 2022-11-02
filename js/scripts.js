$( function() {
    $( "#dialog" ).dialog({
        autoOpen: false,
        show: {
            effect: "blind",
            duration: 1000
        },
        hide: {
            effect: "explode",
            duration: 1000
        }
    });

    $( "#opener" ).on( "click", function() {
        $( "#dialog" ).dialog( "open" );
    });
} );


$('.owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    navText: [ '', ' ' ],
    // autoplay: true,
    autoplayTimeout:2000,
    responsive:{
        0:{
            items:1
        },

        428:{
            items:1
        },

        768:{
            items:2
        },

        1000:{
            items:3
        }
    }
});

