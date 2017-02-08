myApp.controller('urlsController', function ($scope, $routeParams, apiRequest) {
    $scope.ID = $routeParams.ID;

    $scope.urls = function () {
        apiRequest.get_urls($scope.ID).then(function (data) {
            $scope.urlsList = data.data;
            if(Object.keys($scope.urlsList).length == 0){
                $scope.respuesta = false;
                $scope.mensaje = 'No existen url\'s para este autor';
            }else{
                $scope.respuesta = true;
            }
        });
    }
    $scope.autor = function () {
        apiRequest.get_autor($scope.ID).then(function (data) {
            $scope.autor = data.data[0];
        });
    }

    $scope.urls();
    $scope.autor();
});