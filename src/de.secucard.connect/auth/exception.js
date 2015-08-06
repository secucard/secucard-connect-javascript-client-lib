/*
 Copyright 2015 hp.weber GmbH & Co secucard KG (www.secucard.com)
 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */
export class AuthenticationFailedException {

	constructor(message = 'Authentication failed') {

		if (Error.captureStackTrace) {
			Error.captureStackTrace(this, this.constructor);
		} else {
			Object.defineProperty(this, 'stack', {
					configurable: true,
					enumerable: false,
					value: Error(message).stack
				});
		}

		Object.defineProperty(this, 'message', {
			configurable: true,
			enumerable: false,
			value: message
		});

		Object.defineProperty(this, 'name', {
			configurable: true,
			enumerable: false,
			value: this.constructor.name
		});

	}
}

export class AuthenticationTimeoutException {

	constructor(message = 'Authentication timeout') {

		if (Error.captureStackTrace) {
			Error.captureStackTrace(this, this.constructor);
		} else {
			Object.defineProperty(this, 'stack', {
					configurable: true,
					enumerable: false,
					value: Error(message).stack
				});
		}

		Object.defineProperty(this, 'message', {
			configurable: true,
			enumerable: false,
			value: message
		});

		Object.defineProperty(this, 'name', {
			configurable: true,
			enumerable: false,
			value: this.constructor.name
		});

	}
}
