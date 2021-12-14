/**
 * Auto-generated action file for "Stripe API" API.
 *
 * Generated at: 2021-10-13T15:24:38.837Z
 * Mass generator version: 1.0.0
 *
 * : stripe-component
 * Copyright © 2020,  AG
 *
 * All files of this connector are licensed under the Apache 2.0 License. For details
 * see the file LICENSE on the toplevel directory.
 *
 *
 * Operation: 'PostCheckoutSessions'
 * Endpoint Path: '/v1/checkout/sessions'
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
    "allow_promotion_codes": "allow_promotion_codes",
    "enabled": "enabled",
    "recovery": "recovery",
    "after_expiration": "after_expiration",
    "automatic_tax": "automatic_tax",
    "billing_address_collection": "billing_address_collection",
    "cancel_url": "cancel_url",
    "client_reference_id": "client_reference_id",
    "promotions": "promotions",
    "consent_collection": "consent_collection",
    "customer": "customer",
    "customer_email": "customer_email",
    "address": "address",
    "name": "name",
    "shipping": "shipping",
    "customer_update": "customer_update",
    "discounts": "discounts",
    "expand": "expand",
    "expires_at": "expires_at",
    "line_items": "line_items",
    "locale": "locale",
    "metadata": "metadata",
    "mode": "mode",
    "application_fee_amount": "application_fee_amount",
    "capture_method": "capture_method",
    "description": "description",
    "on_behalf_of": "on_behalf_of",
    "receipt_email": "receipt_email",
    "setup_future_usage": "setup_future_usage",
    "city": "city",
    "country": "country",
    "line1": "line1",
    "line2": "line2",
    "postal_code": "postal_code",
    "state": "state",
    "carrier": "carrier",
    "phone": "phone",
    "tracking_number": "tracking_number",
    "statement_descriptor": "statement_descriptor",
    "statement_descriptor_suffix": "statement_descriptor_suffix",
    "amount": "amount",
    "destination": "destination",
    "transfer_data": "transfer_data",
    "transfer_group": "transfer_group",
    "payment_intent_data": "payment_intent_data",
    "currency": "currency",
    "custom_mandate_url": "custom_mandate_url",
    "default_for": "default_for",
    "interval_description": "interval_description",
    "payment_schedule": "payment_schedule",
    "transaction_type": "transaction_type",
    "mandate_options": "mandate_options",
    "verification_method": "verification_method",
    "acss_debit": "acss_debit",
    "expires_after_days": "expires_after_days",
    "boleto": "boleto",
    "oxxo": "oxxo",
    "app_id": "app_id",
    "client": "client",
    "wechat_pay": "wechat_pay",
    "payment_method_options": "payment_method_options",
    "payment_method_types": "payment_method_types",
    "phone_number_collection": "phone_number_collection",
    "setup_intent_data": "setup_intent_data",
    "allowed_countries": "allowed_countries",
    "shipping_address_collection": "shipping_address_collection",
    "shipping_rates": "shipping_rates",
    "submit_type": "submit_type",
    "application_fee_percent": "application_fee_percent",
    "default_tax_rates": "default_tax_rates",
    "items": "items",
    "amount_percent": "amount_percent",
    "trial_end": "trial_end",
    "trial_period_days": "trial_period_days",
    "subscription_data": "subscription_data",
    "success_url": "success_url",
    "tax_id_collection": "tax_id_collection",
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
        operationId: 'PostCheckoutSessions',
        pathName: '/v1/checkout/sessions',
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