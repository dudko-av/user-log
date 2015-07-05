(function() {
    'use strict';

    angular
        .module('user-log')
        .factory('model', modelFactory);

    modelFactory.$inject = ['$http'];

    function modelFactory($http) {
        return function (modelName) {
            return new Model(modelName, $http);
        }
    }

    function Model(modelName, $http) {
        var url = '/' + modelName;
        angular.extend(this, {
            list: list
        });

        function list(filter, callback) {
            $http
                .post(url + '/list', filter || {})
                .then(function (res) {
                    callback(res.data);
                });
        }
    }

})();
