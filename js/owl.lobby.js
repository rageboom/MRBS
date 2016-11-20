owl.lobby = (function () {
    var configMap = {
        main_html: String()
        +'<div class="lobby-container">'
            +'<div class="lobby-booklist-container">'
                +'<span class="owl-title">My Booking</span>'
                +'<div class="lobby-booklist-item-container">'
                    +'<div class="z-depth-1 lobby-booklist-item">'
                        +'<div class="book-room">M1</div>'
                        +'<div class="book-time">13:00 - 14:30</div>'
                    +'</div>'
                    +'<div class="z-depth-1 lobby-booklist-item">'
                        +'<div class="book-room">M2</div>'
                        +'<div class="book-time">15:00 - 16:30</div>'
                    +'</div>'
                +'</div>'
            +'</div>'
            +'<div class="owl-hr"></div>'
            +'<div class="lobby-room-container">'
                +'<span class="owl-title">Room Status</span>'
                +'<div class="lobby-room-item-container">'
                    +'<div class="lobby-room-item good">'
                        +'<div class="name">M1</div>'
                        +'<div class="book-count">2건 예약</div>'
                        +'<div class="spec good">'
                            +'<span>Room Spec</span>'
                            +'<div class="max">20 person</div>'
                            +'<div class="utility">wifi, conference call</div>'
                        +'</div>'
                        +'<div class="enviroment good">'
                            +'<span>Evironment</span>'
                            +'<div class="temp">24도</div>'
                            +'<div class="humidity">35%</div>'
                            +'<div class="cabon">35ppm</div>'
                        +'</div>'
                    +'</div>'
                    +'<div class="lobby-room-item bad">'
                        +'<div class="name">M2</div>'
                        +'<div class="book-count">3건 예약</div>'
                        +'<div class="spec bad">'
                            +'<span>Room Spec</span>'
                            +'<div class="max">8 person</div>'
                            +'<div class="utility">Notbook, wifi, conference call</div>'
                        +'</div>'
                        +'<div class="enviroment bad">'
                            +'<span>Evironment</span>'
                            +'<div class="temp">24도</div>'
                            +'<div class="humidity">35%</div>'
                            +'<div class="cabon">35ppm</div>'
                        +'</div>'
                    +'</div>'
                +'</div>'
                +'<div class="lobby-room-item-container">'
                    +'<div class="lobby-room-item soso">'
                        +'<div class="name">M3</div>'
                        +'<div class="book-count">8건 예약</div>'
                        +'<div class="spec soso">'
                            +'<span>Room Spec</span>'
                            +'<div class="max">6 person</div>'
                            +'<div class="utility">wifi</div>'
                        +'</div>'
                        +'<div class="enviroment soso">'
                            +'<span>Evironment</span>'
                            +'<div class="temp">24도</div>'
                            +'<div class="humidity">35%</div>'
                            +'<div class="cabon">35ppm</div>'
                        +'</div>'
                    +'</div>'
                    +'<div class="lobby-room-item good">'
                        +'<div class="name">M4</div>'
                        +'<div class="book-count">8건 예약</div>'
                        +'<div class="spec good">'
                            +'<span>Room Spec</span>'
                            +'<div class="max">8 person</div>'
                            +'<div class="utility">Notbook, wifi, conference call</div>'
                        +'</div>'
                        +'<div class="enviroment good">'
                            +'<span>Evironment</span>'
                            +'<div class="temp">24도</div>'
                            +'<div class="humidity">35%</div>'
                            +'<div class="cabon">35ppm</div>'
                        +'</div>'
                    +'</div>'
                +'</div>'
                +'<div class="lobby-room-item-container">'
                    +'<div class="lobby-room-item soso">'
                        +'<div class="name">M5</div>'
                        +'<div class="book-count">1건 예약</div>'
                        +'<div class="spec soso">'
                            +'<span>Room Spec</span>'
                            +'<div class="max">8 person</div>'
                            +'<div class="utility">Notbook, wifi, conference call</div>'
                        +'</div>'
                        +'<div class="enviroment soso">'
                            +'<span>Evironment</span>'
                            +'<div class="temp">24도</div>'
                            +'<div class="humidity">35%</div>'
                            +'<div class="cabon">35ppm</div>'
                        +'</div>'
                    +'</div>'
                    +'<div class="lobby-room-item good">'
                        +'<div class="name">M6</div>'
                        +'<div class="book-count">8건 예약</div>'
                        +'<div class="spec good">'
                            +'<span>Room Spec</span>'
                            +'<div class="max">8 person</div>'
                            +'<div class="utility">Notbook, wifi, conference call</div>'
                        +'</div>'
                        +'<div class="enviroment good">'
                            +'<span>Evironment</span>'
                            +'<div class="temp">24도</div>'
                            +'<div class="humidity">35%</div>'
                            +'<div class="cabon">35ppm</div>'
                        +'</div>'
                    +'</div>'
                +'</div>'
            +'</div>'
        +'</div>'
    },
    stateMap = {
        $append_target: null,
        $main         : null,
        $header       : null
    },
    jqueryMap = {},
    setJqueryMap, showRoomSchedule, onClickRoom, initModule;


    // DOM method showRoomSchedule
    // 목적: 방의 스케쥴을 보여준다.
    showRoomSchedule = function () {
        owl.schedule.initModule(stateMap.$append_target);
    }
    // DOM method showBookInformation
    // 목적: 방의 스케쥴을 보여준다.
    showBookInformation = function () {
        owl.confirm.initModule(stateMap.$append_target);
    }

    //-------------- event handler start ------------------
    onClickRoom = function (event) {
        console.log(event);
        $.uriAnchor.setAnchor({
            page: 'schedule'
        });
        return false;
    }
    onClickBook = function (event) {
        console.log(event);
        $.uriAnchor.setAnchor({
            page: 'confirm'
        });
        return false;
    }
    setJqueryMap = function () {
        var $append_target = stateMap.$append_target;

        jqueryMap = {
            $header: $append_target.find("header"),
            $main  : $append_target.find("main"),
            $room  : $append_target.find(".lobby-room-item"),
            $book  : $append_target.find(".lobby-booklist-item")
        }
    };

    initModule = function ($append_target) {
        $append_target.find("main").html(configMap.main_html);
        stateMap.$append_target = $append_target;
        setJqueryMap();

        jqueryMap.$book.click(onClickBook);
        jqueryMap.$room.click(onClickRoom);

        return true;
    };

    return {
        initModule: initModule
    }
}());
