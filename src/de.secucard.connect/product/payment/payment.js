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
import {ContainerService} from './container-service';
import {ContractService} from './contract-service';
import {CustomerService} from './customer-service';
import {SecupayDebitService} from './secupay-debit-service';
import {SecupayPrepayService} from './secupay-prepay-service';

export const Payment = {};
Payment.ContainerService = ContainerService;
Payment.ContractService = ContractService;
Payment.CustomerService = CustomerService;
Payment.SecupayDebitService = SecupayDebitService;
Payment.SecupayPrepayService = SecupayPrepayService;
