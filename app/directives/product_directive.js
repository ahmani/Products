angular.module('shop').directive('product',[
	function(){
		return {
			//c'est juste un élement
			restrict : 'E',
			templateUrl : 'app/templates/product.html',
			link : function(scope,element,attrs){
				scope.buy = function(){
					scope.product.buy();
				}
			}
		};
	}
]);