angular.module('tlistServices', ['ngResource'])
    .factory('TListDB', function($resource) {
        return $resource('tlists/:tlistId', {}, {
            query: { method: 'GET', params: { tlistId: 'tlists' }, isArray: true }
        });
  });