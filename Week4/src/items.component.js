(() => {
    'use strict';
    
    angular.module("MenuApp")
    .component('items', {
        templateUrl: 'src/templates/item.html',
        bindings: {
            item: '<'
        }
    });
})()