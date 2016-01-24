angular.module('carsApp')

.factory('formDataService', function(){

	var formData = {};
	formData.type = "";
	formData.bodyEngine = "";
	formData.engine = "";
	formData.transmission = "";
	formData.finish = "";
	formData.tires = "";
	formData.color = "";
	formData.colorSport = "";
    formData.extras = [];
	formData.comments = "";
	formData.cp = "";
    formData.email = "";

	return {
		getFormData: function(){
			return formData;
		},
		getType: function () {
            return formData.type;
        },
        setType: function (type) {
            formData.type = type;
        },
        getBodyEngine: function () {
            return formData.bodyEngine;
        },
        setBodyEngine: function (bodyEngine) {
            formData.bodyEngine = bodyEngine;
        },
        getEngine: function () {
            return formData.engine;
        },
        setEngine: function (engine) {
            formData.engine = engine;
        },
        getTransmission: function () {
            return formData.transmission;
        },
        setTransmission: function (transmission) {
            formData.transmission = transmission;
        },
        getFinish: function () {
            return formData.finish;
        },
        setFinish: function (finish) {
            formData.finish = finish;
        },
        getTires: function () {
            return formData.tires;
        },
        setTires: function (tires) {
            formData.tires = tires;
        },
        getColor: function () {
            return formData.color;
        },
        setColor: function (color) {
            formData.color = color;
        },
        getColorSport: function () {
            return formData.colorSport;
        },
        setColorSport: function (colorSport) {
            formData.colorSport = colorSport;
        },
        getExtras: function () {
            return formData.extras;
        },
        setExtras: function (extras) {
            formData.extras = extras;
        },
        getComments: function () {
            return formData.comments;
        },
        setComments: function (comments) {
            formData.comments = comments;
        },
        getCP: function () {
            return formData.cp;
        },
        setCP: function (cp) {
            formData.cp = cp;
        },
        getEmail: function () {
            return formData.email;
        },
        setEmail: function (email) {
            formData.email = email;
        }
	};
})
