
	angular.module('namingApp', [])
	.controller('ctrl', ['$scope', function($scope) {

		$scope.boyLetterList = ['君','博','海','杰','瀚','旭'];

		$scope.boyNameList = [];

		$scope.selectNameList = [];



		var fullList = function(letterList, nameList) {
			for (var i = letterList.length - 1; i >= 0; i--) {
				
				for (var j = letterList.length - 1; j >= 0; j--) {
					console.log("i="+i+letterList[i]+"j="+j+letterList[j]);
					nameList.push('蔡' + letterList[i] + letterList[j]);
				};
			};
		}

		$scope.remove = function(letter, letterList) {
			var index = letterList.indexOf(letter);
			if(index > -1) {
				letterList.splice(index, 1);
			}
		}

		$scope.genNameList = function() {
						fullList($scope.boyLetterList, $scope.boyNameList); 
		}
	}]);