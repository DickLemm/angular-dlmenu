'use strict';
var scripts = document.getElementsByTagName("script")
var currentScriptPath = scripts[scripts.length-1].src;
//v9
angular.module('dicklemm.menus', [])
  .directive('dlmenu', function () {
		return {
			restrict: 'EA',
			replace: true,
			scope: {menu:'=menuItems'},
			templateUrl: currentScriptPath.substring(0, currentScriptPath.lastIndexOf('/') + 1) 
        + 'menu.html',
			link: function(scope, element, attrs) {
				
			
			}
		}
  });
