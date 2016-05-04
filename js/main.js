(function($, window){
    if(!$) {
        console.log('Jquery not loaded');
    }

    function getY() {
        return window.scrollY;
    }

    $(document).ready(function(){
        var $navbar = $('nav'),
            $header = $('header'),
            scrollLine = $header.height() - 100,
            scrolling = false;

        $(window).on('scroll', function(){
            if(!scrolling && scrollLine < getY()) {
                $navbar.addClass('scrolling');
                scrolling = true;
            } else if (scrolling && scrollLine > getY()) {
                $navbar.removeClass('scrolling');
                scrolling = false;
            }
        })

    });

})(jQuery, window);