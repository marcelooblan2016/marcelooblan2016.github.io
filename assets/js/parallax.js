var Parallax = function(options){
    var __self = null;
    this._apply = function(array_params){
                var windowScroll = this.scrollY; 
                console.log(windowScroll);
                //parallax-first, parallax-second, parallax-third, website-quote
                var parallax_first = $(".parallax-first");
                var parallax_second = $(".parallax-second");
                var parallax_third = $(".parallax-third");
                var goomrx = $("#goomrx");

                if( parallax_first.length>=1 ){
                    parallax_first.css({
                        "transform" : 'translateY(' + windowScroll/10 + '%)',
                    });
                }

                if( parallax_second.length>=1 ){
                    parallax_second.css({
                        "transform" : 'translateY(' + windowScroll/12 + '%) rotate(8deg) ',
                    });
                }

                if( parallax_third.length>=1 ){
                    parallax_third.css({
                        "transform" : 'translateY(' + windowScroll/11 + '%) rotate(-5deg)',

                    });
                }
                var window_width = $(window).width();
                if( goomrx.length>=1 && window_width>768 ){
                    goomrx.css({
                        "transform" : 'translateY(' + windowScroll/9 + '%)',
                    });
                }
    }
    this.__construct = function(array_params){

         window.addEventListener('scroll', __self._apply);
    }
    __self = this;
    __self.__construct(options);
}