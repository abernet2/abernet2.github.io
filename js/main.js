function log() {
    console.log.apply(console, arguments);
    return arguments;
}

(function($, window, undefined){
    if(!$) {
        console.log('Jquery not loaded');
    }

    function getY() {
        return window.scrollY;
    }

    function dispatchEvent(name) {
        var event = new Event(name);
        window.dispatchEvent(event);
    }


    $(document).ready(function(){
        var $topnav = $('nav.top-nav'),
            $navbar = $('nav.bar-nav'),
            $header = $('header'),
            scrollLine = $header.height(),
            scrolling = false;

        function toggleBar(evt) {
            var $arrow = $('.arrow-bar'),
                $nav = $arrow.parent();
            $arrow.toggleClass('extended');
            $nav.toggleClass('condensed');
        }

        function customEvents(){
            var y = getY();
            if(!scrolling && scrollLine < y) {
                dispatchEvent('scrollPastHeader');
                scrolling = true;
            } else if (scrolling && scrollLine > y) {
                dispatchEvent('scrollUpToHeader');
                scrolling = false;
            }
        }

        function fixNavbar() {
            $navbar.toggleClass('fixed');
        }

        $($navbar).on('click', '.arrow-bar', toggleBar);
        $(window).on('scroll', customEvents);
        $(window).on('scrollPastHeader', console.log.bind(console));
        $(window).on('scrollUpToHeader', console.log.bind(console));

        $(window).on('scrollPastHeader', $navbar.addClass.bind($navbar, 'fixed'));
        $(window).on('scrollUpToHeader', $navbar.removeClass.bind($navbar, 'fixed'));
    });

})(jQuery, window);