(function () {
    'use strict';
    (angular.module('ngLinkvalue', ['ng'])).directive('ngLinkvalue', function () {
    return {
        restrict: 'A',
        scope: {
            ngModel: '=ngModel',
            ngLinkvalue: '=ngLinkvalue'
        },
        require: 'ngModel',
        link: function (scope, elem, attrs, ctrl) {
            ctrl.$parsers.push(function (value) {
                if (scope.ngLinkvalue === value) {
                    ctrl.$setValidity('confirmValue', true);
                } else {
                    ctrl.$setValidity('confirmValue', false);
                }
                return value;
            });

        }
    };
});
})(window, document);
