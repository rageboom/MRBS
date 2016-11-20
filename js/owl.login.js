owl.login = (function () {
    var configMap = {
        main_html: String()
        +'<div class="owl-login-container">'
            +'<div class="owl-login-logo">'
                +'<img src="img/owl-logo.svg" alt="" />'
            +'</div>'
            +'<div class="owl-login-form">'
                +'<div class="owl-login-id input-field">'
                    +'<input id="user_id" type="text" class="validate">'
                    +'<label for="user_id">User ID</label>'
                +'</div>'
                +'<div class="owl-login-pwd input-field">'
                    +'<input id="user_pwd" type="text" class="validate">'
                    +'<label for="user_pwd">Password</label>'
                +'</div>'
                +'<div class="owl-login-saveid">'
                    +'<input type="checkbox" class="filled-in" id="filled-in-box" checked="checked" />'
                    +'<label for="filled-in-box">Save ID</label>'
                +'</div>'
                +'<div class="owl-login-submit">'
                    +'<a class="waves-effect waves-light btn-large"><i class="material-icons left">cloud</i>button</a>'
                +'</div>'
            +'</div>'
        +'</div>'
    },
    stateMap = {$container: null}, //모듈간 상태 정보 공유
    jqueryMap = {}, // 제이쿼리 캐싱
    setJqueryMap, onClickLogin, verifyUser, setupShell, initModule;

    verifyUser = function (id, pwd) {
        if (id === "owl" && pwd === "owl") {
            $.uriAnchor.setAnchor({
                page: 'lobby'
            });

            owl.header.initModule(stateMap.$container);

            return true;
        }
    }

    setupShell = function () {
        owl.shell.initModule(stateMap.$container);
    }

    onClickLogin = function (event) {
        var id = jqueryMap.$id.val();
            pwd = jqueryMap.$pwd.val();
        verifyUser(id, pwd);
    }

    // DOM method
    setJqueryMap = function () {
        var $container = stateMap.$container,
            $login_form = $container.find(".owl-login-form");

        jqueryMap = {
            $container: $container,
            $id       : $login_form.find(".owl-login-id>input"),
            $pwd      : $login_form.find(".owl-login-pwd>input"),
            $submit   : $login_form.find(".owl-login-submit")
        };
    };

    //-------------- event handler end --------------------

    // public method
    initModule = function ($container) {
        stateMap.$container = $container;
        $container.find('main').html(configMap.main_html);
        setJqueryMap();

        jqueryMap.$submit.click(onClickLogin);
    };

    return {initModule: initModule};
}());
