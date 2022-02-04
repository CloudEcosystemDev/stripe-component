/**
 * Auto-generated action file for "Stripe API" API.
 *
 * Generated at: 2022-02-04T14:02:29.545Z
 * Mass generator version: 1.0.0
 *
 * : stripe-component
 * Copyright © 2020,  AG
 *
 * All files of this connector are licensed under the Apache 2.0 License. For details
 * see the file LICENSE on the toplevel directory.
 *
 *
 * Operation: 'PostSetupIntentsIntentConfirm'
 * Endpoint Path: '/v1/setup_intents/{intent}/confirm'
 * Method: 'post'
 *
 */

// how to pass the transformation function... no need
// pass the meta data
// create a new Object
// emit the message with the new emit function

// securities and auth methods
// check how to make the new ferryman and its transform functions functional // no need

const Swagger = require("swagger-client");
const spec = require("../spec.json");
const { mapFieldNames } = require("../utils/helpers");

// parameter names for this call
const PARAMETERS = [
    "intent"
];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "intent": "intent",
    "client_secret": "client_secret",
    "expand": "expand",
    "mandate_data": "mandate_data",
    "payment_method": "payment_method",
    "currency": "currency",
    "custom_mandate_url": "custom_mandate_url",
    "default_for": "default_for",
    "interval_description": "interval_description",
    "payment_schedule": "payment_schedule",
    "transaction_type": "transaction_type",
    "mandate_options": "mandate_options",
    "verification_method": "verification_method",
    "acss_debit": "acss_debit",
    "request_three_d_secure": "request_three_d_secure",
    "card": "card",
    "sepa_debit": "sepa_debit",
    "payment_method_options": "payment_method_options",
    "return_url": "return_url",
    "requestBody": "requestBody"
};

function processAction(msg, cfg) {
  var isVerbose = process.env.debug || cfg.verbose;

  console.log("msg:", msg);
  console.log("cfg:", cfg);

  if (isVerbose) {
    console.log(`---MSG: ${JSON.stringify(msg)}`);
    console.log(`---CFG: ${JSON.stringify(cfg)}`);
    console.log(`---ENV: ${JSON.stringify(process.env)}`);
  }

  const contentType = 'application/x-www-form-urlencoded';

  const body = msg.data;
  mapFieldNames(body);

  let parameters = {};
  for (let param of PARAMETERS) {
    parameters[param] = body[param];
  }

  const oihUid =
    msg.metadata !== undefined && msg.metadata.oihUid !== undefined
      ? msg.metadata.oihUid
      : "oihUid not set yet";
  const recordUid =
    msg.metadata !== undefined && msg.metadata.recordUid !== undefined
      ? msg.metadata.recordUid
      : undefined;
  const applicationUid =
    msg.metadata !== undefined && msg.metadata.applicationUid !== undefined
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
    securities['basicAuth'] = {username: cfg.username, password: cfg.passphrase};;
    securities['bearerAuth'] = cfg['accessToken'];

  if (cfg.otherServer) {
    if (!spec.servers) {
      spec.servers = [];
    }
    spec.servers.push({ "url": cfg.otherServer });
  }

  let callParams = {
    spec: spec,
    operationId: 'PostSetupIntentsIntentConfirm',
    pathName: '/v1/setup_intents/{intent}/confirm',
    method: 'post',
    parameters: parameters,
    requestContentType: contentType,
    requestBody: body,
    securities: { authorized: securities },
    server: spec.servers[cfg.server] || cfg.otherServer,
  };
  if (callParams.method === "get") {
    delete callParams.requestBody;
  }

  if (isVerbose) {
    let out = Object.assign({}, callParams);
    out.spec = "[omitted]";
    console.log(`--SWAGGER CALL: ${JSON.stringify(out)}`);
  }

  // Call operation via Swagger client
  return Swagger.execute(callParams).then((data) => {
    // emit a single message with data
    // console.log("swagger data:",data);
    delete data.uid;
    newElement.metadata = oihMeta;
    newElement.data = data.data;
    this.emit("data", newElement);

    // if the response contains an array of entities, you can emit them one by one:

    // data.obj.someItems.forEach((item) => {
    //     this.emitData(item);
    // }
  });
}

// this wrapers offers a simplified emitData(data) function
module.exports = { process: processAction };
