angular.module('shop').directive('cart',[
	function(){
		return {
			//c'est juste un élement
			restrict : 'E',
			templateUrl : 'app/templates/cart.html'
			/*link : function(scope,element,attrs){
				scope.buy = function(){
					scope.product.buy();
				}
			}*/
		};
	}
]);