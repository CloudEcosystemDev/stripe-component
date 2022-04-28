/**
 * Auto-generated trigger file for "Stripe API" API.
 * Generated at: 2022-04-26T11:55:34.082Z
 * Mass generator version: 1.0.0
 *
 * : stripe-component
 * Copyright © 2020,  AG
 *
 * All files of this connector are licensed under the Apache 2.0 License. For details
 * see the file LICENSE on the toplevel directory.
 *
 */

 const Swagger = require("swagger-client");
 const spec = require("./lib/spec.json");
 const { mapFieldNames, getMetadata } = require("./lib/utils/helpers");
 const componentJson = require("./component.json");
 
 function processAction(msg, cfg, snapshot, incomingMessageHeaders, tokenData) {
//    var isVerbose = process.env.debug || cfg.verbose;
 
//    console.log("data function:", tokenData["function"]);
   console.log("msg:", msg);
   console.log("cfg:", cfg);
 
//    if (isVerbose) {
//      console.log(`---MSG: ${JSON.stringify(msg)}`);
//      console.log(`---CFG: ${JSON.stringify(cfg)}`);
//      console.log(`---ENV: ${JSON.stringify(process.env)}`);
//    }
   const action = componentJson.actions["PostCoupons"];
   const { pathName, method, requestContentType } = action.callParams;
 
   const specPath = spec.paths[pathName];
   const specPathParameters = specPath[method].parameters ? specPath[method].parameters.map(({ name }) => {
     return name;
   }) : [];
 
   const body = msg.data;
   mapFieldNames(body);
 
   let parameters = {};
   for (let param of specPathParameters) {
     parameters[param] = body[param];
   }
   
   let securities = {};
    //  securities['basicAuth'] = {username: cfg.username, password: cfg.passphrase};
     securities['bearerAuth'] = "sk_test_51K2F4ZDori6EXP4gG6ebdWsZVA4bELNc69Wc1iUGZBGDkKnhizDH7KqTIRZRxXvIK5q7ruq0C20EIJFcwbzTq2xn00FpYsGr6Q";
 
//    if (cfg.otherServer) {
//      if (!spec.servers) {
//        spec.servers = [];
//      }
//      spec.servers.push({ url: cfg.otherServer });
//    }
 
   let callParams = {
     spec: spec,
     operationId: "PostCoupons",
     pathName: pathName,
     method: method,
     parameters: parameters,
     requestContentType: requestContentType,
     requestBody: body,
     securities: { authorized: securities },
   };
   if (callParams.method === "get") {
     delete callParams.requestBody;
   }
 
//    if (isVerbose) {
//      let out = Object.assign({}, callParams);
//      out.spec = "[omitted]";
//      console.log(`--SWAGGER CALL: ${JSON.stringify(out)}`);
//    }
 
   const newElement = {};
   // Call operation via Swagger client
   try {
   return Swagger.execute(callParams).then((data) => {
     // emit a single message with data
     delete data.uid;
     newElement.metadata = getMetadata(msg.metadata);
     newElement.data = data.data;
    //  this.emit("data", newElement);
    console.log("data",newElement.data)
   });
} catch (e) {
    console.log(e)
}
 }

 processAction({data: {
     currency: "EUR",
     amount_off: 10
 }})
 // this wrapers offers a simplified emitData(data) function
 module.exports = { process: processAction };
 