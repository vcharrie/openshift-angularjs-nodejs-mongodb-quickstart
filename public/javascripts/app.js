angular.module('triplist', ['tlistServices'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.
            when('/tlists/:tlistId', { templateUrl: 'partials/item.html', controller: TListItemCtrl }).
            when('/tlists', 	     { templateUrl: 'partials/list.html', controller: TListListCtrl }).
            when('/new',             { templateUrl: 'partials/new.html',  controller: TListNewCtrl }).
            otherwise({ redirectTo: '/tlists' });
        }]);
