angular.module('shop').service('Product',['$http',
	function($http)
	{
		var Product = function(data){
			this.nom = data.nom;
			this.description = data.description;
			this.prix = data.prix;
		}

		Product.prototype.buy = function(){			
			$http.post('https://webetu.iutnc.univ-lorraine.fr/~ahmani1u/test/insert.php', this)
			.then(function(response) {
				console.log(response);
			}, function(error) {
				console.log(error);
			})
		}

		return Product;
	}
	]);