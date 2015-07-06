app.filter("checkedItems", function(){
	return function(items,showComplete){
		var resultArr = [];
		angular.forEach(items, function(item){
			if(item.done == false || showComplete == true){
				resultArr.push(item);
			}
		});

		return resultArr;
	}


});