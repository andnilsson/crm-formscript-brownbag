import { CrmProp, EntityReference, IQueryable } from './Base'

export enum address3_addresstypecode {
 Standardvrde = 1,
}

export enum address1_addresstypecode {
 Fakturatill = 1,
 Levereratill = 2,
 Primr = 3,
 vrigt = 4,
}

export enum address1_freighttermscode {
 FOB = 1,
 Fraktfritt = 2,
}

export enum accountrolecode {
 Beslutsfattare = 1,
 Anstlld = 2,
 Pverkare = 3,
}

export enum address1_shippingmethodcode {
 Post = 5,
 Bud = 19,
 Enligtk = 26,
}

export enum gendercode {
 Man = 1,
 Kvinna = 2,
}

export enum preferredappointmenttimecode {
 Frmiddag = 1,
 Eftermiddag = 2,
 Kvll = 3,
}

export enum customertypecode {
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

export enum address2_freighttermscode {
 Standardvrde = 1,
}

export enum educationcode {
 Standardvrde = 1,
}

export enum address3_freighttermscode {
 Standardvrde = 1,
}

export enum address3_shippingmethodcode {
 Standardvrde = 1,
}

export enum paymenttermscode {
 enum30dagarnetto = 1,
 enum10dagarnetto = 36,
 enum20dagarnetto = 37,
}

export enum address2_addresstypecode {
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

export enum haschildrencode {
 Standardvrde = 1,
}

export enum familystatuscode {
 Ogift = 1,
 Gift = 2,
 Skild = 3,
 nkankeman = 4,
}

export enum address2_shippingmethodcode {
 Standardvrde = 1,
}

export enum leadsourcecode {
 Standardvrde = 1,
}

export enum shippingmethodcode {
 Standardvrde = 1,
}

export enum territorycode {
 Standardvrde = 1,
}

export class Contact implements IQueryable {
  getSchemaName() { return "contacts" };
  emailaddress2: string;
  emailaddress1: string;
  address3_addresstypecode: address3_addresstypecode;
  address1_city: string;
  address3_line1: string;
  address1_line1: string;
  address1_longitude: number;
  modifiedon: Date;
  aging90: number;
  overriddencreatedon: Date;
  yomilastname: string;
  yomifirstname: string;
  donotpostalmail: boolean;
  yomifullname: string;
  createdbyexternalpartyname: string;
  address1_addresstypecode: address1_addresstypecode;
  address3_line2: string;
  modifiedbyyominame: string;
  aging30: number;
  address1_freighttermscode: address1_freighttermscode;
  address3_telephone1: string;
  int_twitter: string;
  address3_line3: string;
  donotsendmm: boolean;
  address2_county: string;
  creditonhold: boolean;
  transactioncurrencyidname: string;
  donotbulkpostalmail: boolean;
  aging60_base: number;
  accountrolecode: accountrolecode;
  int_kloutscore: number;
  preferredsystemuseridyominame: string;
  address1_shippingmethodcode: address1_shippingmethodcode;
  _createdby_value: string
  gendercode: gendercode;
  address3_utcoffset: number;
  externaluseridentifier: string;
  address3_primarycontactname: string;
  modifiedbyexternalpartyyominame: string;
  _originatingleadid_value: string
  preferredsystemuseridname: string;
  preferredserviceidname: string;
  _owningbusinessunit_value: string
  preferredappointmenttimecode: preferredappointmenttimecode;
  address2_stateorprovince: string;
  mobilephone: string;
  parentcustomeridyominame: string;
  address2_country: string;
  address2_line2: string;
  address3_stateorprovince: string;
  _modifiedonbehalfby_value: string
  _slaid_value: string
  assistantphone: string;
  _parentcontactid_value: string
  onholdtime: number;
  parentcontactidyominame: string;
  address3_longitude: number;
  creditlimit: number;
  birthdate: Date;
  originatingleadidname: string;
  address1_utcoffset: number;
  managerphone: string;
  employeeid: string;
  modifiedbyexternalpartyname: string;
  address3_upszone: string;
  customertypecode: customertypecode;
  address3_composite: string;
  isprivate: boolean;
  int_facebookservice: string;
  telephone3: string;
  customersizecode: customersizecode;
  preferredcontactmethodcode: preferredcontactmethodcode;
  childrensnames: string;
  address2_latitude: number;
  createdon: Date;
  donotbulkemail: boolean;
  slaname: string;
  donotfax: boolean;
  annualincome_base: number;
  aging90_base: number;
  address1_composite: string;
  firstname: string;
  _createdonbehalfby_value: string
  address2_freighttermscode: address2_freighttermscode;
  callback: string;
  address2_postalcode: string;
  educationcode: educationcode;
  lastusedincampaign: Date;
  utcconversiontimezonecode: number;
  processid: string;
  owneridyominame: string;
  governmentid: string;
  isautocreate: boolean;
  address2_line3: string;
  description: string;
  _modifiedby_value: string
  timezoneruleversionnumber: number;
  spousesname: string;
  address1_county: string;
  createdbyname: string;
  address3_freighttermscode: address3_freighttermscode;
  donotemail: boolean;
  address3_county: string;
  pager: string;
  address2_postofficebox: string;
  address2_telephone1: string;
  address2_telephone2: string;
  address2_telephone3: string;
  originatingleadidyominame: string;
  telephone1: string;
  int_kloutscoreservice: number;
  address1_addressid: string;
  traversedpath: string;
  entityimage_url: string;
  annualincome: number;
  _owninguser_value: string
  websiteurl: string;
  address2_name: string;
  middlename: string;
  address3_telephone2: string;
  entityimageid: string;
  aging60: number;
  timespentbymeonemailandmeetings: string;
  parentcustomeridname: string;
  owneridname: string;
  address3_shippingmethodcode: address3_shippingmethodcode;
  createdonbehalfbyyominame: string;
  address2_composite: string;
  address1_country: string;
  _owningteam_value: string
  int_facebook: string;
  address1_stateorprovince: string;
  paymenttermscode: paymenttermscode;
  marketingonly: boolean;
  modifiedonbehalfbyname: string;
  _preferredequipmentid_value: string
  address1_line3: string;
  createdbyexternalpartyyominame: string;
  _slainvokedid_value: string
  mastercontactidname: string;
  jobtitle: string;
  nickname: string;
  _transactioncurrencyid_value: string
  managername: string;
  address1_telephone1: string;
  address1_telephone2: string;
  address1_telephone3: string;
  isbackofficecustomer: boolean;
  contactid: string;
  address2_utcoffset: number;
  suffix: string;
  slainvokedidname: string;
  fax: string;
  _masterid_value: string
  mastercontactidyominame: string;
  assistantname: string;
  yomimiddlename: string;
  _ownerid_value: string
  address3_country: string;
  participatesinworkflow: boolean;
  creditlimit_base: number;
  address2_fax: string;
  merged: boolean;
  address2_longitude: number;
  _modifiedbyexternalparty_value: string
  _defaultpricelevelid_value: string
  preferredequipmentidname: string;
  int_twitterservice: string;
  _accountid_value: string
  address3_latitude: number;
  donotphone: boolean;
  accountidname: string;
  address1_primarycontactname: string;
  lastonholdtime: Date;
  address1_line2: string;
  modifiedonbehalfbyyominame: string;
  company: string;
  _parentcustomerid_value: string
  address2_addresstypecode: address2_addresstypecode;
  address2_upszone: string;
  followemail: boolean;
  address3_name: string;
  address3_fax: string;
  salutation: string;
  address1_postalcode: string;
  _createdbyexternalparty_value: string
  stageid: string;
  address3_telephone3: string;
  address3_postalcode: string;
  defaultpricelevelidname: string;
  preferredappointmentdaycode: preferredappointmentdaycode;
  _preferredserviceid_value: string
  address2_addressid: string;
  home2: string;
  anniversary: Date;
  importsequencenumber: number;
  address2_city: string;
  haschildrencode: haschildrencode;
  telephone2: string;
  subscriptionid: string;
  familystatuscode: familystatuscode;
  department: string;
  address3_city: string;
  business2: string;
  _preferredsystemuserid_value: string
  aging30_base: number;
  address1_name: string;
  address1_fax: string;
  address1_latitude: number;
  address2_shippingmethodcode: address2_shippingmethodcode;
  emailaddress3: string;
  address3_postofficebox: string;
  createdonbehalfbyname: string;
  parentcontactidname: string;
  modifiedbyname: string;
  createdbyyominame: string;
  leadsourcecode: leadsourcecode;
  address2_line1: string;
  address1_upszone: string;
  lastname: string;
  accountidyominame: string;
  shippingmethodcode: shippingmethodcode;
  territorycode: territorycode;
  ftpsiteurl: string;
  numberofchildren: number;
  address1_postofficebox: string;
  address2_primarycontactname: string;
  fullname: string;
  address3_addressid: string;
}

export class ContactForm {
  emailaddress2: CrmProp<string> = new CrmProp<string>("emailaddress2")
  emailaddress1: CrmProp<string> = new CrmProp<string>("emailaddress1")
  address3_addresstypecode: CrmProp<address3_addresstypecode> = new CrmProp<address3_addresstypecode>("address3_addresstypecode")
  address1_city: CrmProp<string> = new CrmProp<string>("address1_city")
  address3_line1: CrmProp<string> = new CrmProp<string>("address3_line1")
  address1_line1: CrmProp<string> = new CrmProp<string>("address1_line1")
  address1_longitude: CrmProp<number> = new CrmProp<number>("address1_longitude")
  modifiedon: CrmProp<Date> = new CrmProp<Date>("modifiedon")
  aging90: CrmProp<number> = new CrmProp<number>("aging90")
  overriddencreatedon: CrmProp<Date> = new CrmProp<Date>("overriddencreatedon")
  yomilastname: CrmProp<string> = new CrmProp<string>("yomilastname")
  yomifirstname: CrmProp<string> = new CrmProp<string>("yomifirstname")
  donotpostalmail: CrmProp<boolean> = new CrmProp<boolean>("donotpostalmail")
  yomifullname: CrmProp<string> = new CrmProp<string>("yomifullname")
  createdbyexternalpartyname: CrmProp<string> = new CrmProp<string>("createdbyexternalpartyname")
  address1_addresstypecode: CrmProp<address1_addresstypecode> = new CrmProp<address1_addresstypecode>("address1_addresstypecode")
  address3_line2: CrmProp<string> = new CrmProp<string>("address3_line2")
  modifiedbyyominame: CrmProp<string> = new CrmProp<string>("modifiedbyyominame")
  aging30: CrmProp<number> = new CrmProp<number>("aging30")
  address1_freighttermscode: CrmProp<address1_freighttermscode> = new CrmProp<address1_freighttermscode>("address1_freighttermscode")
  address3_telephone1: CrmProp<string> = new CrmProp<string>("address3_telephone1")
  int_twitter: CrmProp<string> = new CrmProp<string>("int_twitter")
  address3_line3: CrmProp<string> = new CrmProp<string>("address3_line3")
  donotsendmm: CrmProp<boolean> = new CrmProp<boolean>("donotsendmm")
  address2_county: CrmProp<string> = new CrmProp<string>("address2_county")
  creditonhold: CrmProp<boolean> = new CrmProp<boolean>("creditonhold")
  transactioncurrencyidname: CrmProp<string> = new CrmProp<string>("transactioncurrencyidname")
  donotbulkpostalmail: CrmProp<boolean> = new CrmProp<boolean>("donotbulkpostalmail")
  aging60_base: CrmProp<number> = new CrmProp<number>("aging60_base")
  accountrolecode: CrmProp<accountrolecode> = new CrmProp<accountrolecode>("accountrolecode")
  int_kloutscore: CrmProp<number> = new CrmProp<number>("int_kloutscore")
  preferredsystemuseridyominame: CrmProp<string> = new CrmProp<string>("preferredsystemuseridyominame")
  address1_shippingmethodcode: CrmProp<address1_shippingmethodcode> = new CrmProp<address1_shippingmethodcode>("address1_shippingmethodcode")
  createdby: CrmProp<EntityReference[]> = new CrmProp<EntityReference[]>("createdby")
  gendercode: CrmProp<gendercode> = new CrmProp<gendercode>("gendercode")
  address3_utcoffset: CrmProp<number> = new CrmProp<number>("address3_utcoffset")
  externaluseridentifier: CrmProp<string> = new CrmProp<string>("externaluseridentifier")
  address3_primarycontactname: CrmProp<string> = new CrmProp<string>("address3_primarycontactname")
  modifiedbyexternalpartyyominame: CrmProp<string> = new CrmProp<string>("modifiedbyexternalpartyyominame")
  originatingleadid: CrmProp<EntityReference[]> = new CrmProp<EntityReference[]>("originatingleadid")
  preferredsystemuseridname: CrmProp<string> = new CrmProp<string>("preferredsystemuseridname")
  preferredserviceidname: CrmProp<string> = new CrmProp<string>("preferredserviceidname")
  owningbusinessunit: CrmProp<EntityReference[]> = new CrmProp<EntityReference[]>("owningbusinessunit")
  preferredappointmenttimecode: CrmProp<preferredappointmenttimecode> = new CrmProp<preferredappointmenttimecode>("preferredappointmenttimecode")
  address2_stateorprovince: CrmProp<string> = new CrmProp<string>("address2_stateorprovince")
  mobilephone: CrmProp<string> = new CrmProp<string>("mobilephone")
  parentcustomeridyominame: CrmProp<string> = new CrmProp<string>("parentcustomeridyominame")
  address2_country: CrmProp<string> = new CrmProp<string>("address2_country")
  address2_line2: CrmProp<string> = new CrmProp<string>("address2_line2")
  address3_stateorprovince: CrmProp<string> = new CrmProp<string>("address3_stateorprovince")
  modifiedonbehalfby: CrmProp<EntityReference[]> = new CrmProp<EntityReference[]>("modifiedonbehalfby")
  slaid: CrmProp<EntityReference[]> = new CrmProp<EntityReference[]>("slaid")
  assistantphone: CrmProp<string> = new CrmProp<string>("assistantphone")
  parentcontactid: CrmProp<EntityReference[]> = new CrmProp<EntityReference[]>("parentcontactid")
  onholdtime: CrmProp<number> = new CrmProp<number>("onholdtime")
  parentcontactidyominame: CrmProp<string> = new CrmProp<string>("parentcontactidyominame")
  address3_longitude: CrmProp<number> = new CrmProp<number>("address3_longitude")
  creditlimit: CrmProp<number> = new CrmProp<number>("creditlimit")
  birthdate: CrmProp<Date> = new CrmProp<Date>("birthdate")
  originatingleadidname: CrmProp<string> = new CrmProp<string>("originatingleadidname")
  address1_utcoffset: CrmProp<number> = new CrmProp<number>("address1_utcoffset")
  managerphone: CrmProp<string> = new CrmProp<string>("managerphone")
  employeeid: CrmProp<string> = new CrmProp<string>("employeeid")
  modifiedbyexternalpartyname: CrmProp<string> = new CrmProp<string>("modifiedbyexternalpartyname")
  address3_upszone: CrmProp<string> = new CrmProp<string>("address3_upszone")
  customertypecode: CrmProp<customertypecode> = new CrmProp<customertypecode>("customertypecode")
  address3_composite: CrmProp<string> = new CrmProp<string>("address3_composite")
  isprivate: CrmProp<boolean> = new CrmProp<boolean>("isprivate")
  int_facebookservice: CrmProp<string> = new CrmProp<string>("int_facebookservice")
  telephone3: CrmProp<string> = new CrmProp<string>("telephone3")
  customersizecode: CrmProp<customersizecode> = new CrmProp<customersizecode>("customersizecode")
  preferredcontactmethodcode: CrmProp<preferredcontactmethodcode> = new CrmProp<preferredcontactmethodcode>("preferredcontactmethodcode")
  childrensnames: CrmProp<string> = new CrmProp<string>("childrensnames")
  address2_latitude: CrmProp<number> = new CrmProp<number>("address2_latitude")
  createdon: CrmProp<Date> = new CrmProp<Date>("createdon")
  donotbulkemail: CrmProp<boolean> = new CrmProp<boolean>("donotbulkemail")
  slaname: CrmProp<string> = new CrmProp<string>("slaname")
  donotfax: CrmProp<boolean> = new CrmProp<boolean>("donotfax")
  annualincome_base: CrmProp<number> = new CrmProp<number>("annualincome_base")
  aging90_base: CrmProp<number> = new CrmProp<number>("aging90_base")
  address1_composite: CrmProp<string> = new CrmProp<string>("address1_composite")
  firstname: CrmProp<string> = new CrmProp<string>("firstname")
  createdonbehalfby: CrmProp<EntityReference[]> = new CrmProp<EntityReference[]>("createdonbehalfby")
  address2_freighttermscode: CrmProp<address2_freighttermscode> = new CrmProp<address2_freighttermscode>("address2_freighttermscode")
  callback: CrmProp<string> = new CrmProp<string>("callback")
  address2_postalcode: CrmProp<string> = new CrmProp<string>("address2_postalcode")
  educationcode: CrmProp<educationcode> = new CrmProp<educationcode>("educationcode")
  lastusedincampaign: CrmProp<Date> = new CrmProp<Date>("lastusedincampaign")
  utcconversiontimezonecode: CrmProp<number> = new CrmProp<number>("utcconversiontimezonecode")
  processid: CrmProp<string> = new CrmProp<string>("processid")
  owneridyominame: CrmProp<string> = new CrmProp<string>("owneridyominame")
  governmentid: CrmProp<string> = new CrmProp<string>("governmentid")
  isautocreate: CrmProp<boolean> = new CrmProp<boolean>("isautocreate")
  address2_line3: CrmProp<string> = new CrmProp<string>("address2_line3")
  description: CrmProp<string> = new CrmProp<string>("description")
  modifiedby: CrmProp<EntityReference[]> = new CrmProp<EntityReference[]>("modifiedby")
  timezoneruleversionnumber: CrmProp<number> = new CrmProp<number>("timezoneruleversionnumber")
  spousesname: CrmProp<string> = new CrmProp<string>("spousesname")
  address1_county: CrmProp<string> = new CrmProp<string>("address1_county")
  createdbyname: CrmProp<string> = new CrmProp<string>("createdbyname")
  address3_freighttermscode: CrmProp<address3_freighttermscode> = new CrmProp<address3_freighttermscode>("address3_freighttermscode")
  donotemail: CrmProp<boolean> = new CrmProp<boolean>("donotemail")
  address3_county: CrmProp<string> = new CrmProp<string>("address3_county")
  pager: CrmProp<string> = new CrmProp<string>("pager")
  address2_postofficebox: CrmProp<string> = new CrmProp<string>("address2_postofficebox")
  address2_telephone1: CrmProp<string> = new CrmProp<string>("address2_telephone1")
  address2_telephone2: CrmProp<string> = new CrmProp<string>("address2_telephone2")
  address2_telephone3: CrmProp<string> = new CrmProp<string>("address2_telephone3")
  originatingleadidyominame: CrmProp<string> = new CrmProp<string>("originatingleadidyominame")
  telephone1: CrmProp<string> = new CrmProp<string>("telephone1")
  int_kloutscoreservice: CrmProp<number> = new CrmProp<number>("int_kloutscoreservice")
  address1_addressid: CrmProp<string> = new CrmProp<string>("address1_addressid")
  traversedpath: CrmProp<string> = new CrmProp<string>("traversedpath")
  entityimage_url: CrmProp<string> = new CrmProp<string>("entityimage_url")
  annualincome: CrmProp<number> = new CrmProp<number>("annualincome")
  owninguser: CrmProp<EntityReference[]> = new CrmProp<EntityReference[]>("owninguser")
  websiteurl: CrmProp<string> = new CrmProp<string>("websiteurl")
  address2_name: CrmProp<string> = new CrmProp<string>("address2_name")
  middlename: CrmProp<string> = new CrmProp<string>("middlename")
  address3_telephone2: CrmProp<string> = new CrmProp<string>("address3_telephone2")
  entityimageid: CrmProp<string> = new CrmProp<string>("entityimageid")
  aging60: CrmProp<number> = new CrmProp<number>("aging60")
  timespentbymeonemailandmeetings: CrmProp<string> = new CrmProp<string>("timespentbymeonemailandmeetings")
  parentcustomeridname: CrmProp<string> = new CrmProp<string>("parentcustomeridname")
  owneridname: CrmProp<string> = new CrmProp<string>("owneridname")
  address3_shippingmethodcode: CrmProp<address3_shippingmethodcode> = new CrmProp<address3_shippingmethodcode>("address3_shippingmethodcode")
  createdonbehalfbyyominame: CrmProp<string> = new CrmProp<string>("createdonbehalfbyyominame")
  address2_composite: CrmProp<string> = new CrmProp<string>("address2_composite")
  address1_country: CrmProp<string> = new CrmProp<string>("address1_country")
  owningteam: CrmProp<EntityReference[]> = new CrmProp<EntityReference[]>("owningteam")
  int_facebook: CrmProp<string> = new CrmProp<string>("int_facebook")
  address1_stateorprovince: CrmProp<string> = new CrmProp<string>("address1_stateorprovince")
  paymenttermscode: CrmProp<paymenttermscode> = new CrmProp<paymenttermscode>("paymenttermscode")
  marketingonly: CrmProp<boolean> = new CrmProp<boolean>("marketingonly")
  modifiedonbehalfbyname: CrmProp<string> = new CrmProp<string>("modifiedonbehalfbyname")
  preferredequipmentid: CrmProp<EntityReference[]> = new CrmProp<EntityReference[]>("preferredequipmentid")
  address1_line3: CrmProp<string> = new CrmProp<string>("address1_line3")
  createdbyexternalpartyyominame: CrmProp<string> = new CrmProp<string>("createdbyexternalpartyyominame")
  slainvokedid: CrmProp<EntityReference[]> = new CrmProp<EntityReference[]>("slainvokedid")
  mastercontactidname: CrmProp<string> = new CrmProp<string>("mastercontactidname")
  jobtitle: CrmProp<string> = new CrmProp<string>("jobtitle")
  nickname: CrmProp<string> = new CrmProp<string>("nickname")
  transactioncurrencyid: CrmProp<EntityReference[]> = new CrmProp<EntityReference[]>("transactioncurrencyid")
  managername: CrmProp<string> = new CrmProp<string>("managername")
  address1_telephone1: CrmProp<string> = new CrmProp<string>("address1_telephone1")
  address1_telephone2: CrmProp<string> = new CrmProp<string>("address1_telephone2")
  address1_telephone3: CrmProp<string> = new CrmProp<string>("address1_telephone3")
  isbackofficecustomer: CrmProp<boolean> = new CrmProp<boolean>("isbackofficecustomer")
  contactid: CrmProp<string> = new CrmProp<string>("contactid")
  address2_utcoffset: CrmProp<number> = new CrmProp<number>("address2_utcoffset")
  suffix: CrmProp<string> = new CrmProp<string>("suffix")
  slainvokedidname: CrmProp<string> = new CrmProp<string>("slainvokedidname")
  fax: CrmProp<string> = new CrmProp<string>("fax")
  masterid: CrmProp<EntityReference[]> = new CrmProp<EntityReference[]>("masterid")
  mastercontactidyominame: CrmProp<string> = new CrmProp<string>("mastercontactidyominame")
  assistantname: CrmProp<string> = new CrmProp<string>("assistantname")
  yomimiddlename: CrmProp<string> = new CrmProp<string>("yomimiddlename")
  ownerid: CrmProp<EntityReference[]> = new CrmProp<EntityReference[]>("ownerid")
  address3_country: CrmProp<string> = new CrmProp<string>("address3_country")
  participatesinworkflow: CrmProp<boolean> = new CrmProp<boolean>("participatesinworkflow")
  creditlimit_base: CrmProp<number> = new CrmProp<number>("creditlimit_base")
  address2_fax: CrmProp<string> = new CrmProp<string>("address2_fax")
  merged: CrmProp<boolean> = new CrmProp<boolean>("merged")
  address2_longitude: CrmProp<number> = new CrmProp<number>("address2_longitude")
  modifiedbyexternalparty: CrmProp<EntityReference[]> = new CrmProp<EntityReference[]>("modifiedbyexternalparty")
  defaultpricelevelid: CrmProp<EntityReference[]> = new CrmProp<EntityReference[]>("defaultpricelevelid")
  preferredequipmentidname: CrmProp<string> = new CrmProp<string>("preferredequipmentidname")
  int_twitterservice: CrmProp<string> = new CrmProp<string>("int_twitterservice")
  accountid: CrmProp<EntityReference[]> = new CrmProp<EntityReference[]>("accountid")
  address3_latitude: CrmProp<number> = new CrmProp<number>("address3_latitude")
  donotphone: CrmProp<boolean> = new CrmProp<boolean>("donotphone")
  accountidname: CrmProp<string> = new CrmProp<string>("accountidname")
  address1_primarycontactname: CrmProp<string> = new CrmProp<string>("address1_primarycontactname")
  lastonholdtime: CrmProp<Date> = new CrmProp<Date>("lastonholdtime")
  address1_line2: CrmProp<string> = new CrmProp<string>("address1_line2")
  modifiedonbehalfbyyominame: CrmProp<string> = new CrmProp<string>("modifiedonbehalfbyyominame")
  company: CrmProp<string> = new CrmProp<string>("company")
  parentcustomerid: CrmProp<EntityReference[]> = new CrmProp<EntityReference[]>("parentcustomerid")
  address2_addresstypecode: CrmProp<address2_addresstypecode> = new CrmProp<address2_addresstypecode>("address2_addresstypecode")
  address2_upszone: CrmProp<string> = new CrmProp<string>("address2_upszone")
  followemail: CrmProp<boolean> = new CrmProp<boolean>("followemail")
  address3_name: CrmProp<string> = new CrmProp<string>("address3_name")
  address3_fax: CrmProp<string> = new CrmProp<string>("address3_fax")
  salutation: CrmProp<string> = new CrmProp<string>("salutation")
  address1_postalcode: CrmProp<string> = new CrmProp<string>("address1_postalcode")
  createdbyexternalparty: CrmProp<EntityReference[]> = new CrmProp<EntityReference[]>("createdbyexternalparty")
  stageid: CrmProp<string> = new CrmProp<string>("stageid")
  address3_telephone3: CrmProp<string> = new CrmProp<string>("address3_telephone3")
  address3_postalcode: CrmProp<string> = new CrmProp<string>("address3_postalcode")
  defaultpricelevelidname: CrmProp<string> = new CrmProp<string>("defaultpricelevelidname")
  preferredappointmentdaycode: CrmProp<preferredappointmentdaycode> = new CrmProp<preferredappointmentdaycode>("preferredappointmentdaycode")
  preferredserviceid: CrmProp<EntityReference[]> = new CrmProp<EntityReference[]>("preferredserviceid")
  address2_addressid: CrmProp<string> = new CrmProp<string>("address2_addressid")
  home2: CrmProp<string> = new CrmProp<string>("home2")
  anniversary: CrmProp<Date> = new CrmProp<Date>("anniversary")
  importsequencenumber: CrmProp<number> = new CrmProp<number>("importsequencenumber")
  address2_city: CrmProp<string> = new CrmProp<string>("address2_city")
  haschildrencode: CrmProp<haschildrencode> = new CrmProp<haschildrencode>("haschildrencode")
  telephone2: CrmProp<string> = new CrmProp<string>("telephone2")
  subscriptionid: CrmProp<string> = new CrmProp<string>("subscriptionid")
  familystatuscode: CrmProp<familystatuscode> = new CrmProp<familystatuscode>("familystatuscode")
  department: CrmProp<string> = new CrmProp<string>("department")
  address3_city: CrmProp<string> = new CrmProp<string>("address3_city")
  business2: CrmProp<string> = new CrmProp<string>("business2")
  preferredsystemuserid: CrmProp<EntityReference[]> = new CrmProp<EntityReference[]>("preferredsystemuserid")
  aging30_base: CrmProp<number> = new CrmProp<number>("aging30_base")
  address1_name: CrmProp<string> = new CrmProp<string>("address1_name")
  address1_fax: CrmProp<string> = new CrmProp<string>("address1_fax")
  address1_latitude: CrmProp<number> = new CrmProp<number>("address1_latitude")
  address2_shippingmethodcode: CrmProp<address2_shippingmethodcode> = new CrmProp<address2_shippingmethodcode>("address2_shippingmethodcode")
  emailaddress3: CrmProp<string> = new CrmProp<string>("emailaddress3")
  address3_postofficebox: CrmProp<string> = new CrmProp<string>("address3_postofficebox")
  createdonbehalfbyname: CrmProp<string> = new CrmProp<string>("createdonbehalfbyname")
  parentcontactidname: CrmProp<string> = new CrmProp<string>("parentcontactidname")
  modifiedbyname: CrmProp<string> = new CrmProp<string>("modifiedbyname")
  createdbyyominame: CrmProp<string> = new CrmProp<string>("createdbyyominame")
  leadsourcecode: CrmProp<leadsourcecode> = new CrmProp<leadsourcecode>("leadsourcecode")
  address2_line1: CrmProp<string> = new CrmProp<string>("address2_line1")
  address1_upszone: CrmProp<string> = new CrmProp<string>("address1_upszone")
  lastname: CrmProp<string> = new CrmProp<string>("lastname")
  accountidyominame: CrmProp<string> = new CrmProp<string>("accountidyominame")
  shippingmethodcode: CrmProp<shippingmethodcode> = new CrmProp<shippingmethodcode>("shippingmethodcode")
  territorycode: CrmProp<territorycode> = new CrmProp<territorycode>("territorycode")
  ftpsiteurl: CrmProp<string> = new CrmProp<string>("ftpsiteurl")
  numberofchildren: CrmProp<number> = new CrmProp<number>("numberofchildren")
  address1_postofficebox: CrmProp<string> = new CrmProp<string>("address1_postofficebox")
  address2_primarycontactname: CrmProp<string> = new CrmProp<string>("address2_primarycontactname")
  fullname: CrmProp<string> = new CrmProp<string>("fullname")
  address3_addressid: CrmProp<string> = new CrmProp<string>("address3_addressid")
}
