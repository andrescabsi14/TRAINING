//App module
var app = angular.module('bvaApp', ['ui.router']);

// App routes
app.config(function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise('/');
	$stateProvider
		.state('app', {
			url: '/',
			templateUrl: 'templates/home.html',
			controller: 'IdeaCtrl'
		})
});

app.controller('IdeaCtrl', ['$scope', 'IdeasService', function($scope, IdeasService){
	$scope.ideasList = [];
	$scope.Idea = {};

	IdeasService.getIdeas().then(function(data){
		$scope.ideasList = data;
	});
	$scope.addIdea = function(Idea){
		IdeasService.addIdea(Idea).then(function(data){
			$scope.ideasList.push(Idea);
			$scope.Idea = {}
		})
	};
	$scope.removeIdea = function(Idea){
		IdeasService.removeIdea(Idea).then(function(data){
			$scope.ideasList.splice( $scope.ideasList.indexOf(Idea), 1 );
		})
	}
}]);

app.service('IdeasService', ['$http', '$q', function($http, $q){
	this.getIdeas = function(){
		var defer = $q.defer();
		$http.get('ideas')
			.success(function(res){
				defer.resolve(res);
			})
			.error(function(err){
				defer.reject(err);
			})
			return defer.promise;
	},
	this.addIdea = function(Idea){
		var defer = $q.defer();
		$http.post('ideas/addIdea', Idea)
			.success(function(res){
				defer.resolve(res);
			})
			.error(function(err){
				defer.reject(err);
			})
			return defer.promise;
	},
	this.removeIdea = function(Idea){
		var defer = $q.defer();
		$http.post('ideas/removeIdea', Idea)
			.success(function(res){
				defer.resolve(res);
			})
			.error(function(err){
				defer.reject(err);
			})
			return defer.promise;
	}
	
}]);