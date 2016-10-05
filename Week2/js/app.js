(() => {
    'use strict';
    
    angular.module("ShoppingListCheckOff", [])
    .controller("ToBuyController", ToBuyController)
    .controller("AlreadyBoughtController", AlreadyBoughtController)
    .service("ShoppingListCheckOffService", ShoppingListCheckOffService);
    
    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    
    function ToBuyController(ShoppingListCheckOffService) {
        
        var toBuy = this;
        
        toBuy.buy = (index) => {
            return ShoppingListCheckOffService.buyItem(index);
        }
        
        toBuy.allItems = ShoppingListCheckOffService.getToBuyItems();
    };
    
    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    
    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var boughtItems = this;
        boughtItems.alreadyBoughtItems = ShoppingListCheckOffService.getAlreadyBoughtItems();
    } 
    
    function ShoppingListCheckOffService ()  {
        var service = this;
        var toBuyItems = [{name: "cookies", quantity: 10},
                    {name: "cookies", quantity: 10},
                    {name: "cookies", quantity: 10},
                    {name: "cookies", quantity: 10},
                    {name: "cookies", quantity: 10}];
        
        var alreadyBoughtItems = [];
        
        service.getToBuyItems = () => toBuyItems;
        
        service.getAlreadyBoughtItems = () => alreadyBoughtItems;
        
        service.buyItem = (index) => {
            var item =  toBuyItems.splice(index, 1);
            return Array.prototype.push.apply(alreadyBoughtItems, item);
        }
    };
    
})();