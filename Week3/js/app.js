(() => {
    'use strict';
    
    angular.module("NarrowItDownApp", [])
    .controller("NarrowItDownController", NarrowItDownController)
    .service("MenuSearchService", MenuSearchService)
    .directive("foundItems", FoundItemsDirective)
    .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");
    
    NarrowItDownController.$inject = ["MenuSearchService"];
    
    function NarrowItDownController (MenuSearchService) {
        var narrow = this;
        narrow.error = false;
        narrow.searchTerm = '';
        narrow.search = (searchTerm) => {
            // Checking against not entering anythin in the input box
            if (searchTerm === ' ' || !searchTerm) {
                console.log("error")
                narrow.error = true;
//                return;
            }
            else {
                var promise = MenuSearchService.getMatchedMenuItems(searchTerm)
                promise.then((result) => {
                    console.log(result)
                    if (result.length !== 0){
                        narrow.found = result;
//                        return;
                    }
                narrow.error = true;
            })
            .catch((error) => narrow.error = true);
            } 
            
        }
        
        narrow.remove = function (index) {
            console.log(index);
            narrow.found.splice(index, 1)
        }
    }
    
    MenuSearchService.$inject = ["$http", "ApiBasePath"];
    
    function MenuSearchService($http, ApiBasePath) {
        
        var service = this;
        
        service.getMatchedMenuItems = (searchTerm) => {
            return $http({
                method: "GET",
                url: (ApiBasePath + "/menu_items.json")
            }).then((result) => {
                return result.data.menu_items.filter((obj) => { 
                    if (obj.description.indexOf(searchTerm) !== -1) {
                         return obj 
                    }
                       
                })
            })
        }
        
    }
    
    function FoundItemsDirective () {
        var ddo = {
            templateUrl: "../foundList.html",
            scope: {
                items: '<',
                onRemove: '&'
            },
            controller: NarrowItDownController,
            controllerAs: 'list',
            bindToController: true,
        }
        return ddo;
    }
    

})();