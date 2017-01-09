(() => {
    'use strict';
    angular.module('public')
    .controller('SignUpController',SignUpController);
    SignUpController.$inject = ['MenuService', '$window'];
    function SignUpController(MenuService, $window) {
        
        var $signUpCtrl = this;
        
        $signUpCtrl.validateDish = () => {
            if ($signUpCtrl.user.favoriteDish !== undefined) {
                if (/[a-z]+?\d+?/i.test($signUpCtrl.user.favoriteDish)) {
                    $signUpCtrl.signUpForm.favoriteDish.$setInvalid();
                }
            }
            
        }
        $signUpCtrl.getData = (query) => {
            if (query) {
                MenuService.getFavoriteDish(query)
                .then((response) => {
                    $signUpCtrl.user.favDish = response.data;
                    $signUpCtrl.success = true;
                    $signUpCtrl.error = false;
                }, (response) => {
                    console.log("Error");
                    $signUpCtrl.success = false;
                    $signUpCtrl.error = true;
                });
            }
            
        }
        $signUpCtrl.submit = () => {
            $signUpCtrl.getData($signUpCtrl.user.favoriteDish);
            if (!$signUpCtrl.error) { // check for failed promise
                MenuService.setUserInfo($signUpCtrl.user);
            }
            
        }
        
        $signUpCtrl.redirect = () => {
             $window.location.href = '#/myinfo'
        }
    }
})()