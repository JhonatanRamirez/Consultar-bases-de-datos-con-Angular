var app= angular.module('myApp',[]);
app.controller('control', function($scope, $http){
	$http.post('Modelo/getUsuarios.php').success(function(data){
		$scope.posts=data;
	});
});