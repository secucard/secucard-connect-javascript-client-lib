import es6shim from 'es6-shim';
import {ClientNodeEnvironment} from './de.secucard.connect/client-node-environment';
import {Client} from './de.secucard.connect/client';

export const SecucardConnect = {};
SecucardConnect.create = (config) => {
	
	return Client.create(ClientNodeEnvironment, config);
	
};