(() => {
    'use strict';
    
    angular.module("MenuApp")
    .component('categories', categoriesConfig);
    
    var categoriesConfig = {
        templateUrl: 'categories.html',
        bindings: {
            categories: '<'
        }
    }
})()