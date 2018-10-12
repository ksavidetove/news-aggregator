import { writeFile } from 'fs';
// import { argv } from 'yargs';
//
// // This is good for local dev environments, when it's better to
// // store a projects environment variables in a .gitignore'd file
// require('dotenv').config();
//
// // Would be passed to script like this:
// // `ts-node set-env.ts --environment=dev`
// // we get it from yargs's argv object
// const environment = argv.environment;
// const isProd = environment === 'prod';

const targetPath = `./src/environments/environment.ts`;
const targetPathProd = `./src/environments/environment.prod.ts`;

const envConfigFile = `
export const environment = {
  production: false,
  clientId: "${process.env.CLIENT_ID}"
};
`;

const envConfigFileProd = `
export const environment = {
  production: true,
  clientId: "${process.env.CLIENT_ID}"
};
`;

writeFile(targetPath, envConfigFile, function (err) {
  if (err) {
    console.log(err);
  }

  console.log(`Output generated at ${targetPath}`);
});

writeFile(targetPathProd, envConfigFileProd, function (err) {
  if (err) {
    console.log(err);
  }

  console.log(`Output generated at ${targetPathProd}`);
});
