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
import {Stomp} from './net/stomp';
import {SocketAtNode} from './net/socket/socket-node';
import {General} from './product/general/general';
import {Smart} from './product/smart/smart';
import {Loyalty} from './product/loyalty/loyalty';
import {Payment} from './product/payment/payment';
import {Prepaid} from './product/prepaid/prepaid';
import {Services} from './product/services/services';
import {Document} from './product/document/document';
import {Auth} from './product/auth/auth';
import {TokenStorageInMem} from './auth/token-storage';
import {Clearing} from './product/clearing/clearing';
import {Cardprocessing} from './product/cardprocessing/cardprocessing';

export const ClientNodeEnvironment = {
    config: {
        stompPort: 61614
    },
    services: [
        Auth.SessionService,

        Cardprocessing.InvoiceService,
        Cardprocessing.TransactionService,

        Clearing.SepaInbatchsService,
        Clearing.SepaInrecordsService,
        Clearing.SepaOutbatchsService,
        Clearing.SepaOutrecordsService,

        Document.UploadService,

        General.SkeletonService,
        General.AccountService,
        General.AccountDeviceService,
        General.AccountInvitationService,
        General.ContactService,
        General.ContractService,
        General.DeliveryAddressService,
        General.DeviceService,
        General.FileAccessService,
        General.MerchantService,
        General.NewsService,
        General.NotificationService,
        General.PublicMerchantService,
        General.StoreGroupService,
        General.StoreService,
        General.TransactionService,

        Loyalty.ActionService,
        Loyalty.ActionProfileService,
        Loyalty.ActionCampaignService,
        Loyalty.ActionMessageService,
        Loyalty.ActionConfigService,
        Loyalty.BeaconService,
        Loyalty.CardGroupService,
        Loyalty.CardService,
        Loyalty.ChargeService,
        Loyalty.CheckinService,
        Loyalty.CustomerService,
        Loyalty.MerchantCardService,
        Loyalty.PaymentContainerService,
        Loyalty.ProgramService,
        Loyalty.ProgramSpecialService,
        Loyalty.ReportService,
        Loyalty.SaleService,
        Loyalty.StoreGroupService,
        Loyalty.TransactionService,

        Payment.ContainerService,
        Payment.ContractService,
        Payment.CustomerService,
        Payment.InvoiceService,
        Payment.PayoutService,
        Payment.SecupayDebitService,
        Payment.SecupayPrepayService,
        Payment.TransactionService,

        Prepaid.ContractService,
        Prepaid.ItemGroupService,
        Prepaid.ItemService,
        Prepaid.ReportService,
        Prepaid.SaleService,
        Prepaid.StockService,

        Services.IdentCaseService,
        Services.IdentContractService,
        Services.IdentRequestService,
        Services.IdentResultService,

        Smart.ArticleService,
        Smart.CheckinService,
        Smart.ConfigurationService,
        Smart.DeviceService,
        Smart.DeviceHistoriesService,
        Smart.IdentService,
        Smart.RoutingService,
        Smart.TransactionService
    ]
};
ClientNodeEnvironment.StompChannel = {
    create: () => {
        return new Stomp(SocketAtNode);
    }
};

ClientNodeEnvironment.TokenStorage = {
    create: () => {
        return new TokenStorageInMem();
    }
};

export const ServiceMap = {
    Auth: {
        Sessions: Auth.SessionService.Uid
    },
    Cardprocessing: {
        Invoices: Cardprocessing.InvoiceService.Uid,
        Transactions: Cardprocessing.TransactionService.Uid,
    },
    Clearing: {
        SepaInbatchs: Clearing.SepaInbatchsService.Uid,
        SepaInrecords: Clearing.SepaInrecordsService.Uid,
        SepaOutbatchs: Clearing.SepaOutbatchsService.Uid,
        SepaOutrecords: Clearing.SepaOutrecordsService.Uid
    },
    Document: {
        Uploads: Document.UploadService.Uid
    },
    General: {
        Skeletons: General.SkeletonService.Uid,
        Accounts: General.AccountService.Uid,
        AccountDevices: General.AccountDeviceService.Uid,
        AccountInvitations: General.AccountInvitationService.Uid,
        Contacts: General.ContactService.Uid,
        Contracts: General.ContractService.Uid,
        DeliveryAddresses: General.DeliveryAddressService.Uid,
        Devices: General.DeviceService.Uid,
        FileAccesses: General.FileAccessService.Uid,
        Merchants: General.MerchantService.Uid,
        News: General.NewsService.Uid,
        Notifications: General.NotificationService.Uid,
        PublicMerchants: General.PublicMerchantService.Uid,
        StoreGroups: General.StoreGroupService.Uid,
        Stores: General.StoreService.Uid,
        Transactions: General.TransactionService.Uid
    },
    Loyalty: {
        ActionCampaigns: Loyalty.ActionCampaignService.Uid,
        ActionConfigs: Loyalty.ActionConfigService.Uid,
        ActionMessages: Loyalty.ActionMessageService.Uid,
        ActionProfiles: Loyalty.ActionProfileService.Uid,
        Actions: Loyalty.ActionService.Uid,
        Beacons: Loyalty.BeaconService.Uid,
        CardGroups: Loyalty.CardGroupService.Uid,
        Cards: Loyalty.CardService.Uid,
        Charges: Loyalty.ChargeService.Uid,
        Checkins: Loyalty.CheckinService.Uid,
        Customers: Loyalty.CustomerService.Uid,
        MerchantCards: Loyalty.MerchantCardService.Uid,
        PaymentContainers: Loyalty.PaymentContainerService.Uid,
        Programs: Loyalty.ProgramService.Uid,
        ProrgamSpecials: Loyalty.ProgramSpecialService.Uid,
        Reports: Loyalty.ReportService.Uid,
        Sales: Loyalty.SaleService.Uid,
        StoreGroups: Loyalty.StoreGroupService.Uid,
        Transactions: Loyalty.TransactionService.Uid
    },
    Payment: {
        Containers: Payment.ContainerService.Uid,
        Contracts: Payment.ContractService.Uid,
        Customers: Payment.CustomerService.Uid,
        Invoices: Payment.InvoiceService.Uid,
        Payouts: Payment.PayoutService.Uid,
        SecupayDebits: Payment.SecupayDebitService.Uid,
        SecupayPrepays: Payment.SecupayPrepayService.Uid,
        Transactions: Payment.TransactionService.Uid
    },
    Prepaid:{
        Contracts: Prepaid.ContractService.Uid,
        ItemGroups: Prepaid.ItemGroupService.Uid,
        Items: Prepaid.ItemService.Uid,
        Reports: Prepaid.ReportService.Uid,
        Sales: Prepaid.SaleService.Uid,
        Stocks: Prepaid.StockService.Uid
    },
    Services: {
        IdentCases: Services.IdentCaseService.Uid,
        IdentContracts: Services.IdentContractService.Uid,
        IdentRequests: Services.IdentRequestService.Uid,
        IdentResults: Services.IdentResultService.Uid
    },
    Smart: {
        Articles: Smart.ArticleService.Uid,
        Checkins: Smart.CheckinService.Uid,
        Configurations: Smart.ConfigurationService.Uid,
        Devices: Smart.DeviceService.Uid,
        DeviceHistories: Smart.DeviceHistoriesService.Uid,
        Idents: Smart.IdentService.Uid,
        Routings: Smart.RoutingService.Uid,
        Transactions: Smart.TransactionService.Uid
    }
};