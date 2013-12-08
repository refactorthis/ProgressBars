'use strict';

describe('Controller: MainCtrl', function() {

	// load the controller's module
	beforeEach(module('ProgressBarsApp'));

	var MainCtrl,
		scope;

	// Initialize the controller and a mock scope
	beforeEach(inject(function($controller, $rootScope) {
		scope = $rootScope.$new();
		MainCtrl = $controller('MainCtrl', {
			$scope: scope
		});
	}));

	it('should create 3 progress bars', function() {
		expect(scope.progressBars.length).toBe(3);
	});

	it('should select the first progress bar by default', function() {
		expect(scope.selectedBar.id).toBe('#progress1');
	});

	it('should add progress to bar', function() {
		scope.selectedBar.value = 25;
		scope.updateProgress(scope.selectedBar, +10);
		expect(scope.selectedBar.value).toBe(35);
	});

	it('should minus progress from bar', function() {
		scope.selectedBar.value = 100;
		scope.updateProgress(scope.selectedBar, -25);
		expect(scope.selectedBar.value).toBe(75);
	});

	it('should allow progress greater than 100', function() {
		scope.selectedBar.value = 100;
		scope.updateProgress(scope.selectedBar, +125);
		expect(scope.selectedBar.value).toBe(225);
	});

	it('should not allow progress to be below 0', function() {
		scope.updateProgress(scope.selectedBar, -scope.selectedBar.value - 1000);
		expect(scope.selectedBar.value).toBe(0);
	});
});