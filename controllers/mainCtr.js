// create the controller and inject Angular's $scope
myApp.controller('mainController', function ($scope, apiRequest) {
    // create a message to display in our view
    $scope.message = 'Look! I am an mainController page.';

    $scope.autores = function () {
        apiRequest.get_autores().then(function (data) {
            $scope.autoresList = data.data;
            console.log(data.data);
        });
    }

    $scope.autores();
});