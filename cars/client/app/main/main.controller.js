'use strict';

angular.module('carsApp')
.controller('MainCtrl', ['$scope', '$http', function($scope, $http) {
	var vm = this;
	vm.options = [];
	vm.processForm = processForm;
	vm.result = {};
	vm.bodyEngineSport = [];
	vm.engineSport = [];
	vm.transmissionSport = [];
	vm.finishSport = [];
	vm.tiresSport = [];
	vm.colorsSport = vm.options.colorsSport;
	vm.extrasSport = [];
	vm.bodyEngineNormal = [];
	vm.engineNormal = [];
	vm.transmissionNormal = [];
	vm.finishNormal = [];
	vm.tiresNormal = [];
	vm.colorNormal = vm.options.colors;
	vm.extrasNormal = [];
	vm.result.type = "normal";
	vm.loadingText = "Enviando...";
	vm.showModal = false;

	$http({
	  method: 'GET',
	  url: '/api/options'
	}).then(function successCallback(response) {
	    // this callback will be called asynchronously
	    // when the response is available
	    console.log(response.data);
		vm.options = response.data;
		for(var i in vm.options){
			// console.log(i)
			if(i == 'bodyEngines'){
				var aux = vm.options[i];
				for(var x = 0; x<aux.length; x++){
					if(aux[x].type == 'normal'){
						var val = {'label': aux[x].label, 'value':aux[x].value};
						vm.bodyEngineNormal.push(val);
					}else{
						var val = {'label': aux[x].label, 'value':aux[x].value};
						vm.bodyEngineSport.push(val);
					}
				}
			}else if(i == 'engines'){
				var aux = vm.options[i];
				for(var x = 0; x<aux.length; x++){
					if(aux[x].type == 'normal'){
						var val = {'label': aux[x].label, 'value':aux[x].value};
						vm.engineNormal.push(val);
					}else{
						var val = {'label': aux[x].label, 'value':aux[x].value};
						vm.engineSport.push(val);
					}
				}
			}else if(i == 'transmissions'){
				var aux = vm.options[i];
				for(var x = 0; x<aux.length; x++){
					if(aux[x].type == 'normal'){
						var val = {'label': aux[x].label, 'value':aux[x].value};
						vm.transmissionNormal.push(val);
					}else{
						var val = {'label': aux[x].label, 'value':aux[x].value};
						vm.transmissionSport.push(val);
					}
				}
			}else if(i == 'finishes'){
				var aux = vm.options[i];
				for(var x = 0; x<aux.length; x++){
					if(aux[x].type == 'normal'){
						var val = {'label': aux[x].label, 'value':aux[x].value};
						vm.finishNormal.push(val);
					}else{
						var val = {'label': aux[x].label, 'value':aux[x].value};
						vm.finishSport.push(val);
					}
				}
			}else if(i == 'tires'){
				var aux = vm.options[i];
				for(var x = 0; x<aux.length; x++){
					if(aux[x].type == 'normal'){
						var val = {'label': aux[x].label, 'value':aux[x].value};
						vm.tiresNormal.push(val);
					}else{
						var val = {'label': aux[x].label, 'value':aux[x].value};
						vm.tiresSport.push(val);
					}
				}
			}else if(i == 'extras'){
				var aux = vm.options[i];
				for(var x = 0; x<aux.length; x++){
					if(aux[x].type == 'normal'){
						var val = {'label': aux[x].label, 'value':aux[x].value};
						vm.extrasNormal.push(val);
					}else{
						var val = {'label': aux[x].label, 'value':aux[x].value};
						vm.extrasSport.push(val);
					}
				}
			}
		}
		vm.colorsSport = vm.options.colorsSport;
		vm.colorNormal = vm.options.colors;
		
	  }, function errorCallback(response) {
	    // called asynchronously if an error occurs
	    // or server returns response with an error status.
	  });


	function processForm(){
		vm.toggleModal();
		var req = {
	        method: 'POST',
	        url: '/api/customers',
	        headers: {
	          'Content-Type': 'application/json'
	        },
	        data: {
	        	'type': vm.result.type,
	        	'bodyEngine': vm.result.bodyEngine,
	            'engine': vm.result.engine,
	            'transmission': vm.result.transmission,
	            'finish': vm.result.finish,
	            'tires': vm.result.tires,
	            'color': vm.result.color,
	            'extras': vm.result.extras,
	            'cp': vm.result.cp,
	            'email': vm.result.email
	        }
      	};
      	console.log(req);
      	$http(req).then(function(response) {
        	//var data = response.data;
        	console.log(response);
        	vm.loadingText = "Hemos recibido correctamente tu solicitud";
	    }, function(data) {
	        // en caso de error...
	        console.log(data);
	        vm.loadingText = "Ocurrió un error al procesar el formulario";
	    });
	}

    vm.toggleModal =  toggleModal;
    function toggleModal(){
        vm.showModal = !vm.showModal;
    };
    vm.ok = ok;
    function ok() {
	  vm.showModal = false;
	  $scope.$reset();
	};

	vm.cancel = cancel;
	function cancel() {
	  vm.showModal = false;
	  $scope.reset();
	};

}]);