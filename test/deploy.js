var log4js 			= require('log4js');
var log 			= log4js.getLogger("testDotNet");
var assert    		= require("chai").assert;
var appConfigManager   	= require("../src/appConfigManager.js");
var sinon      		= require('sinon');
var jp 				= require('jsonpath');

describe("Deploy Health Rules and Dashboard", function() {
	it('Deploy Health Rules and Dashboard', function (done) {
		appConfigManager.pushConfig(2,false,true,true,33,"ADOC","ADOC - OPs",function(response){
			done();
		});
    });
});
