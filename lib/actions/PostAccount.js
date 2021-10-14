/**
 * Auto-generated action file for "Stripe API" API.
 *
 * Generated at: 2021-10-13T15:24:38.591Z
 * Mass generator version: 1.0.0
 *
 * : stripe-component
 * Copyright © 2020,  AG
 *
 * All files of this connector are licensed under the Apache 2.0 License. For details
 * see the file LICENSE on the toplevel directory.
 *
 *
 * Operation: 'PostAccount'
 * Endpoint Path: '/v1/account'
 * Method: 'post'
 *
 */



 // how to pass the transformation function... no need
 // pass the meta data 
 // create a new Object 
 // emit the message with the new emit function 

 // securities and auth methods   
 // check how to make the new ferryman and its transform functions functional // no need

const Swagger = require('swagger-client');
const spec = require('../spec.json');

// this wrapers offers a simplified emitData(data) function
module.exports = {process: processAction};

// parameter names for this call
const PARAMETERS = [];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "account_token": "account_token",
    "bank_account": "bank_account",
    "mcc": "mcc",
    "name": "name",
    "product_description": "product_description",
    "city": "city",
    "country": "country",
    "line1": "line1",
    "line2": "line2",
    "postal_code": "postal_code",
    "state": "state",
    "support_address": "support_address",
    "support_email": "support_email",
    "support_phone": "support_phone",
    "support_url": "support_url",
    "url": "url",
    "business_profile": "business_profile",
    "business_type": "business_type",
    "requested": "requested",
    "acss_debit_payments": "acss_debit_payments",
    "afterpay_clearpay_payments": "afterpay_clearpay_payments",
    "au_becs_debit_payments": "au_becs_debit_payments",
    "bacs_debit_payments": "bacs_debit_payments",
    "bancontact_payments": "bancontact_payments",
    "boleto_payments": "boleto_payments",
    "card_issuing": "card_issuing",
    "card_payments": "card_payments",
    "cartes_bancaires_payments": "cartes_bancaires_payments",
    "eps_payments": "eps_payments",
    "fpx_payments": "fpx_payments",
    "giropay_payments": "giropay_payments",
    "grabpay_payments": "grabpay_payments",
    "ideal_payments": "ideal_payments",
    "jcb_payments": "jcb_payments",
    "klarna_payments": "klarna_payments",
    "legacy_payments": "legacy_payments",
    "oxxo_payments": "oxxo_payments",
    "p24_payments": "p24_payments",
    "sepa_debit_payments": "sepa_debit_payments",
    "sofort_payments": "sofort_payments",
    "tax_reporting_us_1099_k": "tax_reporting_us_1099_k",
    "tax_reporting_us_1099_misc": "tax_reporting_us_1099_misc",
    "transfers": "transfers",
    "capabilities": "capabilities",
    "address": "address",
    "town": "town",
    "address_kana": "address_kana",
    "address_kanji": "address_kanji",
    "directors_provided": "directors_provided",
    "executives_provided": "executives_provided",
    "name_kana": "name_kana",
    "name_kanji": "name_kanji",
    "owners_provided": "owners_provided",
    "phone": "phone",
    "registration_number": "registration_number",
    "structure": "structure",
    "tax_id": "tax_id",
    "tax_id_registrar": "tax_id_registrar",
    "vat_id": "vat_id",
    "back": "back",
    "front": "front",
    "document": "document",
    "verification": "verification",
    "company": "company",
    "default_currency": "default_currency",
    "files": "files",
    "bank_account_ownership_verification": "bank_account_ownership_verification",
    "company_license": "company_license",
    "company_memorandum_of_association": "company_memorandum_of_association",
    "company_ministerial_decree": "company_ministerial_decree",
    "company_registration_verification": "company_registration_verification",
    "company_tax_id_verification": "company_tax_id_verification",
    "documents": "documents",
    "email": "email",
    "expand": "expand",
    "external_account": "external_account",
    "dob": "dob",
    "first_name": "first_name",
    "first_name_kana": "first_name_kana",
    "first_name_kanji": "first_name_kanji",
    "full_name_aliases": "full_name_aliases",
    "gender": "gender",
    "id_number": "id_number",
    "last_name": "last_name",
    "last_name_kana": "last_name_kana",
    "last_name_kanji": "last_name_kanji",
    "maiden_name": "maiden_name",
    "metadata": "metadata",
    "political_exposure": "political_exposure",
    "ssn_last_4": "ssn_last_4",
    "additional_document": "additional_document",
    "individual": "individual",
    "icon": "icon",
    "logo": "logo",
    "primary_color": "primary_color",
    "secondary_color": "secondary_color",
    "branding": "branding",
    "date": "date",
    "ip": "ip",
    "user_agent": "user_agent",
    "tos_acceptance": "tos_acceptance",
    "avs_failure": "avs_failure",
    "cvc_failure": "cvc_failure",
    "decline_on": "decline_on",
    "statement_descriptor_prefix": "statement_descriptor_prefix",
    "statement_descriptor": "statement_descriptor",
    "statement_descriptor_kana": "statement_descriptor_kana",
    "statement_descriptor_kanji": "statement_descriptor_kanji",
    "payments": "payments",
    "debit_negative_balances": "debit_negative_balances",
    "delay_days": "delay_days",
    "interval": "interval",
    "monthly_anchor": "monthly_anchor",
    "weekly_anchor": "weekly_anchor",
    "schedule": "schedule",
    "payouts": "payouts",
    "settings": "settings",
    "service_agreement": "service_agreement",
    "requestBody": "requestBody"
};

function processAction(msg, cfg) {
    var isVerbose = process.env.debug || cfg.verbose;

    console.log("msg:",msg);
    console.log("cfg:",cfg)

    if (isVerbose) {
        console.log(`---MSG: ${JSON.stringify(msg)}`);
        console.log(`---CFG: ${JSON.stringify(cfg)}`);
        console.log(`---ENV: ${JSON.stringify(process.env)}`);
    }

    const contentType = 'application/x-www-form-urlencoded';

    const body = msg.data;
    mapFieldNames(body);

    let parameters = {};
    for(let param of PARAMETERS) {
        parameters[param] = body[param];
    }

    const oihUid = msg.metadata !== undefined && msg.metadata.oihUid !== undefined
    ? msg.metadata.oihUid
    : 'oihUid not set yet';
  const recordUid = msg.metadata !== undefined && msg.metadata.recordUid !== undefined
    ? msg.metadata.recordUid
    : undefined;
  const applicationUid = msg.metadata !== undefined && msg.metadata.applicationUid !== undefined
    ? msg.metadata.applicationUid
    : undefined;

    const newElement = {};
    const oihMeta = {
      applicationUid,
      oihUid,
      recordUid,
    };
    
    // credentials for this operation
    let securities = {};
    securities['basicAuth'] = {username: cfg.auth_username, password: cfg.auth_password};;
    securities['bearerAuth'] = cfg['auth_bearerAuth'];

    if(cfg.otherServer){
        if(!spec.servers){
            spec.servers = [];
        }
        spec.servers.push({"url":cfg.otherServer})
    }
    
    
    let callParams = {
        spec: spec,
        operationId: 'PostAccount',
        pathName: '/v1/account',
        method: 'post',
        parameters: parameters,
        requestContentType: contentType,
        requestBody: body,
        securities: {authorized: securities},
        server: spec.servers[cfg.server] || cfg.otherServer,
    };
        if(callParams.method === 'get'){
            delete callParams.requestBody;
        }
    

    if (isVerbose) {
        let out = Object.assign({}, callParams);
        out.spec = '[omitted]';
        console.log(`--SWAGGER CALL: ${JSON.stringify(out)}`);
    }

    // Call operation via Swagger client
    return Swagger.execute(callParams).then(data => {
        // emit a single message with data
        // console.log("swagger data:",data);
        delete data.uid;
        newElement.metadata = oihMeta;
        newElement.data = data.data
        this.emit("data",newElement);

        // if the response contains an array of entities, you can emit them one by one:

        // data.obj.someItems.forEach((item) => {
        //     this.emitData(item);
        // }
    });
}

function mapFieldNames(obj) {
    if(Array.isArray(obj)) {
        obj.forEach(mapFieldNames);
    }
    else if(typeof obj === 'object' && obj) {
        obj = Object.fromEntries(Object.entries(obj).filter(([_, v]) => v != null));

    }

 }