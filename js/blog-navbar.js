(function($, window){
    var $bar = $('#blog-bar'),
        height;

    $(window).scroll(function(){
        var h = scrollHeight();

        if(h >= getH1Height() && !$bar.hasClass('scrolled')) {
            $bar.addClass('scrolled');
        }

        if(h <= getH1Height() && $bar.hasClass('scrolled')){
            $bar.removeClass('scrolled');
        }
    });

    function scrollHeight() {
        return window.pageYOffset;
    }

    function getH1Height() {
        if(height) {
            return height;
        }

        height = $('h1').innerHeight();
    }
})(jQuery, window);