(() => {
    'use strict';
    
    angular.module("MenuApp")
    .component('category', {
        templateUrl: 'src/templates/categories.html',
        bindings: {
            items: '<'
        }
    });
})()