$(function(){
    let header = $("#header");
    let introH = $("#intro").innerHeight();
    let scrollOffset = $(window).scrollTop();
    let headerHeight = $("#header").innerHeight();
    console.log(headerHeight);
    
    console.log('scrollOffset: ', scrollOffset);
    
    // fixed header
    checkScroll(scrollOffset);

    $(window).on("scroll", function() {
        scrollOffset = $(this).scrollTop();
        checkScroll(scrollOffset);
    });

    function checkScroll(scrollOffset) {
        if( scrollOffset >= introH ) {
            header.addClass("fixed");
        }
        else {
            header.removeClass("fixed");
        }
    }




    // Smooth scroll
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        let $this = $(this);
        let blockId = $this.data('scroll');
        let blockOffset = $(blockId).offset().top;

        $this.addClass("show");

        $("html, body").animate({
            scrollTop: blockOffset - headerHeight
        }, 500);

        $("#nav").removeClass("show");
        $("#burger").removeClass("show");
        
    });

});
