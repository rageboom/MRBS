owl.shell = (function () {
    var configMap = {
        anchor_schema_map: {
            page: {
                login   : true,
                lobby   : true,
                confirm : true,
                schedule: true,
                booking : true
            }
        },
        main_html : String()
        +'<header>'
        +'</header>'
        +'<main class="main-container">'
        +'</main>'
        +'<footer>'
        +'</footer>'
    },
    stateMap = {
        $container: null,
        anchor_map: {}
    },

    //모듈간 상태 정보 공유
    jqueryMap = {}, // 제이쿼리 캐싱

    setJqueryMap, copyAnchorMap, changeAnchorPart,
    onHashchange, showRoomSchedule, onClickRoom, clickMySchedule, initModule;
    // Utility method
    copyAnchorMap = function () {
        return $.extend(true, {}, stateMap.anchor_map);
    };

    changeAnchorPart = function (arg_map) {
        var anchor_map_revise = copyAnchorMap(),
        bool_return = true,
        key_name, key_name_dep;

        // 변경사항을 합치는 작업
        KEYVAL:
        for (key_name in arg_map) {
            if (arg_map.hasOwnProperty(key_name)) {
                // 의존적인 키는 건너 뜀
                if (key_name.indexOf('_') === 0) {continue KEYVAL;}
                // 독립적인 키 값을 업데이트
                anchor_map_revise[key_name] = arg_map[key_name];
                // 대응되는 의존적 키를 업데이트
                key_name_dep = '_' + key_name;
                if (arg_map[key_name_dep]) {
                    anchor_map_revise[key_name_dep] = arg_map[key_name_dep];
                } else {
                    delete anchor_map_revise[key_name_dep];
                    delete anchor_map_revise['_s' + key_name_dep];
                }
            }
        }

        try {
            $uriAnchor.setAnchor(anchor_map_revise);
        } catch (error) {
            $.uriAnchor.setAnchor(stateMap.anchor_map, null, true);
            bool_return = false;
        }
    }

    onHashchange = function (event) {
        var anchor_map_previous = copyAnchorMap(),
            anchor_map_proposed, _s_page_privious, _s_page_proposed,
            s_page_proposed;

        try {anchor_map_proposed = $.uriAnchor.makeAnchorMap();}
        catch (error) {
            $.uriAnchor.setAnchor(anchor_map_previous, null, true);
            return false;
        }
        stateMap.anchor_map = anchor_map_proposed;

        _s_page_privious = anchor_map_previous._s_page;
        _s_page_proposed = anchor_map_proposed._s_page;

        if (!anchor_map_previous || _s_page_privious !== _s_page_proposed) {
            s_page_proposed = anchor_map_proposed.page;

            switch (s_page_proposed) {
                case 'login':
                    owl.login.initModule(jqueryMap.$container);
                break;
                case 'lobby':
                    owl.lobby.initModule(jqueryMap.$container);
                break;
                case 'schedule':
                    owl.schedule.initModule(jqueryMap.$container);
                break;
                case 'confirm':
                    owl.confirm.initModule(jqueryMap.$container);
                break;
                case 'booking':
                    owl.booking.initModule(jqueryMap.$container);
                break;
                default:

            }
        }

        return false;
    }
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
        //call panel menu
        $(".button-collapse").sideNav();

        stateMap.$container = $container;
        $container.html(configMap.main_html);
        setJqueryMap();

        // 설정한 스키마를 사용하게 한다.
        $.uriAnchor.configModule({
            schema_map: configMap.anchor_schema_map
        });

        $(window).bind('hashchange', onHashchange).trigger('hashchange');
        $.uriAnchor.setAnchor({
            page: 'login'
        });
    };

    return {initModule: initModule};
}());
