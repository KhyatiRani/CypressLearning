/// <reference types="cypress" />



/* const fs = require('fs-extra')
const path = require('path')

function getConfigurationByFile(file) {
  const pathToConfigFile = path.resolve('..'CypressLearning','cypress','config',`${file}.json`)

  return fs.readJson(pathToConfigFile)
} */


// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */

//https://github.com/cypress-io/cypress-grep
// cypress/plugin/index.js

//const getCompareSnapshotsPlugin = require('cypress-visual-regression/dist/plugin');
 
//module.exports = (on, config)=> {
 // getCompareSnapshotsPlugin(on, config);
//}; 







// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {
    console.log(config.env) 
  
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config

  // if version not defined, use local
  //const file = config.env.configFile || 'cypress'

  //return getConfigurationByFile(file)

    // if version not defined, use local
    const version = config.env.version || 'cypress'

    // load env from json
    config.env = require(`../../${version}.json`);
  
    // change baseUrl
    config.baseUrl = config.env.baseUrl
  
    return config

  
}






const {downloadFile} = require('cypress-downloadfile/lib/addPlugin')
const { isFileExist } = require('cy-verify-downloads')
module.exports = (on, config) => {
  on('task', {downloadFile})
  on('task', { isFileExist })
}






