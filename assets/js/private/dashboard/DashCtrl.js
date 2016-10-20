angular.module('DashMod').controller('DashCtrl',['$scope', '$http', function($scope, $http){
	$scope.getUser=function(){
	$http.get('/getUser')
	.then(function onSuccess(user){
		$scope.user=user.data;
	})
	.catch(function onError(err){
		console.log(err);
	})
	}
}])