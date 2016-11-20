owl.header = (function () {
    var configMap = {
        main_html        : String()
        +'<nav class="top-nav teal lighten-2">'
            +'<div class="container">'
                +'<ul id="slide-out" class="side-nav">'
                    +'<li>'
                    +'</li>'
                +'</ul>'
                +'<a href="#" data-activates="slide-out" class="button-collapse">'
                +'<i class="material-icons">menu</i></a>'
                +'<div class="nav-wrapper">'
                    +'<a class="page-title" style="font-size:20px">OWL Booking Meeting Room</a>'
                +'</div>'
            +'</div>'
        +'</nav>'
    },
    stateMap = {
        $container: null
    },

    //모듈간 상태 정보 공유
    jqueryMap = {}, // 제이쿼리 캐싱

    setJqueryMap, initModule;

    // DOM method
    setJqueryMap = function () {
        var $container = stateMap.$container;
        jqueryMap = {
            $container: $container
        };
    };

    //-------------- event handler end --------------------

    // public method
    initModule = function ($container) {
        stateMap.$container = $container;
        $container.find('header').html(configMap.main_html);
        setJqueryMap();
        //call panel menu
        $(".button-collapse").sideNav();
    };

    return {initModule: initModule};
}());
