## Example authentication solution using aws-amplify

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

**Run** 
```
yarn start
```


### Steps creating this app

#### Created skeleton app using create-react-app
```
    npx create-react-add amplify-react-example 
    cd amplify-react-example 
    yarn add redux redux-saga prop-types aws-amplify aws-amplify-react semantic-ui-react
```
[commit](https://github.com/spjenk/amplify-react-example/commit/6f3a3d7b1a8b2d09bc5c0a198c5022f90a4ae362)



#### Enabled authentication with aws-amplify 
Configured and enabled aws-amplify within app.js  

[commit](https://github.com/spjenk/amplify-react-example/commit/b0ab0f5cdb06d5b9ad30aedbfd781eefd0638ca0)


#### Create secure lambda then call from react app using amplify 
Created lambda and enabled authentication via IAM (serverless.yml) 

Deploying the lambda and API Gateway 
```
    sls deploy
``` 
[serverless](https://serverless.com/framework/docs/providers/aws/) - serverless documentation for aws 




