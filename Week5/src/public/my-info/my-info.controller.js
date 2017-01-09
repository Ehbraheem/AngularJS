(() => {
    'use strict';
    
    angular.module('public')
    .controller('MyInfoController', MyInfoController);
    
    MyInfoController.$inject = ['userInfo'];
    
    function MyInfoController(userInfo) {
        var $myInfoCtrl = this;
        console.log(userInfo);
        $myInfoCtrl.user = userInfo;
    };
})();