angular.module('shop').controller('CartController', ['$scope', '$http', 
	function($scope, $http) {
		$http.get('https://webetu.iutnc.univ-lorraine.fr/~ahmani1u/test/main.php?action=card')
		.then(function(response){
			
			$scope.cart = {};
			$scope.cart.bought_products = [];

			response.data.forEach(function(data){
				$scope.cart.bought_products.push(data);
			})
		},
		function(error){
			console.log(error)
		});
	}
]);
