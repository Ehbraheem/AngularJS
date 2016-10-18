(() => {
    'use strict';
    
    angular.module("data")
    .service("MenuDataService", MenuDataService);
    
    MenuDataService.$inject = ['$http', 'ApiBasePath'];
    
    function MenuDataService($http,ApiBasePath) {
        
        var service = this;
        
        service.getAllCategories = () => $http({
            method: 'GET',
            url: (ApiBasePath + "categories.json")
        });
        
        service.getItemsForCategories = (categoryShortName) => $http({
            method: 'GET',
            url: (ApiBasePath + "menu_items.json?category=" + categoryShortName)
        })
    } 
    
    
})()