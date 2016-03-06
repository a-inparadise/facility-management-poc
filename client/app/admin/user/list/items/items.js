	/**
	 * @ngdoc overview
	 * @name facilityManagementPocApp.admin.user.list.items
	 * @requires ui.router
	 * @requires components/listImage
	 *
	 * @description
	 * The `facilityManagementPocApp.admin.user.list.items` module which provides:
	 *
	 * - {@link facilityManagementPocApp.admin.user.list.items.controller:UserItemsController UserItemsController}
	 */

(function () {
	'use strict';

	angular
		.module('facilityManagementPocApp.admin.user.list.items', [
			'ui.router',
			'facilityManagementPocApp.listImage'
		]);

})();
