'use strict';

module.exports.hello = (event, context, callback) => {

  const identityId = event.requestContext.identity.cognitoIdentityId;

  const response = {
    statusCode: 200,
    headers: ResponseHeaders,
    body: JSON.stringify({
      message: `Hello from aws lambda ${identityId}`
    }),
  };

  callback(null, response);
};

/*
 Need to add cors headers to access the api from localhost
 */
const ResponseHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Credentials': true,
  'content-type': 'application/json;charset=UTF-8',
  connection: 'close',
};
