owl.booking = (function () {
    var configMap = {
        main_html : String()
        +'<div class="owl-booking-container">'
            +'<div class="owl-booking-time-container">'
                +'<span>Booking Time</span>'
                +'<div class="owl-booking-time-select-container">'
                    +'<div class="owl-booking-time">'
                        +'<div class="input-field">'
                            +'<select>'
                              +'<option value="" disabled selected>Choose your Time</option>'
                              +'<option value="1">12:30</option>'
                              +'<option value="2">13:00</option>'
                              +'<option value="3">13:30</option>'
                            +'</select>'
                            +'<label>Start Meeting</label>'
                        +'</div>'
                    +'</div>'
                    +'<div class="owl-booking-time">'
                        +'<div class="input-field">'
                            +'<select>'
                                +'<option value="" disabled selected>Choose your Time</option>'
                                +'<option value="1">12:30</option>'
                                +'<option value="2">13:00</option>'
                                +'<option value="3">13:30</option>'
                            +'</select>'
                            +'<label>End Meeting</label>'
                        +'</div>'
                    +'</div>'
                +'</div>'
            +'</div>'
            +'<div class="owl-booking-attendee-container">'
                +'<span>Attendee</span>'
                +'<div class="owl-booking-attendee-search">'
                    +'<div class="owl-booking-attendee-input">'
                        +'<input id="search" placeholder=Search... type="search" name="attandee-search" results=5 autosave=some_unique_value>'
                    +'</div>'
                    +'<div class="owl-booking-attendee-button">'
                        +'<a class="waves-effect waves-light btn" href="#modal1">Search</a>'
                    +'</div>'
                +'</div>'
                +'<div id="modal1" class="modal bottom-sheet">'
                  +'<div class="modal-content">'
                    +'<h2>Search List</h2>'
                    +'<ul class="collection owl-booking-search-result">'
                        +'<li class="collection-item avatar modal-action modal-close waves-effect waves-green">'
                            +'<img src="img/Mesut.png" alt="" class="circle">'
                            +'<span class="title">Mesut</span>'
                            +'<p>First Line <br>Second Line</p>'
                            +'<a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>'
                        +'</li>'
                        +'<li class="collection-item avatar modal-action modal-close waves-effect waves-green">'
                            +'<img src="img/Olivier.png" alt="" class="circle">'
                                +'<span class="title">Olivier</span>'
                            +'<p>First Line <br>Second Line</p>'
                            +'<a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>'
                        +'</li>'
                        +'<li class="collection-item avatar modal-action modal-close waves-effect waves-green">'
                            +'<img src="img/Koscielny.png" alt="" class="circle">'
                            +'<span class="title">Koscielny</span>'
                            +'<p>First Line <br>Second Line</p>'
                            +'<a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>'
                        +'</li>'
                        +'<li class="collection-item avatar modal-action modal-close waves-effect waves-green">'
                            +'<img src="img/Santi.png" alt="" class="circle">'
                            +'<span class="title">Santi</span>'
                            +'<p>First Line <br>Second Line</p>'
                            +'<a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>'
                        +'</li>'
                      +'</ul>'
                  +'</div>'
                  +'<div class="modal-footer">'
                    +'<a href="#!" class=" modal-action modal-close waves-effect waves-green btn-flat">Cancel</a>'
                  +'</div>'
                +'</div>'
                +'<div class="owl-booking-attendee-list">'
                    +'<ul class="collection">'
                        +'<li class="collection-item avatar">'
                            +'<img src="img/Mesut.png" alt="" class="circle">'
                            +'<span class="title">Mesut</span>'
                            +'<p>First Line <br>Second Line</p>'
                            +'<a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>'
                        +'</li>'
                        +'<li class="collection-item avatar">'
                            +'<img src="img/Olivier.png" alt="" class="circle">'
                            +'<span class="title">Olivier</span>'
                            +'<p>First Line <br>Second Line</p>'
                            +'<a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>'
                        +'</li>'
                        +'<li class="collection-item avatar">'
                            +'<img src="img/Koscielny.png" alt="" class="circle">'
                            +'<span class="title">Koscielny</span>'
                            +'<p>First Line <br>Second Line</p>'
                            +'<a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>'
                        +'</li>'
                        +'<li class="collection-item avatar">'
                            +'<img src="img/Santi.png" alt="" class="circle">'
                            +'<span class="title">Santi</span>'
                            +'<p>First Line <br>Second Line</p>'
                            +'<a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>'
                        +'</li>'
                     +'</ul>'
                +'</div>'
            +'</div>'
            +'<div class="owl-booking-button-container">'
                +'<div class="owl-booking-button-confirm">'
                    +'<a class="waves-effect waves-light btn-large">Confirm</a>'
                +'</div>'
                +'<div class="owl-booking-button-cancel">'
                    +'<a class="waves-effect waves-light btn-large">Cancel</a>'
                +'</div>'
            +'</div>'
        +'</div>'
    },
    stateMap = {
        $container: null,
    },

    //모듈간 상태 정보 공유
    jqueryMap = {}, // 제이쿼리 캐싱
    setJqueryMap, onClickConfirm, onClickCancel, initModule;

    onClickConfirm = function (event) {
        $.uriAnchor.setAnchor({
            page: "lobby"
        });
    }

    onClickCancel = function (event) {
        $.uriAnchor.setAnchor({
            page: "schedule"
        });
    }

    // DOM method
    setJqueryMap = function () {
        var $append_target = stateMap.$append_target,
            $buttons = $append_target.find(".owl-booking-button-container");
        jqueryMap = {
            $append_target: $append_target,
            $confirm      : $buttons.find(".owl-booking-button-confirm"),
            $cancel       : $buttons.find(".owl-booking-button-cancel")
        };
    };

    //-------------- event handler end --------------------

    // public method
    initModule = function ($append_target) {
        $append_target.find("main").html(configMap.main_html);
        stateMap.$append_target = $append_target;
        setJqueryMap();

        $('select').material_select();
        $('.modal').modal();

        jqueryMap.$confirm.click(onClickConfirm);
        jqueryMap.$cancel.click(onClickCancel);
    };

    return {initModule: initModule};
}());
