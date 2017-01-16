//Utilisation du module crée dans le app.js
angular.module('shop').controller('ProductsController',
	['$scope', '$http', 'Product',
	function($scope,$http,Product){
		$http.get('https://webetu.iutnc.univ-lorraine.fr/~ahmani1u/test/main.php?action=all')
		.then(function(response){
			$scope.products = [];
			response.data.forEach(function(data){
				var newProduct = new Product(data);
				$scope.products.push(newProduct);
			})
		},
		function(error){
			console.log(error)
		});
	}
	]);