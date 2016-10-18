(() => {
    'use strict';
    
    angular.module("MenuApp")
    .config(RoutesConfig)
    
    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    
    function RoutesConfig ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
        
        $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'src/templates/home.html',
        })
        
        .state('categories', {
            url: '/categories',
            templateUrl: 'src/templates/categories-list.html',
            controller: "CategoriesCrontroller as category",
            resolve: {
                categories: ['MenuDataService', (MenuDataService) => MenuDataService.getAllCategories()]
            }
        })
        
        .state('items', {
            url: '/categories/item/{shortName}',
            templateUrl: 'src/templates/items.html',
            controller: "ItemCrontroller as items",
            resolve: {
                item: [ '$stateParams' ,'MenuDataService', function($stateParams,MenuDataService) {
                    return MenuDataService.getItemsForCategories($stateParams.shortName)}]
            }
        })
    }
})()