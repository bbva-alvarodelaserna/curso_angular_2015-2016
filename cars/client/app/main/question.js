angular.module('carsApp.directives', [])
.directive('question', function(){
	return {
		restrict: 'A',
		scope: true,
		templateUrl: function(elem, attrs) {
			switch(attrs.templateType){
				case 'checkbox':
					return '<input type="checkbox"></input>';
					break;
				case 'text':
					return '<input type="text"></input>';
					break;
				case 'textarea':
					return '<input type="textarea"></input>';
					break;
				case 'radio':
					return '<input type="radio"></input>';
					break;
				case 'select':
					return '<input type="select"></input>';
					break;
			}
		}
	}
});