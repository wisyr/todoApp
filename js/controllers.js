(function(){

    var app = angular.module('controllers', ['directives']);

    app.controller('MainController', ['$scope', function ($scope) {

        if (localStorage.todosData !== undefined) {
            $scope.todos = JSON.parse(localStorage.getItem("todosData"))
        } else {
            $scope.todos = [];
        }

        $scope.addTodo = function () {
            if ($scope.todoBody && $scope.todos.indexOf($scope.todoBody) == -1) {
                $scope.todos.push($scope.todoBody);
                $scope.todoBody = null;
            }
        };

        $scope.removeTodo = function (id) {
            $scope.todos.splice(id, 1);
        };

        $scope.cleanTodos = function () {
            $scope.todos = [];
            delete localStorage.todosData;
        };

        $scope.exportTodos = function () {
            delete localStorage.todosData;
            localStorage.setItem("todosData", JSON.stringify($scope.todos));
        };

        $scope.checkLengthOfTodoList = function () {
            return $scope.todos.length;
        }

    }]);

})();
