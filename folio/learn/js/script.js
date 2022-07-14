var scrolled;
window.onscroll = function() {
    scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if(scrolled > 100){
        $(".header").css({"background": "white"});
        $(".header").css({"color": "black"});
        $(".header").css({"box-shadow": " 0px 7px 6px 0px rgba(34, 60, 80, 0.2)"});
        $(".header").css({"-webkit-box-shadow": " 0px 7px 6px 0px rgba(34, 60, 80, 0.2)"});
        $(".header").css({"-moz-box-shadow": " 0px 7px 6px 0px rgba(34, 60, 80, 0.2)"});
        $(".brand-round").css({"background": "#40babd"});


    }
    if(100 > scrolled){
        $(".header").css({"background": "rgba(0,0,0,0)"});
        $(".header").css({"color": "white"});       
        $(".header").css({"box-shadow": " 0px 7px 6px 0px rgba(34, 60, 80, 0)"});
        $(".header").css({"-webkit-box-shadow": " 0px 7px 6px 0px rgba(34, 60, 80, 0)"});
        $(".header").css({"-moz-box-shadow": " 0px 7px 6px 0px rgba(34, 60, 80, 0)"});
        $(".brand-round").css({"background": "none"});
    }

};