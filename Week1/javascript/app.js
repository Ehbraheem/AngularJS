(() => {
    "use strict";
    
    angular.module("lunchChecker", [])
    
    .controller("LunchCheckController", LunchCheckController);
    
    LunchCheckController.$inject = ['$scope'];
    
    function LunchCheckController($scope) {
        
        // Handler function, it set the state of the message and style
        
        $scope.displayMsg = () => {
            $scope.msg = inputCheck($scope.foodList);
            $scope.setStyle = setColors($scope.msg);
        }
    }
    
    
    // Annonymous function that check the user message and return an object of the message plus the font color of the text and the border color
    
    var inputCheck = (msg) => {
       if (!msg || msg.length === 0) {
           return {
               msg: "Please enter data first",
               fontColor: "red",
               bdColor: "red"
           }
       }
        else if (msg.split(" ").length > 3) {
            return {
                msg: "Too much!",
                fontColor: "green",
                bdColor: "green"
            }
        }
        else {
            return {
                msg: "Enjoy!",
                fontColor: "green",
                bdColor: "green"
            }
        }
    };
    
    // Annonymous fuction to return a style object
    
    var setColors = (msg) =>  { 
        return {
        border: 10 + "px solid " + msg.bdColor,
        color: msg.fontColor
        }
    }
})();