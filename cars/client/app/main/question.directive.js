var app = angular.module('directives', []);

app.directive('questionDirective', function(){
	
	return {
		restrict: 'A', // attribute
		scope: {
			options: '=',
			label: '@',
			model: '=',
			tne: '@',
			nombre: '@'
		},
		templateUrl: function(elem, attrs) {
			switch(attrs.tipo){
				case 'checkbox':
					return 'app/main/templates/checkbox-template.html';
					break;
				case 'text':
					return 'app/main/templates/text-template.html';
					break;
				case 'textarea':
					return 'app/main/templates/textarea-template.html';
					break;
				case 'radio':
					return 'app/main/templates/radio-template.html';
					break;
				case 'select':
					return 'app/main/templates/select-template.html';
					break;
			}
		},
		link: function(scope, elem, attrs) {
			// console.log('linking');
			// console.log('attrs', attrs);
		}
	};
});