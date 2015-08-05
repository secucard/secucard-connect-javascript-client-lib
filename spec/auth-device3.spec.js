import EE from 'eventemitter3';
import _ from 'lodash';

import {ClientNodeEnvironment} from '../src/de.secucard.connect/client-node-environment';
import {Services} from '../src/index.js';
import {Client} from '../src/de.secucard.connect/client';
import devCredentialsDevice from './support/dev-credentials-device.json'

class CustomEventEmitter {
	constructor () {
		Object.assign(this, EE.prototype);
	}
}

describe("device authorization with polling", function() {
	var originalTimeout;
	
	beforeEach(function() {
		originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
	  	jasmine.DEFAULT_TIMEOUT_INTERVAL = 10*60*1000;
	});
	
	it("tests", async function(){
		
		
		let client = Client.create(ClientNodeEnvironment, {
			oAuthUrl: 'https://connect-dev10.secupay-ag.de/oauth/',
			stompHost: 'connect-dev10.secupay-ag.de',
			restUrl: 'https://connect-dev10.secupay-ag.de/api/v2/'
		});
		
		client.on('deviceCode', (deviceCode) => {
			console.log('deviceCode', deviceCode);
		});
		
		client.setCredentials(Object.assign({}, devCredentialsDevice, {uuid: "/vendor/secucard/parameter1/test1/parameter2/test2"}));
		
		await client.open();
		
	});
	
	afterEach(function() {
	  	jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
	});
	
});
