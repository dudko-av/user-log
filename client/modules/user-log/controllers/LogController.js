(function() {
    'use strict';

    angular
        .module('user-log')
        .controller('LogController', LogController);

    LogController.$inject = ['$scope', 'model'];

    function LogController($scope, model) {
        $scope.logs = [];

        var log = model('log');

        var filter = {
            conditions: {},
            projection: null,
            options: {
                limit: 100,
                sort: {_id: -1}
            }
        };

        log.list(filter, function (res) {
            $scope.logs = res;
        });
    }

})();
