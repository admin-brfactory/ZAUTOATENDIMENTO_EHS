sap.ui.define([
	"arcelor/brZAUTOATENDIMENTO_EHS/controller/BaseController",
	"sap/ui/model/json/JSONModel",
	"sap/m/MessageBox"
], function(BaseController, JSONModel, MessageBox) {
	"use strict";

	var TimeOut = "";

	return BaseController.extend("arcelor.brZAUTOATENDIMENTO_EHS.controller.InicialView", {

		onInit: function() {
			var oViewModel = new JSONModel({

			});
			this.initTimeOut();
		},
		initTimeOut: function() {
			var oRouter = this.getOwnerComponent().getRouter();

			TimeOut = setTimeout(function() {
				oRouter.navTo("inicial_view");
			}, 50000);
		},

		limpaTimeOut: function() {
			clearTimeout(TimeOut);
			this.initTimeOut();
		},
		onPress: function(oEvent) {
			var oRouter = this.getOwnerComponent().getRouter();
			var start = new Date();
			oRouter.navTo("tipo_colaborador_view");
		},

		onPress1: function(oEvent) {
			var oRouter = this.getOwnerComponent().getRouter();
			oRouter.navTo("InicialView");
		}
	});
});