'use strict';

angular.module('ProgressBarsApp')
	.controller('MainCtrl', function($scope) {

		$scope.updateProgress = function(bar, delta) {
			if (bar.value + delta < 0) {
				bar.value = 0;
			} else {
				bar.value += delta;
			}
		};

		$scope.progressBars = [{
			id: '#progress1',
			value: 25
		}, {
			id: '#progress2',
			value: 50
		}, {
			id: '#progress3',
			value: 75
		}];

		$scope.selectedBar = $scope.progressBars[0];

	});