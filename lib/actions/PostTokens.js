/**
 * Auto-generated action file for "Stripe API" API.
 *
 * Generated at: 2021-10-13T15:24:39.790Z
 * Mass generator version: 1.0.0
 *
 * : stripe-component
 * Copyright © 2020,  AG
 *
 * All files of this connector are licensed under the Apache 2.0 License. For details
 * see the file LICENSE on the toplevel directory.
 *
 *
 * Operation: 'PostTokens'
 * Endpoint Path: '/v1/tokens'
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
    "business_type": "business_type",
    "city": "city",
    "country": "country",
    "line1": "line1",
    "line2": "line2",
    "postal_code": "postal_code",
    "state": "state",
    "address": "address",
    "town": "town",
    "address_kana": "address_kana",
    "address_kanji": "address_kanji",
    "directors_provided": "directors_provided",
    "executives_provided": "executives_provided",
    "name": "name",
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
    "dob": "dob",
    "email": "email",
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
    "tos_shown_and_accepted": "tos_shown_and_accepted",
    "account": "account",
    "account_holder_name": "account_holder_name",
    "account_holder_type": "account_holder_type",
    "account_number": "account_number",
    "account_type": "account_type",
    "currency": "currency",
    "routing_number": "routing_number",
    "bank_account": "bank_account",
    "card": "card",
    "customer": "customer",
    "cvc": "cvc",
    "cvc_update": "cvc_update",
    "expand": "expand",
    "files": "files",
    "company_authorization": "company_authorization",
    "passport": "passport",
    "visa": "visa",
    "documents": "documents",
    "nationality": "nationality",
    "director": "director",
    "executive": "executive",
    "owner": "owner",
    "percent_ownership": "percent_ownership",
    "representative": "representative",
    "title": "title",
    "relationship": "relationship",
    "person": "person",
    "pii": "pii",
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
        operationId: 'PostTokens',
        pathName: '/v1/tokens',
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