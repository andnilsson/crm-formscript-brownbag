import { CrmProp, EntityReference, IQueryable } from './Base'

export enum address1_addresstypecode {
 Fakturatill = 1,
 Levereratill = 2,
 Primr = 3,
 vrigt = 4,
}

export enum msdyn_travelchargetype {
 Varjetimme = 690970000,
 Krstrcka = 690970001,
 tgrdad = 690970002,
 Ingen = 690970003,
}

export enum address1_shippingmethodcode {
 Post = 5,
 Bud = 19,
 Enligtk = 26,
}

export enum accountcategorycode {
 Prioriteradkund = 1,
 Standard = 2,
}

export enum address1_freighttermscode {
 FOB = 1,
 Fraktfritt = 2,
}

export enum preferredappointmenttimecode {
 Frmiddag = 1,
 Eftermiddag = 2,
 Kvll = 3,
}

export enum accountclassificationcode {
 Standardvrde = 1,
}

export enum customertypecode {
 Konkurrent = 1,
 Konsult = 2,
 Kund = 3,
 Investerare = 4,
 Partner = 5,
 Pverkare = 6,
 Press = 7,
 Tilltnktkund = 8,
 terfrsljare = 9,
 Leverantr = 10,
 Sljare = 11,
 vrigt = 12,
}

export enum ownershipcode {
 Publikt = 1,
 Privat = 2,
 Statligt = 13,
}

export enum territorycode {
 Standardvrde = 1,
}

export enum industrycode {
 Finansiellverksamhet = 16,
 Jordbrukjaktochskogsbruk = 57,
 Fiske = 58,
 Utvinningavmineral = 59,
 Tillverkning = 60,
 Elgasngfrsrjning = 61,
 Partidetaljhandel = 62,
 Hotellrestaurang = 63,
 Transportkommunikation = 64,
 Fastighetsverksamhet = 65,
 Offentligfrvaltningochfrsvar = 66,
 Utbildning = 67,
 Hlsoochsjukvrdveterinrv = 68,
 Hushllensverksamhet = 70,
 Internationellaorgutlndskaamb = 71,
}

export enum businesstypecode {
 Standardvrde = 1,
}

export enum shippingmethodcode {
 Standardvrde = 1,
}

export enum paymenttermscode {
 enum30dagarnetto = 1,
 enum10dagarnetto = 36,
 enum20dagarnetto = 37,
}

export enum accountratingcode {
 Standardvrde = 1,
}

export enum address2_addresstypecode {
 Standardvrde = 1,
}

export enum customersizecode {
 Standardvrde = 1,
}

export enum preferredcontactmethodcode {
 Valfri = 1,
 Epost = 2,
 Telefon = 3,
 Fax = 4,
 Postadress = 5,
}

export enum address2_shippingmethodcode {
 Standardvrde = 1,
}

export enum preferredappointmentdaycode {
 sndag = 0,
 mndag = 1,
 tisdag = 2,
 onsdag = 3,
 torsdag = 4,
 fredag = 5,
 lrdag = 6,
}

export enum address2_freighttermscode {
 Standardvrde = 1,
}

export class Account implements IQueryable {
  getSchemaName() { return "accounts" };
  emailaddress3: string;
  emailaddress2: string;
  emailaddress1: string;
  masteraccountidyominame: string;
  address1_city: string;
  _slaid_value: string
  address1_longitude: number;
  modifiedon: Date;
  aging90: number;
  overriddencreatedon: Date;
  websiteurl: string;
  donotpostalmail: boolean;
  openrevenue: number;
  address1_addresstypecode: address1_addresstypecode;
  _transactioncurrencyid_value: string
  msdyn_travelchargetype: msdyn_travelchargetype;
  sharesoutstanding: number;
  donotsendmm: boolean;
  primarycontactidname: string;
  creditonhold: boolean;
  transactioncurrencyidname: string;
  aging30: number;
  donotbulkpostalmail: boolean;
  msdyn_salestaxcodename: string;
  preferredsystemuseridyominame: string;
  address1_shippingmethodcode: address1_shippingmethodcode;
  utcconversiontimezonecode: number;
  _slainvokedid_value: string
  opendeals_date: Date;
  msdyn_travelcharge_base: number;
  modifiedbyexternalpartyyominame: string;
  _originatingleadid_value: string
  masteraccountidname: string;
  preferredsystemuseridname: string;
  accountcategorycode: accountcategorycode;
  address2_stateorprovince: string;
  _territoryid_value: string
  address2_country: string;
  address2_line2: string;
  aging60_base: number;
  msdyn_preferredresourcename: string;
  address1_line3: string;
  onholdtime: number;
  address1_freighttermscode: address1_freighttermscode;
  creditlimit: number;
  openrevenue_base: number;
  parentaccountidname: string;
  originatingleadidname: string;
  address1_utcoffset: number;
  preferredappointmenttimecode: preferredappointmenttimecode;
  numberofemployees: number;
  modifiedbyexternalpartyname: string;
  accountclassificationcode: accountclassificationcode;
  revenue: number;
  customertypecode: customertypecode;
  address2_county: string;
  isprivate: boolean;
  _primarycontactid_value: string
  telephone3: string;
  _parentaccountid_value: string
  address2_city: string;
  msdyn_taxexemptnumber: string;
  address2_latitude: number;
  createdon: Date;
  donotbulkemail: boolean;
  address2_line1: string;
  donotfax: boolean;
  marketcap: number;
  address1_composite: string;
  ownershipcode: ownershipcode;
  opendeals_state: number;
  _owningbusinessunit_value: string
  address2_postalcode: string;
  lastusedincampaign: Date;
  processid: string;
  owneridyominame: string;
  _msdyn_preferredresource_value: string
  entityimage_url: string;
  address2_line3: string;
  description: string;
  _modifiedby_value: string
  timezoneruleversionnumber: number;
  address1_county: string;
  createdbyname: string;
  _modifiedonbehalfby_value: string
  address1_line1: string;
  donotemail: boolean;
  territorycode: territorycode;
  address2_postofficebox: string;
  address2_telephone1: string;
  address2_telephone2: string;
  address2_telephone3: string;
  originatingleadidyominame: string;
  aging60: number;
  address1_addressid: string;
  traversedpath: string;
  territoryidname: string;
  yominame: string;
  createdonbehalfbyname: string;
  _owninguser_value: string
  industrycode: industrycode;
  address2_name: string;
  openrevenue_state: number;
  primarysatoriid: string;
  name: string;
  _msdyn_billingaccount_value: string
  entityimageid: string;
  donotphone: boolean;
  timespentbymeonemailandmeetings: string;
  businesstypecode: businesstypecode;
  primarytwitterid: string;
  owneridname: string;
  createdonbehalfbyyominame: string;
  _createdbyexternalparty_value: string
  address2_composite: string;
  shippingmethodcode: shippingmethodcode;
  address1_country: string;
  _owningteam_value: string
  address1_stateorprovince: string;
  paymenttermscode: paymenttermscode;
  marketingonly: boolean;
  _preferredequipmentid_value: string
  createdbyexternalpartyyominame: string;
  _createdonbehalfby_value: string
  accountratingcode: accountratingcode;
  msdyn_billingaccountyominame: string;
  address1_telephone1: string;
  address1_telephone2: string;
  address1_telephone3: string;
  modifiedonbehalfbyname: string;
  address1_postofficebox: string;
  slainvokedidname: string;
  fax: string;
  _masterid_value: string
  msdyn_travelcharge: number;
  sic: string;
  _ownerid_value: string
  address2_utcoffset: number;
  stageid: string;
  accountnumber: string;
  creditlimit_base: number;
  address2_fax: string;
  revenue_base: number;
  merged: boolean;
  address2_longitude: number;
  _modifiedbyexternalparty_value: string
  _defaultpricelevelid_value: string
  ftpsiteurl: string;
  preferredequipmentidname: string;
  aging90_base: number;
  defaultpricelevelidname: string;
  address1_primarycontactname: string;
  modifiedbyyominame: string;
  lastonholdtime: Date;
  address1_line2: string;
  modifiedonbehalfbyyominame: string;
  _createdby_value: string
  address2_addresstypecode: address2_addresstypecode;
  openrevenue_date: Date;
  address2_upszone: string;
  followemail: boolean;
  marketcap_base: number;
  address1_postalcode: string;
  tickersymbol: string;
  customersizecode: customersizecode;
  preferredserviceidname: string;
  createdbyexternalpartyname: string;
  participatesinworkflow: boolean;
  msdyn_serviceterritoryname: string;
  stockexchange: string;
  _preferredserviceid_value: string
  msdyn_externalaccountid: string;
  preferredcontactmethodcode: preferredcontactmethodcode;
  msdyn_billingaccountname: string;
  importsequencenumber: number;
  msdyn_workorderinstructions: string;
  telephone2: string;
  _msdyn_salestaxcode_value: string
  _preferredsystemuserid_value: string
  accountid: string;
  telephone1: string;
  aging30_base: number;
  address1_name: string;
  address1_fax: string;
  address1_latitude: number;
  _msdyn_serviceterritory_value: string
  address2_shippingmethodcode: address2_shippingmethodcode;
  primarycontactidyominame: string;
  int_facebook: string;
  int_twitter: string;
  preferredappointmentdaycode: preferredappointmentdaycode;
  modifiedbyname: string;
  createdbyyominame: string;
  address2_freighttermscode: address2_freighttermscode;
  address1_upszone: string;
  address2_addressid: string;
  slaname: string;
  msdyn_taxexempt: boolean;
  parentaccountidyominame: string;
  address2_primarycontactname: string;
  opendeals: number;
}

export class AccountForm {
  emailaddress3: CrmProp<string> = new CrmProp<string>("emailaddress3")
  emailaddress2: CrmProp<string> = new CrmProp<string>("emailaddress2")
  emailaddress1: CrmProp<string> = new CrmProp<string>("emailaddress1")
  masteraccountidyominame: CrmProp<string> = new CrmProp<string>("masteraccountidyominame")
  address1_city: CrmProp<string> = new CrmProp<string>("address1_city")
  slaid: CrmProp<EntityReference[]> = new CrmProp<EntityReference[]>("slaid")
  address1_longitude: CrmProp<number> = new CrmProp<number>("address1_longitude")
  modifiedon: CrmProp<Date> = new CrmProp<Date>("modifiedon")
  aging90: CrmProp<number> = new CrmProp<number>("aging90")
  overriddencreatedon: CrmProp<Date> = new CrmProp<Date>("overriddencreatedon")
  websiteurl: CrmProp<string> = new CrmProp<string>("websiteurl")
  donotpostalmail: CrmProp<boolean> = new CrmProp<boolean>("donotpostalmail")
  openrevenue: CrmProp<number> = new CrmProp<number>("openrevenue")
  address1_addresstypecode: CrmProp<address1_addresstypecode> = new CrmProp<address1_addresstypecode>("address1_addresstypecode")
  transactioncurrencyid: CrmProp<EntityReference[]> = new CrmProp<EntityReference[]>("transactioncurrencyid")
  msdyn_travelchargetype: CrmProp<msdyn_travelchargetype> = new CrmProp<msdyn_travelchargetype>("msdyn_travelchargetype")
  sharesoutstanding: CrmProp<number> = new CrmProp<number>("sharesoutstanding")
  donotsendmm: CrmProp<boolean> = new CrmProp<boolean>("donotsendmm")
  primarycontactidname: CrmProp<string> = new CrmProp<string>("primarycontactidname")
  creditonhold: CrmProp<boolean> = new CrmProp<boolean>("creditonhold")
  transactioncurrencyidname: CrmProp<string> = new CrmProp<string>("transactioncurrencyidname")
  aging30: CrmProp<number> = new CrmProp<number>("aging30")
  donotbulkpostalmail: CrmProp<boolean> = new CrmProp<boolean>("donotbulkpostalmail")
  msdyn_salestaxcodename: CrmProp<string> = new CrmProp<string>("msdyn_salestaxcodename")
  preferredsystemuseridyominame: CrmProp<string> = new CrmProp<string>("preferredsystemuseridyominame")
  address1_shippingmethodcode: CrmProp<address1_shippingmethodcode> = new CrmProp<address1_shippingmethodcode>("address1_shippingmethodcode")
  utcconversiontimezonecode: CrmProp<number> = new CrmProp<number>("utcconversiontimezonecode")
  slainvokedid: CrmProp<EntityReference[]> = new CrmProp<EntityReference[]>("slainvokedid")
  opendeals_date: CrmProp<Date> = new CrmProp<Date>("opendeals_date")
  msdyn_travelcharge_base: CrmProp<number> = new CrmProp<number>("msdyn_travelcharge_base")
  modifiedbyexternalpartyyominame: CrmProp<string> = new CrmProp<string>("modifiedbyexternalpartyyominame")
  originatingleadid: CrmProp<EntityReference[]> = new CrmProp<EntityReference[]>("originatingleadid")
  masteraccountidname: CrmProp<string> = new CrmProp<string>("masteraccountidname")
  preferredsystemuseridname: CrmProp<string> = new CrmProp<string>("preferredsystemuseridname")
  accountcategorycode: CrmProp<accountcategorycode> = new CrmProp<accountcategorycode>("accountcategorycode")
  address2_stateorprovince: CrmProp<string> = new CrmProp<string>("address2_stateorprovince")
  territoryid: CrmProp<EntityReference[]> = new CrmProp<EntityReference[]>("territoryid")
  address2_country: CrmProp<string> = new CrmProp<string>("address2_country")
  address2_line2: CrmProp<string> = new CrmProp<string>("address2_line2")
  aging60_base: CrmProp<number> = new CrmProp<number>("aging60_base")
  msdyn_preferredresourcename: CrmProp<string> = new CrmProp<string>("msdyn_preferredresourcename")
  address1_line3: CrmProp<string> = new CrmProp<string>("address1_line3")
  onholdtime: CrmProp<number> = new CrmProp<number>("onholdtime")
  address1_freighttermscode: CrmProp<address1_freighttermscode> = new CrmProp<address1_freighttermscode>("address1_freighttermscode")
  creditlimit: CrmProp<number> = new CrmProp<number>("creditlimit")
  openrevenue_base: CrmProp<number> = new CrmProp<number>("openrevenue_base")
  parentaccountidname: CrmProp<string> = new CrmProp<string>("parentaccountidname")
  originatingleadidname: CrmProp<string> = new CrmProp<string>("originatingleadidname")
  address1_utcoffset: CrmProp<number> = new CrmProp<number>("address1_utcoffset")
  preferredappointmenttimecode: CrmProp<preferredappointmenttimecode> = new CrmProp<preferredappointmenttimecode>("preferredappointmenttimecode")
  numberofemployees: CrmProp<number> = new CrmProp<number>("numberofemployees")
  modifiedbyexternalpartyname: CrmProp<string> = new CrmProp<string>("modifiedbyexternalpartyname")
  accountclassificationcode: CrmProp<accountclassificationcode> = new CrmProp<accountclassificationcode>("accountclassificationcode")
  revenue: CrmProp<number> = new CrmProp<number>("revenue")
  customertypecode: CrmProp<customertypecode> = new CrmProp<customertypecode>("customertypecode")
  address2_county: CrmProp<string> = new CrmProp<string>("address2_county")
  isprivate: CrmProp<boolean> = new CrmProp<boolean>("isprivate")
  primarycontactid: CrmProp<EntityReference[]> = new CrmProp<EntityReference[]>("primarycontactid")
  telephone3: CrmProp<string> = new CrmProp<string>("telephone3")
  parentaccountid: CrmProp<EntityReference[]> = new CrmProp<EntityReference[]>("parentaccountid")
  address2_city: CrmProp<string> = new CrmProp<string>("address2_city")
  msdyn_taxexemptnumber: CrmProp<string> = new CrmProp<string>("msdyn_taxexemptnumber")
  address2_latitude: CrmProp<number> = new CrmProp<number>("address2_latitude")
  createdon: CrmProp<Date> = new CrmProp<Date>("createdon")
  donotbulkemail: CrmProp<boolean> = new CrmProp<boolean>("donotbulkemail")
  address2_line1: CrmProp<string> = new CrmProp<string>("address2_line1")
  donotfax: CrmProp<boolean> = new CrmProp<boolean>("donotfax")
  marketcap: CrmProp<number> = new CrmProp<number>("marketcap")
  address1_composite: CrmProp<string> = new CrmProp<string>("address1_composite")
  ownershipcode: CrmProp<ownershipcode> = new CrmProp<ownershipcode>("ownershipcode")
  opendeals_state: CrmProp<number> = new CrmProp<number>("opendeals_state")
  owningbusinessunit: CrmProp<EntityReference[]> = new CrmProp<EntityReference[]>("owningbusinessunit")
  address2_postalcode: CrmProp<string> = new CrmProp<string>("address2_postalcode")
  lastusedincampaign: CrmProp<Date> = new CrmProp<Date>("lastusedincampaign")
  processid: CrmProp<string> = new CrmProp<string>("processid")
  owneridyominame: CrmProp<string> = new CrmProp<string>("owneridyominame")
  msdyn_preferredresource: CrmProp<EntityReference[]> = new CrmProp<EntityReference[]>("msdyn_preferredresource")
  entityimage_url: CrmProp<string> = new CrmProp<string>("entityimage_url")
  address2_line3: CrmProp<string> = new CrmProp<string>("address2_line3")
  description: CrmProp<string> = new CrmProp<string>("description")
  modifiedby: CrmProp<EntityReference[]> = new CrmProp<EntityReference[]>("modifiedby")
  timezoneruleversionnumber: CrmProp<number> = new CrmProp<number>("timezoneruleversionnumber")
  address1_county: CrmProp<string> = new CrmProp<string>("address1_county")
  createdbyname: CrmProp<string> = new CrmProp<string>("createdbyname")
  modifiedonbehalfby: CrmProp<EntityReference[]> = new CrmProp<EntityReference[]>("modifiedonbehalfby")
  address1_line1: CrmProp<string> = new CrmProp<string>("address1_line1")
  donotemail: CrmProp<boolean> = new CrmProp<boolean>("donotemail")
  territorycode: CrmProp<territorycode> = new CrmProp<territorycode>("territorycode")
  address2_postofficebox: CrmProp<string> = new CrmProp<string>("address2_postofficebox")
  address2_telephone1: CrmProp<string> = new CrmProp<string>("address2_telephone1")
  address2_telephone2: CrmProp<string> = new CrmProp<string>("address2_telephone2")
  address2_telephone3: CrmProp<string> = new CrmProp<string>("address2_telephone3")
  originatingleadidyominame: CrmProp<string> = new CrmProp<string>("originatingleadidyominame")
  aging60: CrmProp<number> = new CrmProp<number>("aging60")
  address1_addressid: CrmProp<string> = new CrmProp<string>("address1_addressid")
  traversedpath: CrmProp<string> = new CrmProp<string>("traversedpath")
  territoryidname: CrmProp<string> = new CrmProp<string>("territoryidname")
  yominame: CrmProp<string> = new CrmProp<string>("yominame")
  createdonbehalfbyname: CrmProp<string> = new CrmProp<string>("createdonbehalfbyname")
  owninguser: CrmProp<EntityReference[]> = new CrmProp<EntityReference[]>("owninguser")
  industrycode: CrmProp<industrycode> = new CrmProp<industrycode>("industrycode")
  address2_name: CrmProp<string> = new CrmProp<string>("address2_name")
  openrevenue_state: CrmProp<number> = new CrmProp<number>("openrevenue_state")
  primarysatoriid: CrmProp<string> = new CrmProp<string>("primarysatoriid")
  name: CrmProp<string> = new CrmProp<string>("name")
  msdyn_billingaccount: CrmProp<EntityReference[]> = new CrmProp<EntityReference[]>("msdyn_billingaccount")
  entityimageid: CrmProp<string> = new CrmProp<string>("entityimageid")
  donotphone: CrmProp<boolean> = new CrmProp<boolean>("donotphone")
  timespentbymeonemailandmeetings: CrmProp<string> = new CrmProp<string>("timespentbymeonemailandmeetings")
  businesstypecode: CrmProp<businesstypecode> = new CrmProp<businesstypecode>("businesstypecode")
  primarytwitterid: CrmProp<string> = new CrmProp<string>("primarytwitterid")
  owneridname: CrmProp<string> = new CrmProp<string>("owneridname")
  createdonbehalfbyyominame: CrmProp<string> = new CrmProp<string>("createdonbehalfbyyominame")
  createdbyexternalparty: CrmProp<EntityReference[]> = new CrmProp<EntityReference[]>("createdbyexternalparty")
  address2_composite: CrmProp<string> = new CrmProp<string>("address2_composite")
  shippingmethodcode: CrmProp<shippingmethodcode> = new CrmProp<shippingmethodcode>("shippingmethodcode")
  address1_country: CrmProp<string> = new CrmProp<string>("address1_country")
  owningteam: CrmProp<EntityReference[]> = new CrmProp<EntityReference[]>("owningteam")
  address1_stateorprovince: CrmProp<string> = new CrmProp<string>("address1_stateorprovince")
  paymenttermscode: CrmProp<paymenttermscode> = new CrmProp<paymenttermscode>("paymenttermscode")
  marketingonly: CrmProp<boolean> = new CrmProp<boolean>("marketingonly")
  preferredequipmentid: CrmProp<EntityReference[]> = new CrmProp<EntityReference[]>("preferredequipmentid")
  createdbyexternalpartyyominame: CrmProp<string> = new CrmProp<string>("createdbyexternalpartyyominame")
  createdonbehalfby: CrmProp<EntityReference[]> = new CrmProp<EntityReference[]>("createdonbehalfby")
  accountratingcode: CrmProp<accountratingcode> = new CrmProp<accountratingcode>("accountratingcode")
  msdyn_billingaccountyominame: CrmProp<string> = new CrmProp<string>("msdyn_billingaccountyominame")
  address1_telephone1: CrmProp<string> = new CrmProp<string>("address1_telephone1")
  address1_telephone2: CrmProp<string> = new CrmProp<string>("address1_telephone2")
  address1_telephone3: CrmProp<string> = new CrmProp<string>("address1_telephone3")
  modifiedonbehalfbyname: CrmProp<string> = new CrmProp<string>("modifiedonbehalfbyname")
  address1_postofficebox: CrmProp<string> = new CrmProp<string>("address1_postofficebox")
  slainvokedidname: CrmProp<string> = new CrmProp<string>("slainvokedidname")
  fax: CrmProp<string> = new CrmProp<string>("fax")
  masterid: CrmProp<EntityReference[]> = new CrmProp<EntityReference[]>("masterid")
  msdyn_travelcharge: CrmProp<number> = new CrmProp<number>("msdyn_travelcharge")
  sic: CrmProp<string> = new CrmProp<string>("sic")
  ownerid: CrmProp<EntityReference[]> = new CrmProp<EntityReference[]>("ownerid")
  address2_utcoffset: CrmProp<number> = new CrmProp<number>("address2_utcoffset")
  stageid: CrmProp<string> = new CrmProp<string>("stageid")
  accountnumber: CrmProp<string> = new CrmProp<string>("accountnumber")
  creditlimit_base: CrmProp<number> = new CrmProp<number>("creditlimit_base")
  address2_fax: CrmProp<string> = new CrmProp<string>("address2_fax")
  revenue_base: CrmProp<number> = new CrmProp<number>("revenue_base")
  merged: CrmProp<boolean> = new CrmProp<boolean>("merged")
  address2_longitude: CrmProp<number> = new CrmProp<number>("address2_longitude")
  modifiedbyexternalparty: CrmProp<EntityReference[]> = new CrmProp<EntityReference[]>("modifiedbyexternalparty")
  defaultpricelevelid: CrmProp<EntityReference[]> = new CrmProp<EntityReference[]>("defaultpricelevelid")
  ftpsiteurl: CrmProp<string> = new CrmProp<string>("ftpsiteurl")
  preferredequipmentidname: CrmProp<string> = new CrmProp<string>("preferredequipmentidname")
  aging90_base: CrmProp<number> = new CrmProp<number>("aging90_base")
  defaultpricelevelidname: CrmProp<string> = new CrmProp<string>("defaultpricelevelidname")
  address1_primarycontactname: CrmProp<string> = new CrmProp<string>("address1_primarycontactname")
  modifiedbyyominame: CrmProp<string> = new CrmProp<string>("modifiedbyyominame")
  lastonholdtime: CrmProp<Date> = new CrmProp<Date>("lastonholdtime")
  address1_line2: CrmProp<string> = new CrmProp<string>("address1_line2")
  modifiedonbehalfbyyominame: CrmProp<string> = new CrmProp<string>("modifiedonbehalfbyyominame")
  createdby: CrmProp<EntityReference[]> = new CrmProp<EntityReference[]>("createdby")
  address2_addresstypecode: CrmProp<address2_addresstypecode> = new CrmProp<address2_addresstypecode>("address2_addresstypecode")
  openrevenue_date: CrmProp<Date> = new CrmProp<Date>("openrevenue_date")
  address2_upszone: CrmProp<string> = new CrmProp<string>("address2_upszone")
  followemail: CrmProp<boolean> = new CrmProp<boolean>("followemail")
  marketcap_base: CrmProp<number> = new CrmProp<number>("marketcap_base")
  address1_postalcode: CrmProp<string> = new CrmProp<string>("address1_postalcode")
  tickersymbol: CrmProp<string> = new CrmProp<string>("tickersymbol")
  customersizecode: CrmProp<customersizecode> = new CrmProp<customersizecode>("customersizecode")
  preferredserviceidname: CrmProp<string> = new CrmProp<string>("preferredserviceidname")
  createdbyexternalpartyname: CrmProp<string> = new CrmProp<string>("createdbyexternalpartyname")
  participatesinworkflow: CrmProp<boolean> = new CrmProp<boolean>("participatesinworkflow")
  msdyn_serviceterritoryname: CrmProp<string> = new CrmProp<string>("msdyn_serviceterritoryname")
  stockexchange: CrmProp<string> = new CrmProp<string>("stockexchange")
  preferredserviceid: CrmProp<EntityReference[]> = new CrmProp<EntityReference[]>("preferredserviceid")
  msdyn_externalaccountid: CrmProp<string> = new CrmProp<string>("msdyn_externalaccountid")
  preferredcontactmethodcode: CrmProp<preferredcontactmethodcode> = new CrmProp<preferredcontactmethodcode>("preferredcontactmethodcode")
  msdyn_billingaccountname: CrmProp<string> = new CrmProp<string>("msdyn_billingaccountname")
  importsequencenumber: CrmProp<number> = new CrmProp<number>("importsequencenumber")
  msdyn_workorderinstructions: CrmProp<string> = new CrmProp<string>("msdyn_workorderinstructions")
  telephone2: CrmProp<string> = new CrmProp<string>("telephone2")
  msdyn_salestaxcode: CrmProp<EntityReference[]> = new CrmProp<EntityReference[]>("msdyn_salestaxcode")
  preferredsystemuserid: CrmProp<EntityReference[]> = new CrmProp<EntityReference[]>("preferredsystemuserid")
  accountid: CrmProp<string> = new CrmProp<string>("accountid")
  telephone1: CrmProp<string> = new CrmProp<string>("telephone1")
  aging30_base: CrmProp<number> = new CrmProp<number>("aging30_base")
  address1_name: CrmProp<string> = new CrmProp<string>("address1_name")
  address1_fax: CrmProp<string> = new CrmProp<string>("address1_fax")
  address1_latitude: CrmProp<number> = new CrmProp<number>("address1_latitude")
  msdyn_serviceterritory: CrmProp<EntityReference[]> = new CrmProp<EntityReference[]>("msdyn_serviceterritory")
  address2_shippingmethodcode: CrmProp<address2_shippingmethodcode> = new CrmProp<address2_shippingmethodcode>("address2_shippingmethodcode")
  primarycontactidyominame: CrmProp<string> = new CrmProp<string>("primarycontactidyominame")
  int_facebook: CrmProp<string> = new CrmProp<string>("int_facebook")
  int_twitter: CrmProp<string> = new CrmProp<string>("int_twitter")
  preferredappointmentdaycode: CrmProp<preferredappointmentdaycode> = new CrmProp<preferredappointmentdaycode>("preferredappointmentdaycode")
  modifiedbyname: CrmProp<string> = new CrmProp<string>("modifiedbyname")
  createdbyyominame: CrmProp<string> = new CrmProp<string>("createdbyyominame")
  address2_freighttermscode: CrmProp<address2_freighttermscode> = new CrmProp<address2_freighttermscode>("address2_freighttermscode")
  address1_upszone: CrmProp<string> = new CrmProp<string>("address1_upszone")
  address2_addressid: CrmProp<string> = new CrmProp<string>("address2_addressid")
  slaname: CrmProp<string> = new CrmProp<string>("slaname")
  msdyn_taxexempt: CrmProp<boolean> = new CrmProp<boolean>("msdyn_taxexempt")
  parentaccountidyominame: CrmProp<string> = new CrmProp<string>("parentaccountidyominame")
  address2_primarycontactname: CrmProp<string> = new CrmProp<string>("address2_primarycontactname")
  opendeals: CrmProp<number> = new CrmProp<number>("opendeals")
}
