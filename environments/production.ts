import { IEnvironment } from "./env-model";

export const prodVariables:IEnvironment = {
  environmentName: 'Production Environment',
  ionicEnvName: 'prod',

  // Front-end
  apiEndpoint: 'http://localhost:8080',

  // Back-end
  dbHost: 'mongodb://ionic-devops-kat:alucard666@ds117209.mlab.com:17209',
  dbName: 'ionic-devops-kat'
};
