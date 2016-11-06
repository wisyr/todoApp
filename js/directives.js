(function(){

    var app = angular.module('directives', []);

    app.directive('submitEnter', function () {
        return function (scope, element, attrs) {
            element.bind("keydown keypress", function (event) {
                if (event.which === 13) {
                    scope.$apply(function () {
                        scope.$eval(attrs.submitEnter);
                    });
                    event.preventDefault();
                }
            });
        };
    });

})();