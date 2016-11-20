owl.schedule = (function () {
    var configMap = {
        main_html: String()
        +'<div class="schedule-list-item-container">'
            +'<div class="schedule-list-item">'
                +'<div class="card cyan lighten-4 waves-effect waves-green">'
                    +'<div class="card-content white-text">'
                      +'<span class="card-title">Unoccupied</span>'
                      +'<p>'
                      +'<span class="card-title">8:30 - 12:00</span>'
                    +'</div>'
                +'</div>'
            +'</div>'
            +'<div class="schedule-list-item">'
                +'<div class="card cyan darken-1 waves-effect waves-green">'
                    +'<div class="card-content white-text">'
                      +'<span class="card-title">Occupied</span>'
                      +'<p>'
                      +'<span class="card-title">12:00 - 14:00</span>'
                    +'</div>'
                +'</div>'
            +'</div>'
            +'<div class="schedule-list-item">'
                +'<div class="card cyan lighten-4 waves-effect waves-green">'
                    +'<div class="card-content white-text">'
                      +'<span class="card-title">Unoccupied</span>'
                      +'<p>'
                      +'<span class="card-title">14:00 - 16:00</span>'
                    +'</div>'
                +'</div>'
            +'</div>'
            +'<div class="schedule-list-item ">'
                +'<div class="card cyan darken-1 waves-effect waves-green">'
                    +'<div class="card-content white-text">'
                      +'<span class="card-title">Occupied</span>'
                      +'<p>'
                      +'<span class="card-title">16:00 - 17:30</span>'
                    +'</div>'
                +'</div>'
            +'</div>'
        +'</div>'
    },
    stateMap = {
        $append_target: null
    },
    jqueryMap = {},
    setJqueryMap, onClickSchedule, initModule;

    onClickSchedule = function (event) {
        $.uriAnchor.setAnchor({
            page: "booking"
        });
    }

    setJqueryMap = function () {
        var $append_target = stateMap.$append_target;

        jqueryMap = {
            $items: $append_target.find(".schedule-list-item")
        }
    };

    initModule = function ($append_target) {
        $append_target.find("main").html(configMap.main_html);
        stateMap.$append_target = $append_target;
        setJqueryMap();

        jqueryMap.$items.click(onClickSchedule);
        return true;
    };

    return {
        initModule: initModule
    }
}());
