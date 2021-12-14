/**
 * Auto-generated action file for "Stripe API" API.
 *
 * Generated at: 2021-10-13T15:24:39.466Z
 * Mass generator version: 1.0.0
 *
 * : stripe-component
 * Copyright © 2020,  AG
 *
 * All files of this connector are licensed under the Apache 2.0 License. For details
 * see the file LICENSE on the toplevel directory.
 *
 *
 * Operation: 'PostPaymentMethods'
 * Endpoint Path: '/v1/payment_methods'
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
    "card": "card",
    "customer": "customer",
    "bank": "bank",
    "eps": "eps",
    "expand": "expand",
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
    "metadata": "metadata",
    "oxxo": "oxxo",
    "p24": "p24",
    "payment_method": "payment_method",
    "iban": "iban",
    "sepa_debit": "sepa_debit",
    "country": "country",
    "sofort": "sofort",
    "type": "type",
    "wechat_pay": "wechat_pay",
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
    securities['bearerAuth'] = cfg['key'];

    if(cfg.otherServer){
        if(!spec.servers){
            spec.servers = [];
        }
        spec.servers.push({"url":cfg.otherServer})
    }
    
    
    let callParams = {
        spec: spec,
        operationId: 'PostPaymentMethods',
        pathName: '/v1/payment_methods',
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