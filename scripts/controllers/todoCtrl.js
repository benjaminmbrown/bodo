'use strict';

app.controller('todoCtrl', function($scope){

	$scope.todo = model;

	$scope.incompleteCount = function(){
		var count = 0;
		angular.forEach($scope.todo.items, function(item){
			if(!item.done){ 
				count++ 
			}
		});
		return count;
	};

	$scope.warningLevel = function(){
		return $scope.incompleteCount() < 3 ? "label-success" : "label-warning";
	};

	$scope.addNewItem = function(actionText){
		$scope.todo.items.push({action: actionText, done: false});

	};
});