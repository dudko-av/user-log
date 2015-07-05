(function() {
    'use strict';

    angular
        .module('user-log')
        .config(config);

    config.$inject = ['$stateProvider'];

    function config($stateProvider) {
        $stateProvider
            .state('index', {
                url: '',
                views: {
                    header: {
                        templateUrl: 'modules/user-log/views/layout/header.html'
                    },
                    content: {
                        template: '<div ui-view></div>'
                    }
                }
            })
            .state('index.log', {
                abstract: true,
                url: '/log',
                template: '<div ui-view></div>'
            })
            .state('index.log.list', {
                url: '/list',
                controller: 'LogController',
                templateUrl: '/modules/user-log/views/log-list.html'
            });
    }

})();