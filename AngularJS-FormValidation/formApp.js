var app = angular.module("formApp", []);
app.controller("formCtrl", function($scope) {

    $scope.setEmailValidity = function() {
        var regex = new RegExp('^[a-z0-9\.]+@smail\.iitm\.ac\.in$');

        if(regex.test(this.email)) {
            this.signupForm.email.$setValidity("smailFormat", true);
        } else {
            this.signupForm.email.$setValidity("smailFormat", false);
        }
    }

    $scope.setPhoneNumberValidity = function() {
        var regex = new RegExp('^\\+[0-9]{12}$');
        
        if(regex.test(this.phoneNumber)) {
            this.signupForm.phoneNumber.$setValidity("phoneNumberFormat", true);
        } else {
            this.signupForm.phoneNumber.$setValidity("phoneNumberFormat", false);
        }
    }

    $scope.setNameValidity = function() {
        var regex = new RegExp('^[A-Za-z ]+$');
        
        if(regex.test(this.name)) {
            this.signupForm.name.$setValidity("nameAlpha", true);
        } else {
            this.signupForm.name.$setValidity("nameAlpha", false);
        }
    }

    $scope.setPasswordValidity = function() {

        var password = this.password;
        var confirmPassword = this.confirmPassword;
        
        if(password === confirmPassword) {
            this.signupForm.confirmPassword.$setValidity("passwordMatch", true);
        } else {
            this.signupForm.confirmPassword.$setValidity("passwordMatch", false);
        }
    }

});
