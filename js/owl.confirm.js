owl.confirm = (function () {
    var configMap = {
        main_html: String()
        +'<div class="owl-confirm-container">'
            +'<div class="owl-confirm-time">'
                +'<span class="owl-title">"예약 시간"</span>'
                +'<div>13:00 - 14:30</div>'
            +'</div>'
            +'<div class="owl-hr"></div>'
            +'<div class="owl-confirm-people">'
                +'<span class="owl-title">"참가 인원"</span>'
                +'<ul class="collection">'
                    +'<li class="collection-item avatar">'
                        +'<img src="images/yuna.jpg" alt="" class="circle">'
                        +'<span class="title">"이종현 책임"</span>'
                        +'<p>"기술연구소"<br>"시각화 분석 솔루션 파트"</p>'
                        +'<a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>'
                    +'</li>'
                    +'<li class="collection-item avatar">'
                        +'<i class="material-icons circle">folder</i>'
                        +'<span class="title">"여광은 수석"</span>'
                        +'<p>"기술연구소"<br>"시각화 분석 솔루션 파트"</p>'
                        +'<a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>'
                    +'</li>'
                    +'<li class="collection-item avatar">'
                        +'<i class="material-icons circle green">insert_chart</i>'
                        +'<span class="title">"산체스 선임"</span>'
                        +'<p>"기술연구소"<br>"시각화 분석 솔루션 파트"</p>'
                        +'<a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>'
                    +'</li>'
                    +'<li class="collection-item avatar">'
                        +'<i class="material-icons circle red">play_arrow</i>'
                        +'<span class="title">"카솔라 책임"</span>'
                          +'<p>"기술연구소"<br>"시각화 분석 솔루션 파트"</p>'
                          +'<a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>'
                    +'</li>'
                 +'</ul>'
            +'</div>'
            +'<div class="owl-confirm-button-container">'
                +'<div class="owl-confirm-ok">'
                    +'<a class="waves-effect waves-light btn">Confirm Booking</a>'
                +'</div>'
                +'<div class="owl-confirm-cancel">'
                    +'<a class="waves-effect waves-light btn">Cancel Booking</a>'
                +'</div>'
            +'</div>'
        +'</div>'
    },
    stateMap = {
        $append_target: null,
        $main         : null,
        $header       : null,
        $buttons      : null
    },
    jqueryMap = {},
    setJqueryMap, goLobby, cancelBooking, initModule;

    goLobby = function () {
        owl.lobby.initModule(stateMap.$append_target);
    }

    cancelBooking = function () {
        goLobby();
    }

    //-------------- event handler start ------------------
    onClickOk = function() {
        $.uriAnchor.setAnchor({
            page: 'lobby'
        });
        console.log("go lobby");
    }

    onClickCancel = function() {
        $.uriAnchor.setAnchor({
            page: 'lobby'
        });
        console.log("booing cancelBooking")
    }

    //-------------- event handler End --------------------
    setJqueryMap = function () {
        var $append_target = stateMap.$append_target,
            $buttons = $append_target.find(".owl-confirm-button-container");

        jqueryMap = {
            $ok    : $buttons.find(".owl-confirm-ok"),
            $cancel: $buttons.find(".owl-confirm-cancel")
        }
    };

    initModule = function ($append_target) {
        $append_target.find("main").html(configMap.main_html);
        stateMap.$append_target = $append_target;
        setJqueryMap();

        jqueryMap.$ok.click(onClickOk);
        jqueryMap.$cancel.click(onClickCancel);

        return true;
    };

    return {
        initModule: initModule
    }
}());
