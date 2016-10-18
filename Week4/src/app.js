(() => {
    'use strict';
    
    angular.module("MenuApp")
    .controller("CategoriesCrontroller", CategoriesCrontroller)
    .controller("ItemCrontroller", ItemCrontroller);
    
    CategoriesCrontroller.$inject = ['categories'];
    
    function CategoriesCrontroller (categories) {
        console.log(categories.data)
        var category = this;
        category.allItems = categories.data
    };
    
    ItemCrontroller.$inject = ['item'];
    function ItemCrontroller(item) {
        var items = this;
        console.log(item.data)
        items.item = item.data;
    }
})()

