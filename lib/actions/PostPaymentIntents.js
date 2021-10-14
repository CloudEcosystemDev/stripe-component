/**
 * Auto-generated action file for "Stripe API" API.
 *
 * Generated at: 2021-10-13T15:24:39.455Z
 * Mass generator version: 1.0.0
 *
 * : stripe-component
 * Copyright © 2020,  AG
 *
 * All files of this connector are licensed under the Apache 2.0 License. For details
 * see the file LICENSE on the toplevel directory.
 *
 *
 * Operation: 'PostPaymentIntents'
 * Endpoint Path: '/v1/payment_intents'
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
    "amount": "amount",
    "application_fee_amount": "application_fee_amount",
    "capture_method": "capture_method",
    "confirm": "confirm",
    "confirmation_method": "confirmation_method",
    "currency": "currency",
    "customer": "customer",
    "description": "description",
    "error_on_requires_action": "error_on_requires_action",
    "expand": "expand",
    "mandate": "mandate",
    "accepted_at": "accepted_at",
    "offline": "offline",
    "ip_address": "ip_address",
    "user_agent": "user_agent",
    "online": "online",
    "type": "type",
    "customer_acceptance": "customer_acceptance",
    "mandate_data": "mandate_data",
    "metadata": "metadata",
    "off_session": "off_session",
    "on_behalf_of": "on_behalf_of",
    "payment_method": "payment_method",
    "account_number": "account_number",
    "institution_number": "institution_number",
    "transit_number": "transit_number",
    "acss_debit": "acss_debit",
    "afterpay_clearpay": "afterpay_clearpay",
    "alipay": "alipay",
    "bsb_number": "bsb_number",
    "au_becs_debit": "au_becs_debit",
    "sort_code": "sort_code",
    "bacs_debit": "bacs_debit",
    "bancontact": "bancontact",
    "address": "address",
    "email": "email",
    "name": "name",
    "phone": "phone",
    "billing_details": "billing_details",
    "tax_id": "tax_id",
    "boleto": "boleto",
    "bank": "bank",
    "eps": "eps",
    "fpx": "fpx",
    "giropay": "giropay",
    "grabpay": "grabpay",
    "ideal": "ideal",
    "interac_present": "interac_present",
    "day": "day",
    "month": "month",
    "year": "year",
    "dob": "dob",
    "klarna": "klarna",
    "oxxo": "oxxo",
    "p24": "p24",
    "iban": "iban",
    "sepa_debit": "sepa_debit",
    "country": "country",
    "sofort": "sofort",
    "wechat_pay": "wechat_pay",
    "payment_method_data": "payment_method_data",
    "card": "card",
    "card_present": "card_present",
    "payment_method_options": "payment_method_options",
    "payment_method_types": "payment_method_types",
    "receipt_email": "receipt_email",
    "return_url": "return_url",
    "setup_future_usage": "setup_future_usage",
    "city": "city",
    "line1": "line1",
    "line2": "line2",
    "postal_code": "postal_code",
    "state": "state",
    "carrier": "carrier",
    "tracking_number": "tracking_number",
    "shipping": "shipping",
    "statement_descriptor": "statement_descriptor",
    "statement_descriptor_suffix": "statement_descriptor_suffix",
    "destination": "destination",
    "transfer_data": "transfer_data",
    "transfer_group": "transfer_group",
    "use_stripe_sdk": "use_stripe_sdk",
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
        operationId: 'PostPaymentIntents',
        pathName: '/v1/payment_intents',
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